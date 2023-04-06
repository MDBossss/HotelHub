import React from 'react'
import Offers from '../../components/Offers/Offers'
import { NavLink } from 'react-router-dom'
import Filter from '../../components/Filter/Filter'

const Map = () => {

  return (
    <div className="map-wrapper">
        <div className="left-wrapper">
            <div className="filters">
                <Filter/>
            </div>
            <div className="offers">
                <Offers/>
            </div>
        </div>
        <div className="right-wrapper">
            //map component
            <NavLink to="/deals"><button>Show by list</button></NavLink>
        </div>
    </div>
  )
}

export default Map