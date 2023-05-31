import PropTypes from 'prop-types';

const LargeArticleCard = ({ image, children }) => {
	return (
		<div className="flex flex-wrap justify-center md:flex-nowrap mx-auto md:my-4">
			<div className="h-full w-full md:h-96  md:w-2/4">
				<img
					className="object-cover h-full w-full"
					src={image}
					alt="rectangal image"
				/>
			</div>
			<div className="m-8 md:w-3/4">{children}</div>
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
