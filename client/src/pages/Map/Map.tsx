import React, {useEffect,useState,useRef} from 'react'
import Offers from '../../components/Offers/Offers'
import { NavLink } from 'react-router-dom'
import Filter from '../../components/Filter/Filter'
import OffersLarge from '../../components/OffersLarge/OffersLarge'
import { Filters, OfferModel } from '../../types/model'
import HotelMap from '../../components/HotelMap/HotelMap'
import {applyAllFilters,applySearchFilters} from '../../utils/OfferFiltering'

const Map = () => {

    const [offers,setOffers] = useState<OfferModel[]>([]);
    const [filters,setFilters] = useState<Filters>({location:null,date:null,sleeps:null});
    const [filteredOffers,setFilteredOffers] = useState<OfferModel[]>([]);
    const [selectedOfferID,setSelectedOfferID] = useState<number>(0);

    const offerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<google.maps.Map>();

    useEffect(() => {
        if(offerRef){
            offerRef.current?.scrollIntoView({behavior: "smooth"})
        }
    },[selectedOfferID])

    useEffect(() => {
        const fetchData = async () => {
            fetch("/offers.json")
            .then(response => response.json())
            .then(data => {
                setOffers(data)
                setFilteredOffers(data)
            })
        }
        fetchData();
    },[])

    useEffect(() => {
        const filteredResults = applyAllFilters(offers,filters);
        setFilteredOffers(filteredResults);
    },[filters,offers])


  return (
    <div className="map-wrapper">
        <div className="left-wrapper">
            <div className="filters">
                <Filter setFilters={setFilters}/>
            </div>
            <div className="offers">
                <OffersLarge offers={filteredOffers} selectedOfferID={selectedOfferID} setSelectedOfferID={setSelectedOfferID} offerRef={offerRef} mapRef={mapRef}/>
            </div>
        </div>
        <div className="right-wrapper">
            <HotelMap offers={offers} selectedOfferID={selectedOfferID} setSelectedOfferID={setSelectedOfferID} mapRef={mapRef}/>
            <NavLink to="/deals" className="show-list"><button>Show by list</button></NavLink>
        </div>
    </div>
  )
}

export default Map