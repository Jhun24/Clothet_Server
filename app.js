var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var fs = require('fs');
var randomstring = require('randomstring');
var mongoose = require('mongoose');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html')
app.set('views', 'views')
app.engine('html', require('ejs').renderFile);


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// mongoose.connect('mongodb://localhost:27017/no') ;
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback () {
//         console.log("Mongo On");
//
// });
//
// var user = mongoose.Schema({
//     name:String,
//     id:String,
//     password:String,
//     token:String
// });
//
// var post = mongoose.Schema({
//     token:String,
//     img:String,
//     like:String
// });
//
// var shop  = mongoose.Schema({
//     name:String,
//     category:String,
//     color:String,
//     size:String,
//     img:String,
//     clothToken:String
// });
//
// var saveCloth = mongoose.Schema({
//     name:String,
//     category:String,
//     color:String,
//     size:String,
//     img:String,
//     token:String
// });
//
// var userClothet = mongoose.Schema({
//     userToken:String,
//     name:String,
//     color:String,
//     size:String,
//     category:String,
//     img:String
// });
//
// var userModel = mongoose.model('userModel',user);
// var postModel = mongoose.model('postModel',post);
// var shopModel = mongoose.model('shopModel',shop);
// var saveClothModel = mongoose.model('saveClothModel',saveCloth);
// var userClothetModel = mongoose.model('userClothetModel',userClothet);
//
// require('./routes/auth')(app,randomstring,userModel);
// require('./routes/facebook')(app,randomstring,postModel,userClothetModel);
require('./routes/route')(app);
// require('./routes/shop')(app,randomstring,shopModel,saveClothModel);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

// app.get('/clothList',(req,res)=>{
//     "use strict";
//     console.log("Hello")
//     // var arr = new Array();
//     // arr[0]["name"] = "http://soylatte.kr:8080/img/tshirt1.png"
//     // arr[0]["class"] = true;
//     //
//     // arr[1]["name"] = "http://soylatte.kr:8080/img/tshirt2.png"
//     // arr[1]["class"] = true;
//     //
//     // arr[2]["name"] = "http://soylatte.kr:8080/img/pents1.png"
//     // arr[2]["class"] = false;
//     //
//     // arr[3]["name"] = "http://soylatte.kr:8080/img/pents2.png"
//     // arr[3]["class"] = false;
//     //
//     // arr[4]["name"] = "http://soylatte.kr:8080/img/pents3.png"
//     // arr[4]["class"] = false;
//     //
//     // arr[5]["name"] = "http://soylatte.kr:8080/img/pents4.png"
//     // arr[5]["class"] = false;
//     //
//     // res.json(arr);
//     res.send(200);
// });

app.get('/clothList',(req,res)=>{
    "use strict";
   res.send(200);
});

module.exports = app;
