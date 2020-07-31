const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose');

const app = express();

/*
Database Setup
*/ 
mongoose.connect('mongodb://localhost:27017/upload', 
    {
        userNewUrlParser: true
    }
);


app.use(express.json()); //express consegue aceitar requisições em formato de json
app.use(express.urlencoded({ extended: true})); // facilita na parte de envio de arquivos
app.use(morgan('dev')); //lib para lidar com logs


// app.use(require('./routers'));
app.use(require("./routers"));


app.listen(3000);