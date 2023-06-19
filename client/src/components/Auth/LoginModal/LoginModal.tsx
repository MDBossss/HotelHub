import React, { useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Separator from "../../ui/Separator/Separator";
import useClickOutside from "../../../hooks/useClickOutside";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginInputs } from "../../../types/model";
import { useMutation } from "@tanstack/react-query";
import { loginWithPassword } from "../../../utils/auth";

interface Props {
	setShowAuthModal: (value: boolean) => void;
	setShowLogin: (value: boolean) => void;
	triggerToast: (errorType:string,text:string) => void

}

const LoginModal = ({ setShowAuthModal, setShowLogin, triggerToast }: Props) => {
	const ref = useRef<HTMLDivElement>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginInputs>();

	const passwordLoginMutation = useMutation({
		mutationFn: (data:LoginInputs) => {
			return loginWithPassword(data.emailAddress,data.password);
		},
		onError: (error) => {
			console.error("Error signing in", error);
			triggerToast("error","Invalid credentials!")
		}
	})


	useClickOutside(ref, () => {
		setShowAuthModal(false);
	});


	const onSubmit: SubmitHandler<LoginInputs> =  async (data) => {
		const user = await passwordLoginMutation.mutateAsync(data);
		console.log('User signed in successfully:', user);
		triggerToast("success","Successfully logged in!");
		setShowAuthModal(false);
	};

	return (
		<div className="auth-modal" ref={ref}>
			<div className="welcome">
				<img src="/favicon.png" alt="logo" />
				<h3>Welcome back</h3>
				<p>Please enter your details to sign in.</p>
			</div>


			<form onSubmit={handleSubmit(onSubmit)}>
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
						{...register("password", { required: "Password is required" })}
						maxLength={100}
					/>
					{errors.password && <p className="error">{errors.password.message}</p>}
				</div>
				<div className="field checkbox">
					<input type="checkbox" {...register("rememberMe")} value="rememberMe" />
					<label>Remember me</label>
				</div>
				<input type="submit" className="button" value="Sign in" />
			</form>
			<p className="no-account-message">
				Don't have an account yet? <span>Sign Up</span>
			</p>
		</div>
	);
};

export default LoginModal;
