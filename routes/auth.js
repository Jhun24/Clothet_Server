module.exports = auth;

function auth(app , randomstring,userModel){
    app.post('/auth/login',(req,res)=>{
        var id = req.body.id;
        var ps = req.body.ps;

        userModel.find({"id":id,"password":ps},(err,model)=>{
            if(err) throw err;

            if(model.length == 0){
                res.send(404);
            }
            else{
                res.json(model);
            }
        });
    });

    app.post('/auth/register',(req,res)=>{
        var id = req.body.id;
        var ps = req.body.ps;
        var name = req.body.name;
        var token = randomstring.generate();

        var saveUserModel = new userModel({
            "id":id,
            "password":ps,
            "name":name,
            "token":token
        });

        saveUserModel.save((err,model)=>{
            if(err) throw err;

            res.json(model);
        });
    });
}
