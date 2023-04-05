import React, {useState} from 'react'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineLocationMarker} from 'react-icons/hi';
import {IoIosCalendar} from "react-icons/io";
import DatePicker from "react-datepicker";

const SearchBar = () => {

    const [startDate,setStartDate] = useState<Date | null>(new Date());


  return (
    <div className="search">
        <div className="inputs">
            <div className="destination-wrapper">
                <div className="location">
                    <HiOutlineLocationMarker/>
                </div>
                    <input type="text" placeholder='Search Destination'/>
            </div>
            <div className="dp-wrapper">
                <div className="calendar">
                    <IoIosCalendar/>
                </div>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
            </div>
        </div>
        <button className='search-button' ><FiSearch/></button>
    </div>
  )
}

export default SearchBar