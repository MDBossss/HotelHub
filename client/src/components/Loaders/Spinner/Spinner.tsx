interface Props{
	className?: string
}

const Spinner = ({className}:Props) => {
	return (
		<div className={className}>
			<div
				className="spinner"
				role="status"
				aria-label="loading"
			>
			</div>
		</div>
	);
};

export default Spinner;
