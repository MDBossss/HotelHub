import React, { useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import {BiChevronDown} from "react-icons/bi";
import {BsSliders} from "react-icons/bs";
import Offers from '../../components/Offers/Offers';
import Footer from '../../components/Footer/Footer';

const sortFilters:string[] = ["Relevance","Newest","Rating","Discount","Low to High","High to Low"];

const Deals = () => {

  const [sortFilter,setSortFilter] = useState<string>("Relevance");
  const [showList,setShowList] = useState<boolean>(false);

  const handleSort = (sortFilter:string) => {
    setSortFilter(sortFilter);
    setShowList(false);
  }

  return (
    <>
    <div className="deals-wrapper container">
      <h1>Last Minute Deals</h1>
      <div className="bar">
        <SearchBar/>
      </div>
      <div className="filters">
          <button>Show on map</button>
          <div className="right">
            <div className="filter">
              <BsSliders className='icon'/>
              <p>Filter</p>
            </div>
            <div className="sort">
              <p>Sort by</p>
              <div className="sort-filter" onClick={() => setShowList(!showList)}>
                <p>{sortFilter}</p>
                <BiChevronDown/>
              </div>
              {showList && 
                <div className="list">
                  <p onClick={() => handleSort("Newest")}>Newest</p>
                  <p onClick={() => handleSort("Rating")}>Rating</p>
                  <p onClick={() => handleSort("Discount")}>Discount</p>
                  <p onClick={() => handleSort("Low to High")}>Low to High</p>
                  <p onClick={() => handleSort("High to Low")}>High to Low</p>
                </div>}
            </div>
          </div>
        </div>
        <Offers/>
    </div>
    <Footer 
      section1={<p>Wilderness Club at Big Ceddar</p>}
      section2={<p>Wilderness Club at Big Ceddar</p>}
      section3={<p>Wilderness Club at Big Ceddar</p>}
    />
    </>
  )
}

export default Deals