import CoverSection from "../../components/Home/CoverSection/CoverSection";
import WhySection from "../../components/Home/WhySection/WhySection";
import SpecialOfferSection from "../../components/Home/SpecialOfferSection/SpecialOfferSection";
import ReviewsSection from "../../components/Home/ReviewsSection/ReviewsSection";
import RecentSection from "../../components/Home/RecentSection/RecentSection";

const Home = () => {
	return (
		<div className="home">
			<CoverSection />
			<WhySection />
			<SpecialOfferSection />
			<ReviewsSection />
			<RecentSection />
		</div>
	);
};

export default Home;
