import mysql from "mysql2";

import config from "./config.js";

const conection ={
  connectionLimit: 10,
  connectTimeout: 10000, // 10 segundos
    host:config.host,
    database: config.database,
    user: config.user,
    password: config.password
};

const con=mysql.createPool(conection);
export default con;