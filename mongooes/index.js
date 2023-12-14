// const express = require("express");
const mongoose = require("mongoose");
const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/sample");
  const userSchema = new mongoose.Schema({
    name: String,
  });
  const userModel = mongoose.model("user", userSchema);
  let data = new userModel({ name: "mayank" });
  let result = await data.save();
  console.log(result);
};
main();
