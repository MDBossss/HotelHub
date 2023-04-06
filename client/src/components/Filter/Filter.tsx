import React, { useState } from 'react'
import { HiOutlineLocationMarker} from 'react-icons/hi';
import {IoIosCalendar} from "react-icons/io";
import {BiUser, BiChevronDown} from "react-icons/bi";
import {DateRange,Range} from "react-date-range";
import DropdownList from '../DropdownList/DropdownList';

const locationFilters:string[] = ["Florida","Las Vegas","Bahamas"];
const sleepsFilters:string[] = ["1","2","3","4","5","6"];

const Filter = () => {

    const [locationFilter,setLocationFilter] = useState<string>("Florida");
    const [sleepsFilter,setSleepsFilter] = useState<string>("4");

    const [dateRange,setDateRange] = useState<Range[]>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key:"selection",
        }
    ]);


    const [showFilters,setShowFilters] = useState({
        showLocation: false,
        showDateRange: false,
        showSleeps: false
    })

    const handleSetLocation = (location:string) => {
        setLocationFilter(location);
        setShowFilters({
            showLocation:false,
            showDateRange:false,
            showSleeps:false
        })
    }

    const handleSetSleeps = (sleeps:string) => {
        setSleepsFilter(sleeps);
        setShowFilters({
            showLocation:false,
            showDateRange:false,
            showSleeps:false
        })
    }


  return (
    <div className="filter-wrapper">
        <div className="filter">
            <div className="location">
                <div className="left">
                    <HiOutlineLocationMarker className='icon'/>
                </div>
                <div className="right" onClick={() => setShowFilters({showLocation:!showFilters.showLocation,showDateRange:false,showSleeps:false})}>
                    <p>{locationFilter}</p>
                    <BiChevronDown className='icon'/>
                </div>
            </div>
            <div className="date">
                <div className="left">
                    <IoIosCalendar className='icon'/>
                </div>
                <div className="right" onClick={() => setShowFilters({showLocation:false,showDateRange:!showFilters.showDateRange,showSleeps:false})}>
                    <p>{dateRange[0].startDate?.toLocaleDateString("hr-HR", {day: "2-digit",month: "2-digit"})} - {dateRange[0].endDate?.toLocaleDateString("hr-HR",{day:"2-digit", month: "2-digit"})}</p>
                    <BiChevronDown className='icon'/>
                </div>
            </div>
            <div className="sleeps">
                <div className="left">
                    <BiUser className='icon'/>
                </div>
                <div className="right" onClick={() => setShowFilters({showLocation:false,showDateRange:false,showSleeps:!showFilters.showSleeps})}>
                    <p>{sleepsFilter} Sleeps</p>
                    <BiChevronDown className='icon'/>
                </div>
            </div>
        </div>

        {showFilters.showDateRange && 
        <DateRange 
            editableDateInputs={true}
            onChange={(item) => setDateRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
            rangeColors={["#EE685F"]}
            className='date-range'
        />}

        {showFilters.showLocation &&
            <DropdownList 
                values={locationFilters} 
                onClicked={handleSetLocation} 
                className="location-list"
            />
        }

        {showFilters.showSleeps && 
            <DropdownList 
                values={sleepsFilters} 
                onClicked={handleSetSleeps} 
                className='sleeps-list'
            />}
    </div>
  )
}

export default Filter