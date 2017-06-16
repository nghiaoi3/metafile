var express = require("express");
var multer = require("multer");
var path = require('path');
var fs = require('fs');
var app = express();


var dir = './uploads';

  if (fs.existsSync(dir)) { 
console.log('before upload : yessss')
           } else { 
      console.log('before upload : no')
     fs.mkdirSync(dir);  }



var upload = multer({ dest:  dir})

app.get('/',function(req,res){
    res.sendFile(__dirname+'/upload.html')
})

app.post('/upload',upload.single('file'),function(req,res){
    
  if (fs.existsSync('dir')) { 
console.log('after upload : yessss')} else {
    console.log('after upload : nnooooo')
}

  if (req.file) {
      console.log(req.file.path)
		res.json({name: req.file.originalname, size:req.file.size})
	}
	
})

//create a server
var port = process.env.PORT || 3000
var server = app.listen(port, function(){
    console.log('server is listening ' +port);
});