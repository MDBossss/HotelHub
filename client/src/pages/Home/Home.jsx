import React from 'react'
import {HiOutlineLocationMarker} from "react-icons/hi";
import {CiSearch} from "react-icons/ci";

const Home = () => {
  return (
    <div className="home">
        <div className="cover">
            <h1>Find an apartment <br/> for your vacation</h1>
            <p>We have several thousand <br/> apartments for every taste <br/> in every corner of the globe</p>
            <div className="search">
                <div className="location">
                    <HiOutlineLocationMarker/>
                </div>
              <input type="text" placeholder='Search Destination'/>
              <button className='search-button'><CiSearch/></button>
            </div>
        </div>
    </div>
  )
}

export default Home