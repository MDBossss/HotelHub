import { Filters, OfferModel, SearchFilters } from "../types/model";


export function applyAllFilters(offers:OfferModel[],filters:Filters){
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

export function applySearchFilters(offers:OfferModel[],searchFilters:SearchFilters){
  return offers.filter(offer => {
    if(searchFilters.destination && !offer.name.toLowerCase().includes(searchFilters.destination.toLowerCase()) ){
      return false
    }

    if(searchFilters.date && searchFilters.date.startDate && searchFilters.date.endDate){
      if(
        (new Date(searchFilters.date.startDate)) <= (new Date(offer.dateStart)) &&
        (new Date(searchFilters.date.endDate)) <= (new Date(offer.dateEnd))
      ){
        return false
      }

    }

    return true
  })
}
