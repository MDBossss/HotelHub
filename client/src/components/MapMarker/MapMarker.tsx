import React from 'react'
import { OfferModel } from '../../types/model'

interface Props{
    offer: OfferModel,
    handleMarkerClick: (offer:OfferModel) => void
}

const MapMarker = ({offer,handleMarkerClick}:Props) => {
  return (
    <div className="map-marker" onClick={() => handleMarkerClick(offer)}>
        {`$${offer.price}`}
    </div>
  )
}

export default MapMarker