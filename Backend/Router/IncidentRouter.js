import express from 'express';
import { deleteIncident, getAllIncident, getIncidentById, postIncident } from '../Controllers/Controller.js';

const Router = express.Router();

Router.post('/post',postIncident);
Router.get('/get/all',getAllIncident);
Router.get('/get/:id',getIncidentById);
Router.delete('/delete/:id',deleteIncident);

export default Router;    