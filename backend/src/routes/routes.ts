import express from "express";
import controller from "../controller/usersController";
import { validateCookies } from "../middlewares/auth";
// import { auth } from "../middlewares/auth";

const router = express.Router();

router.post("/register", controller.register);

router.post("/login", controller.login);

router.get("/logout", controller.logout);

router.get("/checkAuth", controller.checkAuth);

router.get("/getUser", validateCookies, controller.getLoggedUser);

export = router;
