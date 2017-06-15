var express = require("express");
var multer = require("multer");
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname,'public')))


var upload = multer({ dest: 'uploads/' })


app.get('/',function(req,res){
    res.sendFile(__dirname+'/upload.html')
})

app.post('/upload',upload.single('file'),function(req,res){
  
  if (req.file) {
		res.json({size: req.file.size})
	}
	
})

//create a server
var port = process.env.PORT || 3000
var server = app.listen(port, function(){
    console.log('server is listening ' +port);
});