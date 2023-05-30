import express from "express";
import { fetchRecents } from "../supabase.js";

const router = express.Router();

//Fetch all recents
router.get("/", async (req,res) => {
    try{
        const recents = await fetchRecents();
        res.json(recents);
    }catch(error){
        console.error("Error: ",error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

export default router