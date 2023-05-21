import SearchBar from "../../SearchBar/SearchBar";

const CoverSection = () => {
    
  return (
    <div className="cover-wrapper container">
            <div className="cover ">
                <h1 className="title">Find an apartment <br/> for your vacation</h1>
                <p className="description">We have several thousand apartments for every taste in every corner of the globe</p>
                <SearchBar showCalendar={true}/>
            </div>
        </div>
  )
}

export default CoverSection
