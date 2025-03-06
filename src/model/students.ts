import mongoose from "mongoose";
const { Schema } = mongoose;

const studentData = new Schema({
  cnic: String,
  firstName: String,
  lastName: String,
  email: String,
  address: String,
});

const userModel =
  mongoose.models?.students || mongoose.model("students", studentData);

export default userModel;
