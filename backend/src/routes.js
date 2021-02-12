const express = require('express');
const UserController = require('./controllers/UserController');
const routes = express.Router();
const connection = require('./database/connection');

routes.get('/users',UserController.index);
routes.post('/users',UserController.create);


module.exports=routes;


