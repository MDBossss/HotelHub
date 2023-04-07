import React, {useEffect,useState} from 'react'
import Offers from '../../components/Offers/Offers'
import { NavLink } from 'react-router-dom'
import Filter from '../../components/Filter/Filter'
import OffersLarge from '../../components/OffersLarge/OffersLarge'
import { OfferModel } from '../../types/model'
import HotelMap from '../../components/HotelMap/HotelMap'

const Map = () => {

    const [offers,setOffers] = useState<OfferModel[]>([]);

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
                <OffersLarge offers={offers}/>
            </div>
        </div>
        <div className="right-wrapper">
            <HotelMap offers={offers}/>
            <NavLink to="/deals" className="show-list"><button>Show by list</button></NavLink>
        </div>
    </div>
  )
}

export default Map