import React from 'react'
import { OfferModel } from '../../types/model'
import OfferLarge from '../OfferLarge/OfferLarge'

interface Props{
    offers: OfferModel[],
    selectedOfferID: number,
    setSelectedOfferID: (id:number) => void
}

const OffersLarge = ({offers,selectedOfferID,setSelectedOfferID}:Props) => {
  return (
    <div className="offers-large">
        {offers.map((offer) => (
            <OfferLarge key={offer.id} offer={offer}/>
        ))}
    </div>
  )
}

export default OffersLarge