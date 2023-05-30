import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Offer from "../../Offer/Offer";
import GenericLoader from "../../Loaders/GenericLoader/GenericLoader";
import { fetchOffers } from "../../../utils/fetchOffers";
import { OfferModel } from "../../../types/model";

const SpecialOfferSection = () => {
  const [offers,setOffers] = useState<OfferModel[]>([])

  useQuery({
    queryKey: ["offers"],
    queryFn: fetchOffers,
    onSuccess: setOffers,
  })


  return (
    <div className="special-offer-wrapper container" id="Special Offers">
      <div className="special-offer">
        <h1>Special offers</h1>
        <div className="items">
          {offers.length ? (
            <>
            <Offer offer={offers[0]}/>
            <Offer offer={offers[1]}/>
            <Offer offer={offers[2]}/>
            </>
          ) : (
            <GenericLoader/>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferSection;
