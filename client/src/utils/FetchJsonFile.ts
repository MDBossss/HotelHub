import { OfferModel } from "../types/model";

export async function getOfferByID(id:number){
    const response = await fetch(import.meta.env.VITE_API_BASE_URL + `/api/offers/${id}`);
    const offer = await response.json();
    return offer;
}