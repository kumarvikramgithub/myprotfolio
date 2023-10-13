import express from "express";
import authentication from "../Shared/authenticate.js"
import { SignupUser, LoginUser, getUsers, getUsersBy } from "./auth-routes.js";

const router = express.Router();

router.post("/signup", SignupUser);
router.post("/login", LoginUser);
router.get("/getusers", authentication, getUsers);
router.get("/getusersby", authentication, getUsersBy);

export default router;
