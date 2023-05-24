import { OfferModel } from "../types/model";

export function sortByRelevance(offers:OfferModel[]){
    return offers;
}

export function sortByNewset(offers:OfferModel[]){
    return offers.slice().sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function sortByRating(offers:OfferModel[]){
    return offers.slice().sort((a,b) => b.rating - a.rating);
}

export function sortByDiscount(offers:OfferModel[]){
    return offers.slice().sort((a,b) => a.people*a.price - b.people*b.price);
}

export function sortByPriceASC(offers:OfferModel[]){
    return offers.slice().sort((a,b) => a.price - b.price);
}

export function sortByPriceDESC(offers:OfferModel[]){
    return offers.slice().sort((a,b) => b.price - a.price);
}