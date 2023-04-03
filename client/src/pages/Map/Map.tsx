import React from 'react'
import Offers from '../../components/Offers/Offers'
import { NavLink } from 'react-router-dom'

const Map = () => {

  return (
    <div className="map-wrapper">
        <div className="left">
            <div className="filters">
                //filters which will be sent to Offers component
            </div>
            <div className="offers">
                <Offers/>
            </div>
        </div>
        <div className="right">
            //map component
            <NavLink to="/deals"><button>Show by list</button></NavLink>
        </div>
    </div>
  )
}

export default Map