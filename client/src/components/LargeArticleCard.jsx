import PropTypes from 'prop-types';

const LargeArticleCard = ({ image, children }) => {
	return (
		<div className="flex">
			<div>
				<img
					className="w-72 h-72 object-cover"
					src={image}
					alt="rectangal image"
				/>
			</div>
			{children}
		</div>
	);
};

LargeArticleCard.defaultProps = {
	image: '/src/assets/rectangleImage.svg',
};

LargeArticleCard.propTypes = {
	children: PropTypes.node.isRequired,
	image: PropTypes.string,
};

export default LargeArticleCard;
