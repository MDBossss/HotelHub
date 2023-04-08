import React from 'react'
import { OfferModel } from '../../types/model'

interface Props{
    offer: OfferModel,
    selectedOfferID: number,
    handleMarkerClick: (offer:OfferModel) => void
}

const MapMarker = ({offer,selectedOfferID,handleMarkerClick}:Props) => {
  return (
    <div className={`map-marker ${selectedOfferID === offer.id ? "map-marker-selected" : ""}`} onClick={() => handleMarkerClick(offer)}>
        {`$${offer.price}`}
    </div>
  )
}

export default MapMarker