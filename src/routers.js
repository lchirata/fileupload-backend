const routers = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const Post = require('./model/Post');

routers.get('/', (req, res) => {
   // return res.send('Hello Word !')
   return res.json({ hello: "word"})
});

routers.post('/posts', multer(multerConfig).single("file") , async (req, res) => {
    // return res.send('Hello Word !')
   //  console.log(req.file);

    const { originalname: name, size, filename: key} = req.file;

    const post = await Post.create({
       name,
       size,
       key,
       url:'',
    });
    return res.json(post);
   //  return res.json({ hello: "word"})
 });


module.exports = routers;
