import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
	firstName: string;
	lastName: string;
	email: string;
	note: string;
}

const Contact = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
	};

	return (
		<>
			<div className="contact-wrapper container">
				<h1>Contact Us</h1>
				<div className="information">
					<div className="left">
						<h2>Questions?</h2>
						<p>
							HotelHub: Your go-to platform for booking hotels. From luxurious resorts to
							budget-friendly stays. Experience a seamless booking process and exceptional service
							with HotelHub.
						</p>

						<h3>Office Location</h3>
						<ul>
							<li>HotelHub Miami</li>
							<li>425 NW 22nd St, </li>
							<li>Miami, FL 33127, </li>
							<li>United States</li>
						</ul>

						<h3>Contact Information</h3>
						<ul>
							<li>Phone Number: +1 (555) 555-5555</li>
							<li>Support Email: support@hotelhub.com</li>
							<li>Sales Email: sales@hotelhub.com</li>
							<li>General Email: info@hotelhub.com</li>
						</ul>
					</div>
					<div className="right">
						<form onSubmit={handleSubmit(onSubmit)}>
							<input
								type="text"
								{...register("firstName", { required: true })}
								maxLength={25}
								placeholder="First Name"
							/>
							<input
								type="text"
								{...register("lastName", { required: true })}
								maxLength={25}
								placeholder="Last Name"
							/>
							<input
								type="email"
								{...register("email", { required: true })}
								maxLength={100}
								placeholder="Email"
							/>
							<textarea
								{...register("note", { required: true })}
								maxLength={300}
								rows={5}
								placeholder="Note"
							/>
							<input type="submit" className="send-button" value="SEND" />
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
