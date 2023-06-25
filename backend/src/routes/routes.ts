import express from "express";
import controller from "../controller/usersController";
import { validateCookies } from "../middlewares/auth";
// import { auth } from "../middlewares/auth";

const router = express.Router();

// router.get("/get/users", controller.getAllUsers);

// router.get("/get/user/:email", controller.getUserByEmail);

router.post("/register", controller.register);

router.post("/login", controller.login);

router.get("/logout", controller.logout);

router.get("/checkAuth", controller.checkAuth);

// router.post("/post", cookieJwtAuth, createPost);

export = router;
