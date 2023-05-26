import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { OfferModel, PaymentInfoInputs } from "../../types/model";



interface Props { 
  offer: OfferModel | undefined,
  onNext: (index: number) => void,
  setPaymentInfo: (info: PaymentInfoInputs) => void,
  paymentInfo: PaymentInfoInputs
}

const PaymentInfo = ({ onNext,offer,setPaymentInfo,paymentInfo }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PaymentInfoInputs>();

  const onSubmit: SubmitHandler<PaymentInfoInputs> = (data) => {
    onNext(4);
  };

  const onCardholderNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo({
        ...paymentInfo,
        cardholderName: event.target.value 
    })
  }

  const onCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo({
        ...paymentInfo,
        cardNumber: event.target.value
    })
  }

  const onExpiryDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo({
        ...paymentInfo,
        expiryDate: event.target.value 
    })
  }

  const onCvvChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo({
        ...paymentInfo,
        cvv: event.target.value 
    })
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
            value={paymentInfo?.cardholderName ?? ""}
            onChange={onCardholderNameChange}
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
              value={paymentInfo?.cardNumber ?? ""}
              onChange={onCardNumberChange}
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
              value={paymentInfo?.expiryDate ?? ""}
              onChange={onExpiryDateChange}
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
              value={paymentInfo?.cvv ?? ""}
              onChange={onCvvChange}
            />
            {errors.cvv && <p className="error">{errors.cvv.message}</p>}
          </div>
        </div>
        <input
          type="submit"
          className="button"
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
