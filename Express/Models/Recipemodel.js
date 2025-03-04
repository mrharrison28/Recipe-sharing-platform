const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name:String,
    image:String,
    ingredients:String,
    steps:String
});
const recipeModel = new mongoose.model("recipe", userSchema);

module.exports = recipeModel;