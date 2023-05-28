import express from "express";
import {fetchOfferByID, fetchOffers} from "../supabase.js";

const router = express.Router();

//Fetch all offers
router.get("/", async (req,res) => {
    try {
        const offers = await fetchOffers();
        res.json(offers);
      } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
});

//Fetch offer by ID
router.get("/:id", async (req,res) => {
  const offerID = req.params.id;
  try{
    const offer = await fetchOfferByID(offerID);
    res.json(offer);
  } catch(error){
    console.error("Error: ",error);
    res.status(404).json({error: "Offer not found"});
  }
})

export default router