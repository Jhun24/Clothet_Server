/**
 * Created by janghunlee on 2017. 9. 1..
 */

module.exports = shop;

function shop(app,randomstring,shopModel,saveClothModel){
    "use strict";
    var multer = require('multer');

    // var upload = multer({ dest: 'uploads/' });

    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now()+".png")
        }
    })

    var upload = multer({ storage: storage })

    app.get('/shop/list',(req,res)=>{
       shopModel.find({},(err,model)=>{
            if(err) throw err;
            if(model.length == 0){
                res.send(404);
            }
            else{
                res.json(model);
            }
       });
    });

    app.post('/shop/add',upload.single('images'),(req,res)=>{
        var img = req.file["filename"];
        var name = req.body.name;
        var category = req.body.category;
        var size = req.body.size;
        var color = req.body.color;

        var token = randomstring.generate();

        var saveShopModel = new shopModel({
            "name":name,
            "category":category,
            "size":size,
            "color":color,
            "img":img,
            "clothToken":token
        });

        saveShopModel.save((err,model)=>{
            if(err) throw err;
            res.send(200);
        });
    });

    app.post('/shop/save',(req,res)=>{
        var clothToken = req.body.clothToken;
        var userToken = req.body.userToken;

        shopModel.find({"clothToken":clothToken},(err,model)=>{
            if(err) throw err;
            if(model.length == 0){
                res.send(404);
            }
            else{
                var name = model[0]["name"];
                var category = model[0]["category"];
                var img = model[0]["img"];
                var size = model[0]["size"];
                var color = model[0]["color"];

                var saveSaveClothModel = new saveClothModel({
                    "name":name,
                    "category":category,
                    "img":img,
                    "size":size,
                    "color":color,
                    "token":userToken
                });

                saveSaveClothModel.save((error,m)=>{
                    if(error) throw error;
                    res.send(200);
                });
            }
        });
    });
}