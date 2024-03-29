const express = require('express');
const UserController = require('./controllers/UserController');
const CourseController = require('./controllers/CourseController');
const SessionController = require('./controllers/SessionController');
const VideosController = require('./controllers/VideoController');
const CourseSpaceController = require('./controllers/CourseSpaceController');
const routes = express.Router();
const connection = require('./database/connection');

routes.post('/session',SessionController.create);

routes.get('/courseSpace/:Course_id',CourseSpaceController.index);

routes.get('/users',UserController.index);
routes.post('/users',UserController.create);


routes.post('/courses',CourseController.create);
routes.get('/courses',CourseController.index);
routes.delete('/courses/:id',CourseController.delete);


routes.get('/videos/:Course_id',VideosController.index);
routes.post('/videos/:Course_id',VideosController.create);
routes.delete('/videos/:Course_id',VideosController.delete);



module.exports=routes;


