const express = require('express');
const router = express.Router();
//mporto los controladores
//voy creando los endpoints y definiendo su return
   // .get("/", (req, res) => {
   //   res.send("get all workouts");
   // })
   //SUSTITUYO LA FN FLECHA POR EL METODO DEL CONTROLLER
const workoutController = require('../../controllers/workoutController.js');
 router
   .get("/", workoutController.getAllWorkouts)
   .get("/:workoutId",workoutController.getOneWorkout)
   .post("/",workoutController.createNewWorkout)
   .patch("/:workoutId",workoutController.updateOneWorkout)
   .delete("/:workoutId",workoutController.deleteOneWorkout);

   module.exports=router;