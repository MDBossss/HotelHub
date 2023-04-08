import React from 'react'
import { OfferModel } from '../../types/model'
import OfferLarge from '../OfferLarge/OfferLarge'

interface Props{
    offers: OfferModel[],
    selectedOfferID: number,
    setSelectedOfferID: (id:number) => void,
    offerRef: React.MutableRefObject<HTMLDivElement | null>
}

const OffersLarge = ({offers,selectedOfferID,setSelectedOfferID,offerRef}:Props) => {


  return (
    <div className="offers-large">
        {offers.map((offer) => (
            <OfferLarge key={offer.id} offer={offer} offerRef={offer.id === selectedOfferID ? offerRef : null}/>
        ))}
    </div>
  )
}

export default OffersLarge