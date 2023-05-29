import axios from "axios";
import { OfferModel } from "../types/model";

/**
 * Async function that fetches all offers from `/api/offers`
 * @returns `OfferModel` array
 */
export async function fetchOffers(){
    const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/offers`);
      return data as OfferModel[];
}

/**
 * Async function that fetches offer by given ID from `api/offers/:id`
 * @param offerID (number) 
 * @returns `OfferModel` object
 */
export async function fetchOfferByID(offerID: number){
    const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/offers/${offerID}`);
    return data as OfferModel;
}