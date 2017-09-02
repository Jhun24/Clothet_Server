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
        var arr = new Array();

        arr[0] = new Array();
        arr[0]["name"] = "http://soylatte.kr:8080/img/tshirt1.png"
        arr[0]["class"] = true;

        arr[1] = new Array();
        arr[1]["name"] = "http://soylatte.kr:8080/img/tshirt2.png"
        arr[1]["class"] = true;


        arr[2] = new Array();
        arr[2]["name"] = "http://soylatte.kr:8080/img/pents1.png"
        arr[2]["class"] = false;

        arr[3] = new Array();
        arr[3]["name"] = "http://soylatte.kr:8080/img/pents2.png"
        arr[3]["class"] = false;

        arr[4] = new Array();
        arr[4]["name"] = "http://soylatte.kr:8080/img/pents3.png"
        arr[4]["class"] = false;

        arr[5] = new Array();
        arr[5]["name"] = "http://soylatte.kr:8080/img/pents4.png"
        arr[5]["class"] = false;
        console.log(arr);
        res.json(arr);
        // res.json(arr);
    });


}
