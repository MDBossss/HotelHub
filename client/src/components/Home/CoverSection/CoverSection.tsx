import { useNavigate } from "react-router-dom";
import { SearchFilters } from "../../../types/model";
import SearchBar from "../../SearchBar/SearchBar";

const CoverSection = () => {
  const navigate = useNavigate();
    
  const handleSearch = (searchFilters:SearchFilters) => {
    navigate("/deals", {state: searchFilters});
  }

  return (
    <div className="cover-wrapper container">
            <div className="cover ">
                <h1 className="title">Find an apartment <br/> for your vacation</h1>
                <p className="description">We have several thousand apartments for every taste in every corner of the globe</p>
                <SearchBar showCalendar={true} handleSearch={handleSearch}/>
            </div>
        </div>
  )
}

export default CoverSection
