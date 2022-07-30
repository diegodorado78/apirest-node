  const workout = require('../database/Workout.js')
  const {v4:uuid}= require('uuid')//al impportarlo me devuleve v4 que sobrenombre como uuid
  const getAllWorkouts= ()=>{
   const allWorkouts= workout.getAllWorkouts();
   return allWorkouts};
  const getOneWorkout= ()=>{return};
  const createNewWorkout= (newWorkout)=>{

  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleDateString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleDateString("en-US", { timeZone: "UTC" })

  };
   const createdWorkout =workout.createNewWorkout(workoutToInsert);
   return createdWorkout;
  };
  const updateOneWorkout= ()=>{return};
  const deleteOneWorkout= ()=>{return};
  module.exports={getAllWorkouts,getOneWorkout,createNewWorkout,updateOneWorkout,deleteOneWorkout}
