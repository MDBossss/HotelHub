import express from "express";
import { loginWithPassword } from "../supabase.js";

const router = express.Router();
router.use(express.json())

router.post("/", async (req,res) => {
    const {email,password} = req.body;

    try{
        const {user,error} = await loginWithPassword({email,password});

        if(error){
            console.error("Error signing in: ", error.message);
            return res.status(400).json({error: "Invalid credentials"});
        }

        return res.status(200).json({user});
    }catch(error){
        console.error("Error signing in: ", error.message);
        return res.status(500).json({error: "Server error"});
    }
})

export default router