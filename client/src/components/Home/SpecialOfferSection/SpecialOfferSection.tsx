import React from 'react'
import SpecialOffer from '../../SpecialOffer/SpecialOffer'
import { SpecialOfferModel } from '../../../types/model';

const specialOffer:SpecialOfferModel = {
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

const SpecialOfferSection = () => {
  return (
    <div className="special-offer-wrapper container" id='Special Offers'>
    <div className="special-offer">
        <h1>Special offers</h1>
        <div className="items">
            <SpecialOffer specialOffer={specialOffer}/>
            <SpecialOffer specialOffer={specialOffer}/>
            <SpecialOffer specialOffer={specialOffer}/>
        </div>
    </div>
</div>
  )
}

export default SpecialOfferSection