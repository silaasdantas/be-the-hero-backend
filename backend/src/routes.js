/**
 * request.query  => obtem os Query Params (?, &)
 * request.params => obtem o da Route Params (:id)
 * request.body   => obtem o Body Request (json)
 */
const express = require("express");

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/profile', ProfileController.listFilter);

routes.get('/ongs', OngController.listAll);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.listAll);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;