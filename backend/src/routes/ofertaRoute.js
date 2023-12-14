import dotenv from 'dotenv';
import express from 'express';

import { ofertaValidation } from '../storage/oferta.js';
import { postOferta, postSeleccionar } from '../../controller/oferta.js';


dotenv.config();

const app = express();

app.post("/api/publicar",ofertaValidation,postOferta);

app.post('/api/seleccionar',ofertaValidation ,postSeleccionar);


export default app;