import React from 'react'
import {useForm,SubmitHandler} from "react-hook-form";

interface Inputs{
    fullName: string,
    email: string,
    phoneNumber: string,
    additionalInfo: string
}

interface Props{
    onNext: (number:number) => void
}

const PersonalInfo = ({onNext}:Props) => {

    //TODO: if user registered, fetch data and fill in the inputs from global login store

    const {register,handleSubmit,watch,formState: {errors}} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data)
        onNext(3)
    }

  return (
    <div className="personal-info">
        <h1>Your Personal Information</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
                <label>Guest Full Name</label>
                <input  {...register("fullName", {required: true})}/>
            </div>
            <div className="row">
                <div className="field">
                    <label>Email</label>
                    <input  {...register("email", {required: true})}/>
                </div>
                <div className="field">
                    <label>Phone Number</label>
                    <input  {...register("phoneNumber", {required: true})}/>
                </div>
            </div>
            <div className="field">
                    <label>Additional Information <span>(optional)</span></label>
                    <input  {...register("additionalInfo", {required: false})}/>
            </div>
            <input type="submit" className='button' value="Next Step"/>
            
        </form>
    </div>
  )
}

export default PersonalInfo