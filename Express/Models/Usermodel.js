const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  username:String,
  name: String,
  email: String,
  isVerified:{
    type:String,default:true
  },
  password: String
});
const userModel = new mongoose.model("users", userSchema);


module.exports = userModel;