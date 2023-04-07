import React, {useState} from 'react'
import { OfferModel } from '../../types/model'
import {useJsApiLoader,GoogleMap,OverlayView} from "@react-google-maps/api"

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

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey : import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    })



    const [defaultMapProps,setDefaultMapProps] = useState( {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 6
    })

    if(!isLoaded){
        return <></>
    }

  return (
    <div className="google-map">
        <GoogleMap
            center={defaultMapProps.center}
            zoom={defaultMapProps.zoom}
            mapContainerStyle={{width: "100%", height: "100%"}}
            options={options}
        >
            <OverlayView
                position={defaultMapProps.center}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
                <div>Hello</div>
            </OverlayView>
        </GoogleMap>
    </div>
  )
}

export default HotelMap