module.exports = route;

function route(app){
    app.get('/',(req,res)=>{
        "use strict";
       res.render('login.html');
    });

    app.get('/register',(req,res)=>{
        "use strict";
        res.render('signup.html');
    });

    app.get('/main',(req,res)=>{
        "use strict";
        res.render('main.html');
    });
}
