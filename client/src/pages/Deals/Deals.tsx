import React, { useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import {BiChevronDown} from "react-icons/bi";
import {BsSliders} from "react-icons/bs";
import Offers from '../../components/Offers/Offers';
import Footer from '../../components/Footer/Footer';
import { NavLink } from 'react-router-dom';
import DropdownList from '../../components/DropdownList/DropdownList';
import { Filters } from '../../types/model';

const sortOptions:string[] = ["Relevance","Newest","Rating","Discount","Low to High","High to Low"];

const Deals = () => {

  const [sortOption,setSortOption] = useState<string>(sortOptions[0]);
  const [showList,setShowList] = useState<boolean>(false);
  const [filters,setFilters] = useState<Filters>({location:null,date:null,sleeps:null});

  const handleSort = (sortOption:string) => {
    setSortOption(sortOption);
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
          <NavLink to="/map"><button>Show on map</button></NavLink>
          <div className="right">
            <div className="filter">
              <BsSliders className='icon'/>
              <p>Filter</p>
            </div>
            <div className="sort">
              <p>Sort by</p>
              <div className="sort-filter" onClick={() => setShowList(!showList)}>
                <p>{sortOption}</p>
                <BiChevronDown/>
              </div>
                {showList && <DropdownList values={sortOptions} onClicked={handleSort} className='list'/>}
            </div>
          </div>
        </div>
        <Offers filters={filters}/>
    </div>
    <Footer 
      section1={<h3>Don't forget to use our free promo code <br/> at the checkout! </h3>}
      section2={<></>}
      section3={<></>}
    />
    </>
  )
}

export default Deals