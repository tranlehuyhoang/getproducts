import express from "express";
const app = express();
import axios from "axios";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import connect from "./database/connect.js";
import router from "./routers/router.js";
 
app.use(cors());
app.use(express.json());
// connect();
app.use('/api', router);
const server = http.createServer(app);


server.listen(5000, () => {
  console.log("SERVER RUNNING 5000");
});