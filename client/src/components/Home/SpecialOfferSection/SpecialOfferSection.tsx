import {useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Offer from "../../Offer/Offer";
import { fetchOffers } from "../../../utils/fetchOffers";
import { OfferModel } from "../../../types/model";
import Spinner from "../../Loaders/Spinner/Spinner";

const SpecialOfferSection = () => {
  const [offers,setOffers] = useState<OfferModel[]>([])

  useQuery({
    queryKey: ["offers"],
    queryFn: fetchOffers,
    onSuccess: setOffers,
    refetchOnWindowFocus: false
  })


  return (
    <div className="special-offer-wrapper container" id="Special Offers">
      <div className="special-offer">
        <h1>Special offers</h1>
        <div className="items">
          {offers.length >= 3 ? (
            <>
            <Offer offer={offers[0]}/>
            <Offer offer={offers[1]}/>
            <Offer offer={offers[2]}/>
            </>
          ) : (
            <Spinner/>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferSection;
