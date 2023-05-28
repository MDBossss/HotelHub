import React, { useState, useEffect } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import {BiChevronDown} from "react-icons/bi";
import {BsSliders} from "react-icons/bs";
import {RxCross1} from "react-icons/rx";
import Offers from '../../components/Offers/Offers';
import Footer from '../../components/Footer/Footer';
import { NavLink, useLocation } from 'react-router-dom';
import DropdownList from '../../components/DropdownList/DropdownList';
import { Filters, OfferModel, SearchFilters } from '../../types/model';
import Filter from '../../components/Filter/Filter';
import {applyAllFilters,applySearchFilters} from '../../utils/OfferFiltering';
import { sortByDiscount, sortByNewset, sortByPriceASC, sortByPriceDESC, sortByRating, sortByRelevance } from '../../utils/OfferSorting';
import NoDataMatching from '../../components/Loaders/NoDataMatching/NoDataMatching';

const sortOptions:string[] = ["Relevance","Newest","Rating","Discount","Low to High","High to Low"];

const Deals = () => {
  const location = useLocation();
  const navigationSearchFilters = location.state;

  const [sortOption,setSortOption] = useState<string>(sortOptions[0]);
  const [showList,setShowList] = useState<boolean>(false);

  const [filters,setFilters] = useState<Filters>({location:null,date:null,sleeps:null});
  const [showFilters,setShowFilters] = useState<boolean>(false);

  const [offers,setOffers] = useState<OfferModel[]>([]);
  const [filteredOffers,setFilteredOffers] = useState<OfferModel[]>([]);

  

  useEffect(() => {
    const fetchData = async () => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}api/offers`)
        .then(response => response.json())
        .then(data => {
            setOffers(data)
            setFilteredOffers(data)
        })
    }
    fetchData();
  },[])


  useEffect(() => {
    const filteredResults = applyAllFilters(offers,filters);
    setFilteredOffers(filteredResults);
  },[filters,offers])

  useEffect(() => {
    let sortedResults;
    switch (sortOption) {
      case "Relevance":
        sortedResults = sortByRelevance(offers);
        break;

      case "Newest":
        sortedResults = sortByNewset(filteredOffers);
        break;

      case "Rating":
        sortedResults = sortByRating(filteredOffers);
        break;

      case "Discount":
        sortedResults = sortByDiscount(filteredOffers);
        break;

      case "Low to High":
        sortedResults = sortByPriceASC(filteredOffers);
        break;

      case "High to Low":
        sortedResults = sortByPriceDESC(filteredOffers);
        break;
    
      default:
        sortedResults = filteredOffers;
        break;
    }
    setFilteredOffers(sortedResults)
  },[sortOption])

  useEffect(() => {
    if(navigationSearchFilters){
      handleSearch(navigationSearchFilters)
    }
  },[navigationSearchFilters,offers])

  const handleSort = (sortOption:string) => {
    setSortOption(sortOption);
    setShowList(false);
  }

  const handleSearch = (searchFilters:SearchFilters) => {
    const filteredResults = applySearchFilters(offers,searchFilters);
    setFilteredOffers(filteredResults);
  }

  const handleFilterClick = () => {
    if(showFilters){
      setFilters({location:null,date:null,sleeps:null})
    }
    setShowFilters(!showFilters)
  }


  return (
    <>
    <div className="deals-wrapper container">
      <h1>Last Minute Deals</h1>
      <div className="bar">
        <SearchBar showCalendar={false} handleSearch={handleSearch}/>
      </div>
      <div className="filters">
          <NavLink to="/map"><button>Show on map</button></NavLink>
          <div className="right">
            <div className="filter" onClick={handleFilterClick}>
              {showFilters ? <RxCross1 className='icon'/> : <BsSliders className='icon'/>}
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
        {showFilters && <Filter setFilters={setFilters}/>}
        {filteredOffers.length > 0 ? <Offers offers={filteredOffers}/> : <NoDataMatching/>}
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