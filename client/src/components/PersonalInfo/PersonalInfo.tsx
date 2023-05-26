import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PersonalInfoInputs } from "../../types/model";

interface Props {
  onNext: (number: number) => void;
  setPersonalInfo: (info: PersonalInfoInputs) => void,
  personalInfo: PersonalInfoInputs
}

const PersonalInfo = ({ onNext, setPersonalInfo, personalInfo }: Props) => {
  //TODO: if user registered, fetch data and fill in the inputs from global login store

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PersonalInfoInputs>();

  const onSubmit: SubmitHandler<PersonalInfoInputs> = (data) => {
    onNext(3);
  };

  const onFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPersonalInfo({
        ...personalInfo,
        fullName: event.target.value 
      });
  }

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPersonalInfo({
        ...personalInfo,
        email: event.target.value 
      })
  }

  const onPhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPersonalInfo({
        ...personalInfo,
        phoneNumber: event.target.value
      })
  }

  const onAdditionalInfoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setPersonalInfo({
        ...personalInfo,
        additionalInfo: event.target.value 
      })
  }

  return (
    <div className="personal-info">
      <h1>Your Personal Information</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label>Guest Full Name</label>
          <input
            type="text"
            placeholder="Your Name"
            {...register("fullName", { required: "Full name is required" })}
            maxLength={50}
            value={personalInfo?.fullName ?? ""}
            onChange={onFullNameChange}
          />
          {errors.fullName && (
            <p className="error">{errors.fullName.message}</p>
          )}
        </div>
        <div className="row">
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              placeholder="example@hotel.hub"
              {...register("email", { required: "Email is required" })}
              maxLength={50}
              value={personalInfo?.email ?? ""}
              onChange={onEmailChange}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="123 345 567"
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
              maxLength={20}
              value={personalInfo?.phoneNumber ?? ""}
              onChange={onPhoneNumberChange!}
            />
            {errors.phoneNumber && (
              <p className="error">{errors.phoneNumber.message}</p>
            )}
          </div>
        </div>
        <div className="field">
          <label>
            Additional Information <span>(optional)</span>
          </label>
          <textarea
            {...register("additionalInfo", { required: false })}
            maxLength={200}
            rows={3}
            value={personalInfo?.additionalInfo ?? ""}
            onChange={onAdditionalInfoChange}
          />
        </div>
        <input type="submit" className="button" value="Next Step" />
      </form>
    </div>
  );
};

export default PersonalInfo;
