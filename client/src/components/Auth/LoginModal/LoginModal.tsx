import React, { useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Separator from "../../ui/Separator/Separator";
import useClickOutside from "../../../hooks/useClickOutside";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginInputs } from "../../../types/model";

interface Props {
	setShowAuthModal: (value: boolean) => void;
	setShowLogin: (value: boolean) => void;
}

const LoginModal = ({ setShowAuthModal, setShowLogin }: Props) => {
	const ref = useRef<HTMLDivElement>(null);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<LoginInputs>();

	useClickOutside(ref, () => {
		setShowAuthModal(false);
	});

	const handleLogin = async (data:LoginInputs) => {
		
	}

	const onSubmit: SubmitHandler<LoginInputs> = (data) => {
		//process the valid login data
	};

	return (
		<div className="auth-modal" ref={ref}>
			<div className="welcome">
				<img src="/favicon.png" alt="logo" />
				<h3>Welcome back</h3>
				<p>Please enter your details to sign in.</p>
			</div>
			<div className="auth-options">
				<div className="item">
					<FcGoogle />
				</div>
				<div className="item">
					<FaGithub />
				</div>
			</div>
			<div className="separator-wrapper">
				<Separator text="OR" />
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
