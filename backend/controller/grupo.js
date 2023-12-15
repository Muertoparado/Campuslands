import con from '../src/connection/connection.js'

export async function postGrupo(req,res){

const { id_grupo, nombre_grupo } = req.body;
  console.log(req.body);
  const grupoData = {
    id_grupo,
    nombre_grupo
  };
  con.query(/*sql */ `INSERT INTO grupo SET ?`,[grupoData], (err,data,fil)=>{
    if (err) {
        console.error("Error al ejecutar la consulta de inserción: ", err);
        res.status(500).send("Error al ejecutar la consulta de inserción");
        return;
    }

console.log("post grupo");
res.send(JSON.stringify(data));
console.log(data);
})

}

export async function getGrupos(req,res){
con.query(/*sql */ `SELECT * FROM grupo`, (err,data,fil)=>{
    if (err) {
      console.error("Error al obtener grupos: " + err.message);
      return res.status(500).json({ mensaje: "Error al obtener campers" });
    }
    console.log("Grupos obtenidos con éxito");
    res.status(200).json(data);
  });
;

}