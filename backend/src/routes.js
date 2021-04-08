const express = require('express');
const UserController = require('./controllers/UserController');
const CourseController = require('./controllers/CourseController');
const SessionController = require('./controllers/SessionController');
const ModulesController = require('./controllers/ModuleController');
const VideosController = require('./controllers/VideoController');
const routes = express.Router();
const connection = require('./database/connection');

routes.post('/session',SessionController.create);

routes.get('/users',UserController.index);
routes.post('/users',UserController.create);


routes.post('/courses',CourseController.create);
routes.get('/courses',CourseController.index);
routes.delete('/courses/:id',CourseController.delete);

routes.get('/modules/:Course_id',ModulesController.index);
routes.post('/modules/:Course_id',ModulesController.create);
routes.delete('/modules/:Course_id',ModulesController.delete);

routes.get('/videos/:Modules_id',VideosController.index);
routes.post('/videos/:Modules_id',VideosController.create);
routes.delete('/videos/:Modules_id',VideosController.delete);



module.exports=routes;


