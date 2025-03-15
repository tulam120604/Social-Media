// require('dotenv').config();
import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import connectDB from './connect/DB.js';

const server = express();

server.use(cors());
connectDB(process.env.PORT_mongoo);

server.listen(process.env.PORT, () => {
    console.log('Server is running!')
})

export default server