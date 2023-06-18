import React, { useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Separator from "../../ui/Separator/Separator";
import useClickOutside from "../../../hooks/useClickOutside";

interface Props {
	setShowAuthModal: (value: boolean) => void;
	setShowLogin: (value: boolean) => void;
}

const LoginModal = ({ setShowAuthModal, setShowLogin }: Props) => {

	const ref = useRef<HTMLDivElement>(null);

	useClickOutside(ref, () => {
		setShowAuthModal(false)
	})

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
				<Separator/>
			</div>
		</div>
	);
};

export default LoginModal;
