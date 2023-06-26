import express from "express";
import userController from "../controller/usersController";
import blogController from "../controller/blogController";
import { validateCookies } from "../middlewares/auth";
// import { auth } from "../middlewares/auth";

const router = express.Router();

router.post("/register", userController.register);

router.post("/login", userController.login);

router.get("/logout", userController.logout);

router.get("/checkAuth", userController.checkAuth);

router.get("/getUser", validateCookies, userController.getLoggedUser);

router.post("/createBlog", blogController.createBlog);

router.get("/getAllBlogs", blogController.getAllBlogs);

export = router;
