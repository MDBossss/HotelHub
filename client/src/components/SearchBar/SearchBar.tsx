import React, {useRef, useState, useEffect} from 'react'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineLocationMarker} from 'react-icons/hi';
import {IoIosCalendar} from "react-icons/io";
import {DateRange,Range} from "react-date-range";

const SearchBar = () => {

    const [showDateRange,setShowDateRange] = useState<boolean>(true);
    const datePickerRef = useRef<HTMLDivElement>(null);

    const [dateRange,setDateRange] = useState<Range[]>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key:"selection",
        }
    ]);

    useEffect(() => {
        const handleClickOutside = (event:MouseEvent) => {
            if(datePickerRef.current && !datePickerRef.current.contains(event.target as Node)){
                setShowDateRange(false);
            }
        }

        document.addEventListener("click",handleClickOutside);

        return () => {
            document.removeEventListener("click",handleClickOutside);
        }
    },[])

    const handleToggleDateRange = (event: React.MouseEvent<HTMLParagraphElement>) => {
        event.stopPropagation();
        setShowDateRange(!showDateRange);
    }

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
                <p className='date' onClick={handleToggleDateRange}>{dateRange[0].startDate?.toLocaleDateString("hr-HR", {day: "2-digit",month: "2-digit"})} - {dateRange[0].endDate?.toLocaleDateString("hr-HR",{day:"2-digit", month: "2-digit"})}</p>
                {showDateRange &&
                <div ref={datePickerRef}>
                    <DateRange 
                    editableDateInputs={true}
                    onChange={(item) => setDateRange([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dateRange}
                    rangeColors={["#EE685F"]}
                    className='date-range'
                    disabledDates={[]} //dates to be fetched from api and updated when someone makes a reservation
                    />
                </div>} 
            </div>
        </div>
        <button className='search-button' ><FiSearch/></button>
    </div>
  )
}

export default SearchBar