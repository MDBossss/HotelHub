import React, {useEffect, useState} from 'react'
import { OfferModel } from '../../types/model'
import Offer from '../Offer/Offer';

// const offer:OfferModel = {
//     name: "Wilderness Club at Big Ceddar",
//     description: "2 Bedroom Combined Lodge",
//     images: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"],
//     price: 2016,
//     rating: 4.8,
//     dateStart: "28 October",
//     dateEnd: "1 November",
//     duration: 6,
//     beds: 4,
//     people: 8,
//     size: 220
// };

const Offers = () => {

    const [offers,setOffers] = useState<OfferModel[]>([]); //will be replaced with fetch from db

    useEffect(() => {
      fetch("/offers.json")
      .then(response => response.json())
      .then(data => setOffers(data))
    },[])

  return (
    <div className="offers">
        {offers?.map((offer,index) => (
          <Offer key={index} offer={offer}/>
        ))}
    </div>
  )
}

export default Offers