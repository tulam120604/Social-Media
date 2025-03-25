// require('dotenv').config();
import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./connect/DB.js";
import passport from 'passport'

const server = express();

server.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);
server.use(passport.initialize());
connectDB(process.env.PORT_mongoo);

server.listen(process.env.PORT, () => {
  console.log("Server is running!");
});

export default server;
