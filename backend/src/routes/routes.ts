import express from "express";
import controller from "../controller/users";

const router = express.Router();

router.get("/get/users", controller.getAllUsers);

export = router;
