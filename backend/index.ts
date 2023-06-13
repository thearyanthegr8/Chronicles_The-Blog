import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import routes from "./src/routes/routes";
import cors from "cors";

dotenv.config();
const mysql = require("./src/configs/mysql");

mysql.Connect();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
//use routes
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
