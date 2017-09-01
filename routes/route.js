module.exports = route;

function route(app){
    app.get('/shangus',(req,res)=>{
        "use strict";
       res.render('index.html')
    });
}
