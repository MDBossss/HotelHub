import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { OfferModel, PaymentInfoInputs, PersonalInfoInputs } from "../../types/model";
import Stepper from "../../components/Stepper/Stepper";
import Footer from "../../components/Footer/Footer";
import ReservationInfo from "../../components/ReservationInfo/ReservationInfo";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";
import PaymentInfo from "../../components/PaymentInfo/PaymentInfo";
import ReservationResult from "../../components/ReservationResult/ReservationResult";
import { validateReservationInputs } from "../../utils/validateReservationInputs";
import { useQuery } from "@tanstack/react-query";
import { fetchOfferByID } from "../../utils/fetchOffers";

const Booking = () => {
  const { id } = useParams();
  const [offer, setOffer] = useState<OfferModel>();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [personalInfo,setPersonalInfo] = useState<PersonalInfoInputs>({fullName: null ,email:null, phoneNumber:null ,additionalInfo:null});
  const [paymentInfo,setPaymentInfo] = useState<PaymentInfoInputs>({cardholderName: null, cardNumber:null, expiryDate:null ,cvv:null});


  useQuery({
    queryKey: ["offers"],
    queryFn: () => fetchOfferByID(parseInt(id!)),
    onSuccess: setOffer
  })

  const handleStepClick = (index: number) => {
    switch(index){

      case 3:
        //check if reservation info is full
        if(personalInfo.email && personalInfo.fullName && personalInfo.phoneNumber){
          setCurrentStep(index);
        }
        break;
      case 4:
        //check if payment info is full
        if(paymentInfo.cardNumber && paymentInfo.cardholderName && paymentInfo.cvv && paymentInfo.expiryDate){
          setCurrentStep(index);
        }
      default:
        setCurrentStep(index);
        break;
    }
  };


  let stepToRender;

  switch (currentStep) {
    case 1:
      stepToRender = <ReservationInfo onNext={handleStepClick} offer={offer} />;
      break;
    case 2:
      stepToRender = <PersonalInfo onNext={handleStepClick} setPersonalInfo={setPersonalInfo} personalInfo={personalInfo}/>;
      break;
    case 3:
      stepToRender = <PaymentInfo onNext={handleStepClick} offer={offer} setPaymentInfo={setPaymentInfo} paymentInfo={paymentInfo}/>;
      break;
    case 4:
      stepToRender = validateReservationInputs(personalInfo,paymentInfo);
      break;
  }

  return (
    <>
      <div className="booking-wrapper container">
        <div className="booking">
          <h1 className="title">Booking Details</h1>
          {currentStep !== 4 && 
            <div className="stepper-wrapper">
            <Stepper
              steps={[{}, {}, {}]}
              currentStep={currentStep}
              onStepClick={handleStepClick}
            />
          </div>
          }
          
          <div className="form-wrapper">{stepToRender}</div>
        </div>
      </div>
      <Footer
        section1={
          <h3>
            Don't forget to use our free promo code <br /> at the checkout!{" "}
          </h3>
        }
        section2={<></>}
        section3={<></>}
      />
    </>
  );
};

export default Booking;
