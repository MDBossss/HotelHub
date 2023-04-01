import React, {useState} from 'react'
import { SpecialOfferModel } from '../../types/model'
import SpecialOffer from '../SpecialOffer/SpecialOffer';

const offer:SpecialOfferModel = {
    name: "Wilderness Club at Big Ceddar",
    description: "2 Bedroom Combined Lodge",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    price: 2016,
    rating: 4.8,
    dateStart: "28 October",
    dateEnd: "1 November",
    duration: 6,
    beds: 4,
    people: 8,
    size: 220
};

const Offers = () => {

    const [offers,setOffers] = useState<SpecialOfferModel[]>([offer,offer,offer,offer,offer,offer,offer,offer,offer,offer,offer,offer]); //will be replaced with fetch from db

  return (
    <div className="offers">
        {offers?.map((offer,index) => (
          <SpecialOffer key={index} specialOffer={offer}/>
        ))}
    </div>
  )
}

export default Offers