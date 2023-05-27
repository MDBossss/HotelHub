import express from "express";
import {fetchOffers} from "../supabase";

const router = express.Router();

router.get("/", async (req,res) => {
    try {
        const offers = await fetchOffers();
        res.json(offers);
      } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
});

export default router