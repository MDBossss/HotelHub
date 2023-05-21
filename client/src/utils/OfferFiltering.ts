import { Filters, OfferModel } from "../types/model";


export default function applyAllFilters(offers:OfferModel[],filters:Filters){
    return offers.filter(offer => {
        if(filters.location && filters.location !== offer.location){
            return false
        }

        if(filters.date && filters.date.startDate && filters.date.endDate){
          if(
            (new Date(filters.date.startDate)) <= (new Date(offer.dateStart)) &&
            (new Date(filters.date.endDate)) <= (new Date(offer.dateEnd))
          ){
            return false
          }

        }


        if(filters.sleeps && filters.sleeps !== offer.people.toString()){
            return false
        }

        return true;
    })
}
