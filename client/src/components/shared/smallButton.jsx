import PropTypes from 'prop-types';

const SmallButton = ({ text, onClick }) => {
	return (
		<button
			className="border-2 border-secondaryBlack py-1 px-7 rounded-lg font-heading text-base font-normal"
			onClick={onClick}
		>
			{text}
		</button>
	);
};

SmallButton.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
};

export default SmallButton;
