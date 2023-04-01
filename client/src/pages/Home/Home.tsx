import Footer from '../../components/Footer/Footer';
import CoverSection from "../../components/Home/CoverSection/CoverSection";
import WhySection from "../../components/Home/WhySection/WhySection";
import SpecialOfferSection from "../../components/Home/SpecialOfferSection/SpecialOfferSection";
import ReviewsSection from "../../components/Home/ReviewsSection/ReviewsSection";
import RecentSection from "../../components/Home/RecentSection/RecentSection";
import FooterLinks from '../../components/FooterLinks/FooterLinks';

const Home = () => {

  return (
    <div className="home">
        <CoverSection/>
        <WhySection/>
        <SpecialOfferSection/>
        <ReviewsSection/>
        <RecentSection/>
        <Footer 
          section1={<FooterLinks sectionTitle='Special Offers' pageTitles={["Title 1","Title 2","Title 3"]}/>}
          section2={<FooterLinks sectionTitle='Reviews' pageTitles={["Title 1","Title 2","Title 3"]}/>}
          section3={<FooterLinks sectionTitle='Recent Posts' pageTitles={["Title 1","Title 2","Title 3"]}/>}
        />

    </div>
  )
}

export default Home

