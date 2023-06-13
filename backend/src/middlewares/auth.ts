import { Request, Response, NextFunction } from "express";
import controller from "../controller/usersController";

const jwt = require("jsonwebtoken");

const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    let token = req.headers.authorization;

    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, process.env.JWT_SECRET);
      req.params.userId = user.id;
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = auth;
