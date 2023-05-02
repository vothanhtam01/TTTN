const express = require('express')
const app = express()

var multer = require('multer')

var myStorage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, '../public/image')
  }
, 
  filename: function(req, file, cb){
      cb(null, `${file.fieldname}_${+new Date()}.jpg`)
  }
})

var cors = require('cors')

var uploader = multer({storage: myStorage})    

app.use(cors())

app.post('/uploadfile', uploader.single('myFile') , function(req, res, next){
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }

    res.send(req.file)
})

app.listen(2019)

// app.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });