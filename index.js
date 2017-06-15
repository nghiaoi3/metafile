var express = require("express");
var multer = require("multer");
var path = require('path');

var app = express();


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
        var dest = path.join(__dirname, 'uploads');

    cb(null,dest )
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
 
var upload = multer({ storage: storage }).single('file')

app.get('/',function(req,res){
    res.sendFile(__dirname+'/upload.html')
})

app.post('/upload',function(req,res){
  
  upload(req, res, function (err) {
  if (err)     {return res.end('err is '+err)}
     res.end('successful')
  })
})

//create a server
var port = process.env.PORT || 3000
var server = app.listen(port, function(){
    console.log('server is listening ' +port);
});