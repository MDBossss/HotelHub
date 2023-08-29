interface Props {
	color?: string;
	fontSize?: string;
	text?: string;
}

const Separator = ({ color, fontSize, text }: Props) => {
	return (
		<div className="separator">
			{text && <p style={{ color: color, fontSize: fontSize }}>{text}</p>}
			<div className="line" style={{ backgroundColor: color }}></div>
		</div>
	);
};

export default Separator;
