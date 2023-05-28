import express from "express";
import { fetchReviews } from "../supabase.js";

const router = express.Router();

//Fetch all reviews
router.get("/", async (req,res) => {
    try{
        const reviews = await fetchReviews();
        res.json(reviews);
    }catch(error){
        console.error("Error: ", error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

export default router