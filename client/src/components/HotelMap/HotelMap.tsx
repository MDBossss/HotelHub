import React, {useState,useRef} from 'react'
import { OfferModel } from '../../types/model'
import {useJsApiLoader,GoogleMap,OverlayView} from "@react-google-maps/api"
import MapMarker from '../MapMarker/MapMarker'

interface Props{
    offers: OfferModel[],
    selectedOfferID: number,
    setSelectedOfferID: (id:number) => void
}

const options = {
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false
}

const HotelMap = ({offers,selectedOfferID,setSelectedOfferID}:Props) => {

    const mapRef = useRef<google.maps.Map>();


    const [mapPosition,setMapPosition] = useState({
        center:{
            lat: 27.438168,
            lng: -81.165378
        }
    })

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey : import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    })

    const handleMarkerClick = (offer:OfferModel) => {
        if(mapRef.current){
            mapRef.current.panTo({lat:offer.lat,lng:offer.lng});
        }
        setSelectedOfferID(offer.id);
    }

    if(!isLoaded){
        return <></>
    }

  return (
    <div className="google-map">
        <GoogleMap
            center={mapPosition.center}
            zoom={7}
            mapContainerStyle={{width: "100%", height: "100%"}}
            options={options}
            onLoad={(map) => {mapRef.current = map}}
        >
            {offers?.map((offer) => (
                <OverlayView position={{lat: offer.lat, lng: offer.lng}} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET} key={offer.id}>
                    <MapMarker offer={offer} selectedOfferID={selectedOfferID} handleMarkerClick={handleMarkerClick}/>
                </OverlayView>
            ))}

        </GoogleMap>
    </div>
  )
}

export default HotelMap