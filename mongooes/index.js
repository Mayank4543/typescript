// const express = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  price: Number,
  courses: String,

  category: String,
});
const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/sample", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const userModel = mongoose.model("user", userSchema);
  let data = new userModel({
    name: "mayank",
    price: 10,
    courses: "Bca",
    category: "It",
  });
  let result = await data.save();
  console.log(result);
};
// main();
const update = async () => {
  const userModel = mongoose.model("user", userSchema);
  const user = await userModel.updateOne({
    name: "jay",
    price: 1000,
    courses: "BCA",
    category: "its",
  });
  console.log(user);
};
// update();
const deleteuser = async () => {
  const userModel = mongoose.model("user", userSchema);
  const user = await userModel.deleteOne({
    name: "jay",
  });
  console.log(user);
};
// deleteuser();
const xyzUser = async () => {
  await mongoose.connect("mongodb://localhost:27017/sample", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    const userModel = mongoose.model("user", userSchema);
    const user = await userModel.find({ name: "jay" });
    console.log(user);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

xyzUser();
