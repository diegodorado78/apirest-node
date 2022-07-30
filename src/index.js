const express = require('express');
const v1WorkoutRouter = require('./v1/routes/workoutRoutes')//puedo omitir el nombre ya que es index y lo tomaria auto

const app = express();//guardo las funcionalidades de express en una const para usarla
const PORT = process.env.PORT || 3000; // Consulto la var de entorno y si no hay entonces default port 3000
app.use(express.json())//se usa para parsear los datos enviados con POST
app.use("/api/v1/workouts", v1WorkoutRouter);//indicamos la version a usar y se concatena la ruta que seria /api/v1/ como el "home"


app.listen(PORT, ()=>{
 console.log(`server listening on port ${PORT}`)
})//Para que funcione hay que llamar de express a listen que recibe el puerto yuna funcion de callback