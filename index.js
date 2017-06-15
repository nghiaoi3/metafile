var express = require("express");
var multer = require("multer");
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname,'public')))


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './metafile/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname+ path.extname(file.originalname))
  }
})


app.get('/',function(req,res){
    res.sendFile(__dirname+'/upload.html')
})

app.post('/upload',function(req,res){
  
  	var upload = multer({
		storage: storage
	}).single('file')
	
	upload(req, res, function(err) {
res.end('size '+storage.destination)	})

	
})

//create a server
var port = process.env.PORT || 3000
var server = app.listen(port, function(){
    console.log('server is listening ' +port);
});