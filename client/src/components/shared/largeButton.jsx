import PropTypes from 'prop-types';

const LargeButton = ({ text, onClick }) => {
	return (
		<button
			className="border-2 border-secondaryBlack py-1 px-40 rounded-lg font-heading text-base font-normal"
			onClick={onClick}
		>
			{text}
		</button>
	);
};

LargeButton.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
};

export default LargeButton;
