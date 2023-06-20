import express from "express";
import { signUpWithPassword,loginWithPassword } from "../supabase.js";

const router = express.Router();
router.use(express.json());

router.post("/",async (req,res) => {
    const {email,password,fullName,phoneNumber} = req.body;

    try{
        const {data,error} = await signUpWithPassword({email,password,fullName,phoneNumber});

        if(error){
            console.error("Error signing up: ", error.message);
            return res.status(400).json({error: "Failed to register"})
        }

        return res.status(200).json({data})
    }catch(error){
        console.error("Server error signing up: ",error.message);
        return res.status(500).json({error: "Server error"});
    }
})

export default router