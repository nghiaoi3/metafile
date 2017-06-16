var express = require("express");
var multer = require("multer");
var path = require('path');
var fs = require('fs');
var app = express();


var dir = './uploads';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    console.log('created directory uploads')
}


var upload = multer({ dest:  dir})

app.get('/',function(req,res){
    res.sendFile(__dirname+'/upload.html')
})

app.post('/upload',upload.single('file'),function(req,res){
  
  if (req.file) {
		res.json({name: req.file.originalname, size:req.file.size})
	}
	
})

//create a server
var port = process.env.PORT || 3000
var server = app.listen(port, function(){
    console.log('server is listening ' +port);
});