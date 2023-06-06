import express from "express";

import { getUsers } from "./userController";

const authRouter = express.Router();

authRouter.get("/", getUsers);

export default authRouter;
