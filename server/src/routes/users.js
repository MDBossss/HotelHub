import express from "express";
import { fetchUserByID, insertUser } from "../supabase.js";

const router = express.Router();
router.use(express.json());

router.post("/add", async (req,res) => {
    const {user} = req.body;
    console.log(user);

    try{
        const{data,error} = await insertUser(user);

        if(error){
            console.error("Error signing in: ", error.message);
            return res.status(400).json({error: "Error inserting user"});
        }
        return res.status(200).json({data})
    }catch(error){
        console.error("Error inserting user:", error.message);
        return res.status(500).json({error: "Server error"});
    }
})

router.get("/:id",async(req,res) => {
    const userID = req.params.id;
    try{
        const user = await fetchUserByID(userID);
        res.json(user);
    }catch(error){
        console.error("Error fetching user: ",error);
        res.status(404).json({error:"User not found"});
    }
})

export default router