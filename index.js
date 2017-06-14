var express = require("express");
var multer = require("multer");

var app = express();


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
var upload = multer({ storage: storage }).single('upload_file')

app.get('/',function(req,res){
    res.sendFile(__dirname+'/upload.html')
})

app.post('/upload',function(req,res){
  upload(req, res, function (err) {
    if (err) {
      // An error occurred when uploading 
      return res.end('errorr')
    }
     res.end('successful')
  })
})

//create a server
var port = process.env.PORT || 3000
var server = app.listen(port, function(){
    console.log('server is listening ' +port);
});