const express = require('express');
const UserController = require('./controllers/UserController');
const CourseController = require('./controllers/CourseController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();
const connection = require('./database/connection');

routes.post('/session',SessionController.create);

routes.get('/users',UserController.index);
routes.post('/users',UserController.create);
routes.post('/courses',CourseController.create);
routes.get('/courses',CourseController.index);
routes.delete('/courses/:id',CourseController.delete);


module.exports=routes;


