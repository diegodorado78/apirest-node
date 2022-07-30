//Workout es una rep de modelo o schema por eso va con capital letter
const DB = require('./db.json');
const{saveToDatabase} = require('./utils')
const getAllWorkouts=()=>{
 return DB.workouts;// emula los queries buscando la data en el JSON
}
const createNewWorkout = (newWorkout)=>{
 const isAlreadyAdded = DB.workouts.findIndex((workout)=>{
  workout.name===newWorkout.name})>-1 //si esta devuelve un numero mayor a -1 (la posicion en el array)
 if (isAlreadyAdded) {//si al comparar ya existe cierra el proceso sino agrega el workout a la DB
  return
 }
DB.workouts.push(newWorkout);
saveToDatabase(DB)
return newWorkout
}
module.exports= {getAllWorkouts,createNewWorkout}