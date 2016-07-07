var express = require('express');
var multer = require('multer');

var upload = multer({dest: 'upload/'});

var app = express();

app.use("/", express.static("view"));

app.post("/uploadInfo",upload.single("uploadFile"), function(req, res, next) {
    res.json({
      size: req.file.size});
    
    res.end();
});



app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});