import React, {useState} from "react";
import SearchBar from "../../SearchBar/SearchBar";


const CoverSection = () => {
    


  return (
    <div className="cover-wrapper container">
            <div className="cover ">
                <h1>Find an apartment <br/> for your vacation</h1>
                <p>We have several thousand apartments for every taste in every corner of the globe</p>
                <SearchBar/>
            </div>
        </div>
  )
}

export default CoverSection
