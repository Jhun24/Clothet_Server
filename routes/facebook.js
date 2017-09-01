module.exports = facebook;

function facebook(app,randomstring,postModel) {
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


    app.post('/fb/write', upload.single('images'),  function(req, res) {
        console.log(req.file["filename"]);
        var like = "0";
        var title = req.body.title;
        var content = req.body.content;

        var token = randomstring.generate();
        var imgName = req.file["filename"];

        var savePostModel = new postModel({
            "title":title,
            "content":content,
            "token":token,
            "img":imgName,
            "like":like
        });

        savePostModel.find((err,model)=>{
           if(err) throw err;
           res.send(200);
        });
    });

    app.get('/fb/list',(req,res)=>{
       postModel.find({},(err,model)=>{
          if(err) throw err;
          if(model.length == 0){
              res.send(404);
          }
          else{
              res.json(model);
          }
       });

    });

    app.get('/fb/ddabap',(req,res)=>{
       var postToken = req.query.postToken;
       var shangus = req.query.shangus;

       if(shangus == true){
           postModel.find({"token":postToken},(err,model)=>{
                if(err) throw err;
                if(model.length == 0){
                    res.send(404);
                }
                else{
                    var num = model[0]["like"] + 1;
                    postModel.update({"token":postToken},{$set:{"like":num}},(error,m)=>{
                        if(error) throw error;
                        res.send(num);
                    })
                }
           });
        }
        else{
            postModel.find({"token":postToken},(err,model)=>{
                if(err) throw err;
                if(model.length == 0){
                    res.send(404);
                }
                else{
                    var num = model[0]["like"] - 1;
                    postModel.update({"token":postToken},{$set:{"like":num}},(error,m)=>{
                        if(error) throw error;
                        res.send(num);
                    })
                }
            });
        }

    });
}
