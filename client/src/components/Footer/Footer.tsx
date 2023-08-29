import { BsSend, BsFillTelephoneFill, BsYoutube, BsFillSendFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { useLocation } from "react-router-dom";

interface Props {
	section1: JSX.Element;
	section2: JSX.Element;
	section3: JSX.Element;
}

const blacklistedPaths: string[] = ["/map"]


const Footer = ({ section1, section2, section3 }: Props) => {

    const location = useLocation();


    if(blacklistedPaths.some(path => path === location.pathname)){
        return <></>
    }

	return (
		<div className="footer">
			<div className="top">
				{section1}
				{section2}
				{section3}
				<div className="newsletter">
					<h4>Subscribe to Newsletter</h4>
					<p>Your email</p>
					<div className="input-wrapper">
						<input type="text" />
						<button>
							<BsSend className="icon" />
						</button>
					</div>
				</div>
			</div>
			<div className="bottom">
				<div className="logo">
					<h1>
						Hotel<span>.hub</span>
					</h1>
				</div>
				<div className="madeby">
					<p>
						Made by{" "}
						<a href="https://github.com/MDBossss" target="_blank">
							MDBoss
						</a>
					</p>
				</div>
				<div className="socials">
					<div className="icon">
						<BsFillTelephoneFill />
					</div>
					<div className="icon">
						<FaFacebookF />
					</div>
					<div className="icon">
						<BsYoutube />
					</div>
					<div className="icon">
						<AiFillInstagram />
					</div>
					<div className="icon">
						<BsFillSendFill />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
