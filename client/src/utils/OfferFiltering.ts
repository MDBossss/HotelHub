import { Filters, OfferModel } from "../types/model";


export default function applyFilters(offers:OfferModel[],filters:Filters){
    return offers.filter(offer => {
        if(filters.location && filters.location !== offer.location){
            return false
        }

        // if(
        //     filters.date &&
        //     filters.date.startDate !== undefined &&
        //     filters.date.endDate !== undefined &&
        //     filters.date.endDate != filters.date.startDate &&
        //     filters.date.startDate < offer.dateStart &&
        //     filters.date.endDate > offer.dateEnd
        // ){
        //     return false
        // }

        if (filters.date && filters.date.startDate && filters.date.endDate) {
            const offerStartDate = offer.dateStart;
            const offerEndDate = offer.dateEnd;
            const selectedStartDate = filters.date.startDate;
            const selectedEndDate = filters.date.endDate;
            const today = new Date();
      
            if (
              selectedStartDate >= today &&
              selectedEndDate <= offerEndDate &&
              selectedStartDate <= offerStartDate
            ) {
              return true;
            } else {
              return false;
            }
          }

        if(filters.sleeps && filters.sleeps !== offer.people.toString()){
            return false
        }

        return true;
    })
}