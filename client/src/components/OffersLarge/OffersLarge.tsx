import React from "react";
import { OfferModel } from "../../types/model";
import OfferLarge from "../OfferLarge/OfferLarge";

interface Props {
	offers: OfferModel[];
	selectedOfferID: string | undefined;
	setSelectedOfferID: (id: string) => void;
	offerRef: React.MutableRefObject<HTMLDivElement | null>;
	mapRef: React.MutableRefObject<google.maps.Map | undefined>;
}

const OffersLarge = ({ offers, selectedOfferID, setSelectedOfferID, offerRef, mapRef }: Props) => {
	return (
		<div className="offers-large">
			{offers.map((offer) => (
				<OfferLarge
					key={offer.id}
					offer={offer}
					offerRef={offer.id === selectedOfferID ? offerRef : null}
					mapRef={mapRef}
					setSelectedOfferID={setSelectedOfferID}
				/>
			))}
		</div>
	);
};

export default OffersLarge;
