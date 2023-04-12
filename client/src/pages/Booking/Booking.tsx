import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { getOfferByID } from '../../utils/FetchJsonFile';
import { OfferModel } from '../../types/model';
import Stepper from '../../components/Stepper/Stepper';
import Footer from '../../components/Footer/Footer';
import ReservationInfo from '../../components/ReservationInfo/ReservationInfo';
import PersonalInfo from '../../components/PersonalInfo/PersonalInfo';
import PaymentInfo from '../../components/PaymentInfo/PaymentInfo';


const Booking = () => {

    const {id} = useParams();
    const [offer,setOffer] = useState<OfferModel>();
    const [currentStep,setCurrentStep] = useState<number>(1);

    useEffect(() => {
        if(id !== undefined){
            getOfferByID(parseInt(id))
            .then(offer => {
                setOffer(offer)
            })
        }
        
    },[id])

    const handleStepClick = (index:number) => {
      setCurrentStep(index);
    }


    let stepToRender;

    switch(currentStep){
      case 1:
        stepToRender = <ReservationInfo onNext={handleStepClick} offer={offer}/>
        break;
      case 2:
        stepToRender = <PersonalInfo onNext={handleStepClick}/>
        break;
      case 3:
        stepToRender = <PaymentInfo offer={offer}/>
    }

  return (
    <>
      <div className="booking-wrapper container">
        <div className="booking">
          <h1 className='title'>Booking Details</h1>
          <div className="stepper-wrapper">
            <Stepper steps={[{},{},{}]} currentStep={currentStep} onStepClick={handleStepClick}/>
          </div>
          <div className="form-wrapper">
            {stepToRender}
          </div>
        </div>
        
      </div>
      <Footer 
      section1={<h3>Don't forget to use our free promo code <br/> at the checkout! </h3>}
      section2={<></>}
      section3={<></>}
      />  
    </>


  )
}

export default Booking