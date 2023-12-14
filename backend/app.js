import express from "express";
import dotenv from 'dotenv';



import ofertaRoutes from './src/routes/ofertaRoute.js'
import campersRoutes from './src/routes/camperRoute.js'
import gruposRoutes from './src/routes/grupoRoute.js'
import empresaRoutes from './src/routes/empresaRoute.js'
import rutasRoutes from './src/routes/rutaRoute.js'
import estadoRoutes from './src/routes/estadoRoute.js'
import estadoSoliRoutes from './src/routes/estSolicitudRoute.js'

console.clear();
dotenv.config();

const app = express();
const PORT = process.env.PORT 

app.use(express.json());


app.use("/", ofertaRoutes);
app.use("/", campersRoutes);
app.use("/", gruposRoutes);
app.use("/",empresaRoutes);
app.use("/",rutasRoutes);
app.use("/",estadoRoutes);
app.use("/",estadoSoliRoutes)

const main = () => {
    app.listen(PORT, ()=> {
        console.log(`Server is running on port ${PORT}`)
    });
  };

  