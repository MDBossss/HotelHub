import React, { useState,useRef,useEffect } from 'react'
import { HiOutlineLocationMarker} from 'react-icons/hi';
import {IoIosCalendar} from "react-icons/io";
import {BiUser, BiChevronDown} from "react-icons/bi";
import {DateRange,Range} from "react-date-range";
import DropdownList from '../DropdownList/DropdownList';
import useClickOutside from '../../hooks/useClickOutside';
import getFilterByValue from '../../utils/GetFilterByValue';



const locationFilters: Filter[] = [
    {label: "Any", value: null},
    {label: "Florida", value: "Florida"},
    {label: "Las Vegas", value: "Las Vegas"},
    {label: "Bahamas", value: "Bahamas"},
]

const sleepsFilters:Filter[] = [
    { label: "Any", value: null },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
] 

interface Filter{
    label:string,
    value:string | null
}

interface Props{
    setFilters: (filters:{
        location:string | null,
        date:{startDate: Date | undefined, endDate: Date | undefined} | null,
        sleeps:string | null,
    }) => void
}


const Filter = ({setFilters}:Props) => {

    const locationRef = useRef<HTMLDivElement>(null);
    const datePickerRef = useRef<HTMLDivElement>(null);
    const sleepsRef = useRef<HTMLDivElement>(null);

    const [locationFilter,setLocationFilter] = useState<Filter>(locationFilters[0]);
    const [sleepsFilter,setSleepsFilter] = useState<Filter>(sleepsFilters[0]);

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

    useEffect(() => {
        setFilters({
            location:locationFilter.value,
            date:{startDate:dateRange[0].startDate,endDate:dateRange[0].endDate},
            sleeps:sleepsFilter.value
        })
    },[locationFilter,dateRange,sleepsFilter])

    const handleSetLocation = (location:string) => {
        setLocationFilter(getFilterByValue(locationFilters,location));
        setShowFilters({
            showLocation:false,
            showDateRange:false,
            showSleeps:false
        })
    }

    const handleSetSleeps = (sleeps:string) => {
        setSleepsFilter(getFilterByValue(sleepsFilters,sleeps));
        setShowFilters({
            showLocation:false,
            showDateRange:false,
            showSleeps:false
        })
    }

    const handleToggleLocation = (event:React.MouseEvent<HTMLParagraphElement>) =>{
        event.stopPropagation();
        setShowFilters({
            showLocation: !showFilters.showLocation,
            showDateRange:false,
            showSleeps:false
        })
    }

    useClickOutside(locationRef, () => {
        setShowFilters({
            showLocation:false,
            showDateRange:false,
            showSleeps:false,
        })
    })

    const handleToggleDatePicker = (event:React.MouseEvent<HTMLParagraphElement>) =>{
        event.stopPropagation();
        setShowFilters({
            showLocation: false,
            showDateRange:!showFilters.showDateRange,
            showSleeps:false
        })
    }

    useClickOutside(datePickerRef, () => {
        setShowFilters({
            showLocation:false,
            showDateRange:false,
            showSleeps:false,
        })
    })

    const handleToggleSleeps = (event:React.MouseEvent<HTMLParagraphElement>) =>{
        event.stopPropagation();
        setShowFilters({
            showLocation: false,
            showDateRange: false,
            showSleeps:!showFilters.showSleeps
        })
    }

    useClickOutside(sleepsRef, () => {
        setShowFilters({
            showLocation:false,
            showDateRange:false,
            showSleeps:false,
        })
    })

  return (
    <div className="filter-wrapper">
        <div className="filter">
            <div className="location">
                <div className="left">
                    <HiOutlineLocationMarker className='icon'/>
                </div>
                <div className="right" onClick={handleToggleLocation}>
                    <p>{locationFilter.label}</p>
                    <BiChevronDown className='icon'/>
                </div>
            </div>
            <div className="date">
                <div className="left">
                    <IoIosCalendar className='icon'/>
                </div>
                <div className="right" onClick={handleToggleDatePicker}>
                    <p>{dateRange[0].startDate?.toLocaleDateString("hr-HR", {day: "2-digit",month: "2-digit"})} - {dateRange[0].endDate?.toLocaleDateString("hr-HR",{day:"2-digit", month: "2-digit"})}</p>
                    <BiChevronDown className='icon'/>
                </div>
            </div>
            <div className="sleeps">
                <div className="left">
                    <BiUser className='icon'/>
                </div>
                <div className="right" onClick={handleToggleSleeps}>
                    <p>{sleepsFilter.label}</p>
                    <BiChevronDown className='icon'/>
                </div>
            </div>
        </div>

        {showFilters.showDateRange && 
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
            </div>
        }

        {showFilters.showLocation &&
            <div ref={locationRef}>
                <DropdownList 
                values={locationFilters.map((option) => option.label)} 
                onClicked={handleSetLocation} 
                className="location-list"
            />
            </div>
        }

        {showFilters.showSleeps && 
            <div ref={sleepsRef}>
                <DropdownList 
                    values={sleepsFilters.map((option) => option.label)} 
                    onClicked={handleSetSleeps} 
                    className='sleeps-list'
                />
            </div>
            }
    </div>
  )
}

export default Filter