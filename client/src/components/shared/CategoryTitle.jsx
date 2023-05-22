import PropTypes from 'prop-types';

const CategoryTitle = ({ title }) => {
	return (
		<h2 className="uppercase font-primary text-lg text-primaryGray font-normal">
			{title}
		</h2>
	);
};

CategoryTitle.propTypes = {
	title: PropTypes.string,
};

CategoryTitle.defaultProps = {
	title: 'Technology',
};

export default CategoryTitle;
