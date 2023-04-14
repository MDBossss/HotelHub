import React from 'react'
import {useForm,SubmitHandler} from "react-hook-form";
import { OfferModel } from '../../types/model';

interface Inputs{
    cardholderName: string,
    cardNumber:string,
    expiryDate:string,
    cvv:string
}

interface Props{
    offer: OfferModel | undefined
}


const PaymentInfo = ({offer}:Props) => {

    const {register,handleSubmit,watch,formState: {errors}} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data)
    }

  return (
    <div className="payment-info">
        <h1>Payment</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
                <label>Cardholder Name</label>
                <input type='text' {...register("cardholderName", {required: true})} maxLength={50}/>
            </div>
            <div className="row">
                <div className="field">
                    <label>Card Number</label>
                    <input type='number' {...register("cardNumber", {required: true, maxLength: 16})}/>
                </div>
                <div className="field">
                    <label>Expiry Date</label>
                    <input {...register("expiryDate", {required: true})}/>
                </div>
                <div className="field">
                    <label>CVV</label>
                    <input {...register("cvv", {required: true})}/>
                </div>
            </div>
            <input type="submit" className='button' value={`$${offer && (offer.price + offer.price * 0.075 + offer.price * 0.071).toFixed(2)}`}/>
        </form>
    </div>
  )
}

export default PaymentInfo