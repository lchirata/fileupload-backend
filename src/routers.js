const routers = require('express').Router();

routers.get('/', (req, res) => {
   // return res.send('Hello Word !')
   return res.json({ hello: "test"})
});

module.exports = routers;
