import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import routes from "./src/routes/routes";
import cors from "cors";

dotenv.config();
const mysql = require("./src/configs/mysql");

mysql.Connect();

const app: Express = express();
const port = process.env.PORT || 5000;
var session = require("express-session");

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

const store = new session.MemoryStore();

app.use(
  session({
    path: "/",
    secret: "secret",
    cookie: { maxAge: 100000 },
    saveUninitialized: false,
    store,
  })
);

app.use(express.json());
//use routes
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
