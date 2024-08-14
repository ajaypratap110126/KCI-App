// const express = require('express')
// const dotenv = require("dotenv");
import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from "cors";
import path from "path";

import courseRoute from "./route/course.route.js";
import userRoute from "./route/user.route.js";


const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000
const URI = process.env.MongoDBURI;

// app.get('/', (req, res) => {
//   res.send('Mern Pro!')
// })

// Connect to MongoDB
try {
  mongoose.connect(URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true, 
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error",error);
}

//defining route
app.use("/course",courseRoute);
app.use("/user",userRoute)

// Deployement
if(process.env.NODE_ENV === 'production'){
  const dirPath = path.resolve();
  app.use(express.static("Frontend/dist"));
  app.get("*",async(res,req) =>  {
    await res.sendFile(path.resolve(dirPath,"Frontend","dist", "index.html"));
  })
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})