import { OfferModel } from "../types/model";

export async function getOfferByID(id:number){
    const response = await fetch("/offers.json");
    const data = await response.json();
    const offer = data.find((obj:OfferModel) => obj.id === id);
    return offer;
}