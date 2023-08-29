import { OfferModel } from "../../types/model";
import { BsPerson } from "react-icons/bs";
import { IoMdResize } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";

interface Props {
  onNext: (number: number) => void;
  offer: OfferModel | undefined;
}

const ReservationInfo = ({ onNext, offer }: Props) => {
  return (
    <div className="reservation-info">
      <h1>Reservation Info</h1>
      <div className="offer-info">
        <div className="left">
          <img src={offer?.images[0]} alt="" />
        </div>
        <div className="right">
          <h2>{offer?.name}</h2>
          <div className="general">
            <div className="item">
              <IoBedOutline className="icon" />
              <p>{offer?.beds} Beds</p>
            </div>
            <div className="item">
              <BsPerson className="icon" />
              <p>{offer?.people} People</p>
            </div>
            <div className="item">
              <IoMdResize className="icon" />
              <p>
                {offer?.size} m<sup>2</sup>
              </p>
            </div>
          </div>
          <div className="pricing">
            <div className="left">
              <p>Arrival Date</p>
              <p>Departure Date</p>
              <p>Total Nights</p>
              <p>Rate</p>
              <p>Discount</p>
              <p>Community Fee</p>
              <p>Tax</p>
              <p>Total</p>
            </div>
            <div className="right">
              <p>
                {offer?.dateStart &&
                  new Date(offer?.dateStart).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
              </p>
              <p>
                {offer?.dateEnd &&
                  new Date(offer?.dateEnd).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
              </p>
              <p>{offer?.duration}</p>
              <p className="money">${offer?.price}</p>
              <input type="text" placeholder="Apply Coupon Code" />
              <p className="money">
                ${offer?.price && (offer?.price * 0.075).toFixed(2)}
              </p>
              <p className="money">
                ${offer?.price && (offer.price * 0.071).toFixed(2)}
              </p>
              <p className="money-total">
                $
                {offer?.price &&
                  (
                    offer.price +
                    offer.price * 0.075 +
                    offer.price * 0.071
                  ).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => onNext(2)}>Next Step</button>
    </div>
  );
};

export default ReservationInfo;
