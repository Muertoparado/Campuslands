import express from "express";
import { getGrupos, postGrupo } from '../../controller/grupo.js';
import { grupoValidation } from "../storage/grupo.js";

const app=express();

app.post("/api/grupo",grupoValidation,postGrupo);
app.get("/api/grupo",getGrupos);


export default app;