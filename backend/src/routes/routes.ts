import express from "express";
import controller from "../controller/usersController";

const router = express.Router();

router.get("/get/users", controller.getAllUsers);

// router.get("/get/user/:email", controller.getUserByEmail);

router.post("/register", controller.register);

export = router;
