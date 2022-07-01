import userController from '../controllers/userController.js';
import { Router } from "express";

const userRouters = Router();

userRouters.post("/users", (req, res) => {
    userController.createUser(req, res);
});
userRouters.put("/users/:id", (req, res)=>{
    userController.updateUser(req, res);
});
userRouters.delete("/users/:id", (req, res)=>{
    userController.deleteUser(req, res);
});

export default userRouters;