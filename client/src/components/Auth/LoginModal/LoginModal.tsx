import { useRef } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginInputs } from "../../../types/model";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchUserByID, loginWithPassword } from "../../../utils/auth";
import { useAuthStore } from "../../../store/authStore";

interface Props {
	setShowAuthModal: (value: boolean) => void;
	setShowLogin: (value: boolean) => void;
	triggerToast: (errorType: string, text: string) => void;
}

const LoginModal = ({ setShowAuthModal, setShowLogin, triggerToast }: Props) => {
	const ref = useRef<HTMLDivElement>(null);

	const {login} = useAuthStore();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginInputs>();

	const passwordLoginMutation = useMutation({
		mutationFn: (data: LoginInputs) => {
			return loginWithPassword(data.emailAddress, data.password);
		},
		onError: (error) => {
			console.error("Error signing in", error);
			triggerToast("error", "Invalid credentials!");
		},
	});

	useClickOutside(ref, () => {
		setShowAuthModal(false);
	});

	const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
		const userID = await passwordLoginMutation.mutateAsync(data);
		const user = await fetchUserByID(userID);
		if (user) {
			login(user);
			console.log("User signed in successfully:", user);
			triggerToast("success", "Successfully logged in!");
			setShowAuthModal(false);
		}
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
				<small>
					email: <span>test@test.com</span> | pass: <span>test</span>
				</small>
				<input type="submit" className="button" value="Sign in" />
			</form>
			<p className="no-account-message" onClick={() => setShowLogin(false)}>
				Don't have an account yet? <span>Sign Up</span>
			</p>
		</div>
	);
};

export default LoginModal;
