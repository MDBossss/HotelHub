import React, { useRef } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterInputs, User } from "../../../types/model";
import { useMutation } from "@tanstack/react-query";
import { addUser, loginWithPassword, signUpWithPassword } from "../../../utils/auth";

interface Props {
	setShowAuthModal: (value: boolean) => void;
	setShowLogin: (value: boolean) => void;
	triggerToast: (errorType: string, text: string) => void;
}

const RegisterModal = ({ setShowAuthModal, setShowLogin, triggerToast }: Props) => {
	const ref = useRef<HTMLDivElement>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterInputs>();

	const passwordSignUpMutation = useMutation({
		mutationFn: (data: RegisterInputs) => {
			return signUpWithPassword(data.emailAddress, data.password, data.fullName, data.phoneNumber);
		},
		onError: (error) => {
			console.error("Error signing up", error);
			triggerToast("error", "Something went wrong!");
		},
	});

  const addUserMutation = useMutation({
    mutationFn: (user:User) => {
      return addUser(user);
    },
    onError: (error) => {
      console.error("Error adding user", error);
    }
  })

	useClickOutside(ref, () => {
		setShowAuthModal(false);
	});

	const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
		const userID = await passwordSignUpMutation.mutateAsync(data);
    const tempUser: User = {
			id: userID,
			emailAddress: data.emailAddress,
			fullName: data.fullName,
			phoneNumber: data.phoneNumber

		}
    await addUserMutation.mutateAsync(tempUser);
		console.log("User signed up successfully:", userID);
		triggerToast("success", "Confirm your account on email before logging in");
		setShowLogin(true);
	};

	return (
		<div className="auth-modal" ref={ref}>
			<div className="welcome">
				<img src="/favicon.png" alt="logo" />
				<h3>Create your account</h3>
				<p>Please enter your details to sign up.</p>
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="field">
					<label>Full name</label>
					<input
						type="text"
						placeholder="Enter your full name..."
						{...register("fullName", { required: "Full name is required" })}
						maxLength={100}
					/>
					{errors.fullName && <p className="error">{errors.fullName.message}</p>}
				</div>
				<div className="field">
					<label>Phone number</label>
					<input
						type="text"
						placeholder="Enter your phone number..."
						{...register("phoneNumber", { required: "Phone number is required" })}
						maxLength={50}
					/>
					{errors.phoneNumber && <p className="error">{errors.phoneNumber.message}</p>}
				</div>
				<div className="field">
					<label>E-Mail Address</label>
					<input
						type="text"
						placeholder="Enter your email..."
						{...register("emailAddress", { required: "E-Mail Address is required" })}
						maxLength={50}
					/>
					{errors.emailAddress && <p className="error">{errors.emailAddress.message}</p>}
				</div>
				<div className="field">
					<label>Password</label>
					<input
						type="password"
						placeholder="Enter your password..."
						{...register("password", {
							required: "Password is required",
							minLength: { value: 6, message: "Password must be at least 6 characters long" },
						})}
						maxLength={100}
					/>
					{errors.password && <p className="error">{errors.password.message}</p>}
				</div>

				<input type="submit" className="button" value="Sign up" />
			</form>
			<p className="no-account-message" onClick={() => setShowLogin(true)}>
				Already have an account? <span>Sign In</span>
			</p>
		</div>
	);
};

export default RegisterModal;
