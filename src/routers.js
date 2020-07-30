const routers = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer')

routers.get('/', (req, res) => {
   // return res.send('Hello Word !')
   return res.json({ hello: "word"})
});

routers.post('/posts', multer(multerConfig).single("file") ,(req, res) => {
    // return res.send('Hello Word !')
    console.log(req.file);
    return res.json({ hello: "word"})
 });


module.exports = routers;
