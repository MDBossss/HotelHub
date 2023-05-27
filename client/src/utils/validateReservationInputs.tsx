import ReservationResult from "../components/ReservationResult/ReservationResult";
import { PaymentInfoInputs, PersonalInfoInputs } from "../types/model";

export function validateReservationInputs(personalInfo:PersonalInfoInputs,paymentInfo: PaymentInfoInputs){
    let valid = true;

    // Verify Payment Information
    if (!paymentInfo.cardholderName || !paymentInfo.cardNumber || !paymentInfo.expiryDate || !paymentInfo.cvv) {
        valid = false; // Missing required payment info
    }

    // Verify Personal Information
    if (!personalInfo.fullName || !personalInfo.email || !personalInfo.phoneNumber) {
        valid = false; // Missing required personal info

    }


    if (!/^\d+$/.test(personalInfo.phoneNumber?.split(" ").join("")!)) {
        valid = false; // Phone number should only contain digits
    }

    if (!/^\d+$/.test(paymentInfo.cardNumber?.split(" ").join("")!)) {
        valid = false; // Card number should only contain digits
    }
    
    if (!/\d{2}\/\d{2}/.test(paymentInfo.expiryDate!)) {
        valid = false; // Expiry date should be in the format "MM/YY"
    }

    if (!/^\d+$/.test(paymentInfo.cvv!)) {
        valid = false; // CVV should only contain digits
    }

    if(valid){
        return <ReservationResult type="success"/>
    }
    else{
        return <ReservationResult type="fail"/>
    }

}