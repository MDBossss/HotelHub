import React, {useEffect,useState,useRef} from 'react'
import Offers from '../../components/Offers/Offers'
import { NavLink } from 'react-router-dom'
import Filter from '../../components/Filter/Filter'
import OffersLarge from '../../components/OffersLarge/OffersLarge'
import { OfferModel } from '../../types/model'
import HotelMap from '../../components/HotelMap/HotelMap'

const Map = () => {

    const [offers,setOffers] = useState<OfferModel[]>([]);
    const [selectedOfferID,setSelectedOfferID] = useState<number>(0);

    const offerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if(offerRef){
            offerRef.current?.scrollIntoView({behavior: "smooth"})
            console.log("scrolled to offer " + selectedOfferID )
        }
    },[selectedOfferID])

    useEffect(() => {
        const fetchData = async () => {
            fetch("/offers.json")
            .then(response => response.json())
            .then(data => setOffers(data))
        }
        fetchData();
    },[])

  return (
    <div className="map-wrapper">
        <div className="left-wrapper">
            <div className="filters">
                <Filter/>
            </div>
            <div className="offers">
                <OffersLarge offers={offers} selectedOfferID={selectedOfferID} setSelectedOfferID={setSelectedOfferID} offerRef={offerRef}/>
            </div>
        </div>
        <div className="right-wrapper">
            <HotelMap offers={offers} selectedOfferID={selectedOfferID} setSelectedOfferID={setSelectedOfferID}/>
            <NavLink to="/deals" className="show-list"><button>Show by list</button></NavLink>
        </div>
    </div>
  )
}

export default Map