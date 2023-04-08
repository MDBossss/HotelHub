import React, {useState} from 'react'
import { OfferModel } from '../../types/model'
import {useJsApiLoader,GoogleMap,OverlayView} from "@react-google-maps/api"
import MapMarker from '../MapMarker/MapMarker'

interface Props{
    offers: OfferModel[]
}

const options = {
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false
}

const HotelMap = ({offers}:Props) => {

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
        // setMapPosition({
        //     center: {
        //         lat: offer.lat,
        //         lng: offer.lng
        //     }
        // })
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
        >
            {offers?.map((offer) => (
                <OverlayView position={{lat: offer.lat, lng: offer.lng}} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET} key={offer.id}>
                    <MapMarker offer={offer} handleMarkerClick={handleMarkerClick}/>
                </OverlayView>
            ))}
            {/* <OverlayView
                position={defaultMapProps.center}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
                <div>Hello</div>
            </OverlayView> */}
        </GoogleMap>
    </div>
  )
}

export default HotelMap