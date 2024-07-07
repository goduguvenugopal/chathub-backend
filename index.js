const express = require("express");
const app = express();
const dotEnv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./route/userRoute")
const profileRoute = require("./route/profileRoute")
 const messageRoute = require("./route/messageRoute")
 
dotEnv.config();

 

// middileware configuration
// Use CORS middleware to allow requests 
app.use(cors("*"));
app.use(express.json());
app.use(express.static("public"));


// mongodb with mongoose connection 
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("mongodb is connected successfully");
  })
  .catch((err) => {
    console.error("Error occured while connecting to the mongoDB", err);
  });


// routes defining 
app.use("/user" ,userRoute)
app.use("/profile" , profileRoute)
app.use("/message" , messageRoute)


const port = process.env.PORT || 5000;

// server listening function
app.listen(port , ()=>{
    console.log(`server running at port number ${port}`);
})

