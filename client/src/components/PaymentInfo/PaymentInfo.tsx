import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { OfferModel } from "../../types/model";

interface Inputs {
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

interface Props {
  offer: OfferModel | undefined;
}

const PaymentInfo = ({ offer }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const handlePayment = () => {
    
  }

  return (
    <div className="payment-info">
      <h1>Payment</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label>Cardholder Name</label>
          <input
            type="text"
            placeholder="Your name"
            {...register("cardholderName", {
              required: "Cardholder name is required",
            })}
            maxLength={50}
          />
          {errors.cardholderName && (
            <p className="error">{errors.cardholderName.message}</p>
          )}
        </div>
        <div className="row">
          <div className="field">
            <label>Card Number</label>
            <input
              type="text"
              placeholder="1111 2222 3333 4444"
              {...register("cardNumber", {
                required: "Card number is required",
              })}
              maxLength={19}
              minLength={16}
            />
            {errors.cardNumber && (
              <p className="error">{errors.cardNumber.message}</p>
            )}
          </div>
          <div className="field">
            <label>Expiry Date</label>
            <input
              type="text"
              placeholder="01/24"
              {...register("expiryDate", {
                required: "Expiry date is required",
              })}
              maxLength={5}
            />
            {errors.expiryDate && (
              <p className="error">{errors.expiryDate.message}</p>
            )}
          </div>
          <div className="field">
            <label>CVV</label>
            <input
              type="text"
              placeholder="123"
              {...register("cvv", { required: "CVV is required" })}
              minLength={3}
              maxLength={3}
            />
            {errors.cvv && <p className="error">{errors.cvv.message}</p>}
          </div>
        </div>
        <input
          type="submit"
          className="button"
          onClick={handlePayment}
          value={`$${
            offer &&
            (offer.price + offer.price * 0.075 + offer.price * 0.071).toFixed(2)
          }`}
        />
      </form>
    </div>
  );
};

export default PaymentInfo;
