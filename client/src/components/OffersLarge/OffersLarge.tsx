import React from 'react'
import { OfferModel } from '../../types/model'
import OfferLarge from '../OfferLarge/OfferLarge'

interface Props{
    offers: OfferModel[]
}

const OffersLarge = ({offers}:Props) => {
  return (
    <div className="offers-large">
        {offers.map((offer,index) => (
            <OfferLarge key={index} offer={offer}/>
        ))}
    </div>
  )
}

export default OffersLarge