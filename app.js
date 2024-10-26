const express = require("express");

const cors = require ('cors');
const dbconnect = require("./config.js");
const app = express();
app.use(express.json());
app.use(cors({origin:'*'}));
app.use('/api/usuarios',require('./Routes/usuario.routers.js'));
app.use('/api/empleados',require('./Routes/empleado.routes.js'));

app.listen(3005, ()=> {
    console.log("El servidor esta en el puerto 3005" )
	
})


dbconnect(); 
