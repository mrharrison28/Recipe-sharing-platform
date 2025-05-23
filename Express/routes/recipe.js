var express = require("express");
const recipeModel = require("../Models/Recipemodel");
var router = express.Router();



router.get("/recipe", (req, res) => {
   
    recipeModel.find()
    .then(response=>res.status(200).json({message:response}))
    .catch(err=>res.status(401).json({message:err}))
  });

  router.get("/recipe/:pid", (req, res) => {
   
    recipeModel.findById(req.params.pid)
    .then(response=>
      // console.log(response))
      res.status(200).json({message:response}))
    .catch(err=>res.status(401).json({message:err}))
  });

  router.delete("/recipes/:pid", (req, res) => {
   
    recipeModel.findByIdAndDelete(req.params.pid)
    .then(response=>
      // console.log(response))
      res.status(200).json({message:response}))
    .catch(err=>res.status(401).json({message:fkjgweiug}))
  });


router.post("/recipe", (req, res) => {
  let recipe = new recipeModel({
    name:req.body.name,
    image:req.body.image,
    ingredients:req.body.ingredients,
    steps:req.body.steps
  });
  recipe.save()
  .then(response=>res.status(200).json({message:response}))
  .catch(err=>res.status(401).json({message:err}))
});



module.exports = router;
