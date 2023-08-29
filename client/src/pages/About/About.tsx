import { useJsApiLoader, GoogleMap, OverlayView } from "@react-google-maps/api";
import { NavLink } from "react-router-dom";

const options = {
	zoomControl: false,
	streetViewControl: false,
	mapTypeControl: false,
	fullscreenControl: false,
};

const About = () => {
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
	});

	if (!isLoaded) {
		return <></>;
	}

	return (
		<>
			<div className="about-wrapper">
				<div className="about-google-map">
					<GoogleMap
						center={{ lat: 25.994059, lng: -80.259298 }}
						zoom={15}
						mapContainerStyle={{ width: "100%", height: "100%" }}
						options={options}
					>
						<OverlayView
							position={{ lat: 25.994059, lng: -80.259298 }}
							mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
						>
							<div className="hq-location">
								<div className="logo">
									<img src="/favicon.png" alt="logo" />
								</div>
								<h2>HotelHub HQ</h2>
							</div>
						</OverlayView>
					</GoogleMap>
					<div className="moto container">
						<p>With over 40 years in the industry, based in Miami, we ensure you with</p>
						<h1>
							<span>Unforgettable</span> stays, <span>every</span> time.
						</h1>
					</div>
				</div>
				<div className="who-are-we container">
					<h2>WHO WE ARE</h2>
					<p>
						We are a Miami-based hotel booking website with a passion for providing our customers
						with the best possible experience when it comes to finding and booking the ideal
						accommodation for their stay in the city. Our platform brings together a vast selection
						of hotels in Miami, ranging from luxurious resorts to budget-friendly stays, all in one
						place.
					</p>
					<h3>WE'RE DIFFERENT THAN THE REST</h3>
					<p>
						Our user-friendly website makes it easy for you to find and book the perfect hotel in
						Miami, whether you’re planning a romantic getaway, a family vacation, or a business
						trip. Our intuitive search filters allow you to narrow down your options based on your
						budget, location, and desired amenities, while our expert customer support team is
						always available to assist you with any questions or concerns you may have. At HotelHub,
						we strive to exceed our customers' expectations by providing exceptional service and a
						seamless booking experience. So why wait? Book your dream hotel in Miami today with
						HotelHub and get ready to experience the magic of this vibrant city!
					</p>
					<div className="links-wrapper">
						<NavLink to="/deals">
							<button>CHECK OUR OFFERS</button>
						</NavLink>
						<NavLink to="/contact">
							<button>CONTACT US</button>
						</NavLink>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
