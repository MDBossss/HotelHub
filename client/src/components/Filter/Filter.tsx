import React, { useState } from 'react'
import { HiOutlineLocationMarker} from 'react-icons/hi';
import {IoIosCalendar} from "react-icons/io";
import {BiUser, BiChevronDown} from "react-icons/bi";

const locationFilters:string[] = ["Florida","Las Vegas","Bahamas"];

const Filter = () => {

    const [locationFilter,setLocationFilter] = useState<string>("Florida");

  return (
    <div className="filter-wrapper">
        <div className="filter">
            <div className="location">
                <div className="left">
                    <HiOutlineLocationMarker/>
                    {locationFilter}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter