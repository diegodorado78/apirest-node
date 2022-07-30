const express = require('express');
const router = express.Router();//instancio un nuevo router para crear los metodos http

router
.route("/") //hace ref al v1 del api
.get((req,res)=>{
 res.send(`<h1>hello desde ${req.baseUrl} bitches </h1>`)//base url prop de req
})//cada metodo http recibe un req y res(peticion y respuesta) para la funcion de callback
module.exports=router; //exporto el pequeño modulo de rutas