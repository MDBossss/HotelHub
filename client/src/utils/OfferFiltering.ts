import { Filters, OfferModel } from "../types/model";


export default function applyFilters(offers:OfferModel[],filters:Filters){
    return offers.filter(offer => {
        if(filters.location && filters.location !== offer.location){
            return false
        }

        if(
            filters.date &&
            filters.date.startDate !== undefined &&
            filters.date.endDate !== undefined &&
            filters.date.endDate != filters.date.startDate &&
            filters.date.startDate < offer.dateStart &&
            filters.date.endDate > offer.dateEnd
        ){
            return false
        }

        if(filters.sleeps && filters.sleeps !== offer.people.toString()){
            return false
        }
    })
}