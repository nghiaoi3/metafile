var express = require("express");
var multer = require("multer");
var path = require('path');

var app = express();


var upload = multer({ dest: __dirname + '/uploads/' })


app.get('/',function(req,res){
    res.sendFile(__dirname+'/upload.html')
})

app.post('/upload',upload.single('file'),function(req,res){
  
  if (req.file) {
		res.json({name: req.file.originalname, path: req.file.path, size:req.file.size})
	}
	
})

//create a server
var port = process.env.PORT || 3000
var server = app.listen(port, function(){
    console.log('server is listening ' +port);
});