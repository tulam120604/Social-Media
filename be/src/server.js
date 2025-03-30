// require('dotenv').config();
import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./connect/DB.js";
import authRouter from "./router/auth.js";

const server = express();
server.use(express.json())

server.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);
connectDB(process.env.PORT_mongoo);
server.use("/v1", authRouter);
server.listen(process.env.PORT, () => {
  console.log("Server is running!");
});

export default server;
