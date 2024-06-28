import express from "express";
import { signUp} from "../controller/auth_controller.js";


const router=express.Router();

// router.post("/signin",signIn)

router.post('/signup',signUp)

// router.get('/signout',signOut)

// router.post('/editprofile', profilePic,editprofile)

// router.get('/getpic',getpic)


















export default router;