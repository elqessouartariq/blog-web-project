import PropTypes from 'prop-types';

const ArticleCardTitle = ({ title }) => {
	return (
		<h3 className="font-heading text-3xl text-primaryBlack font-bold">
			{title}
		</h3>
	);
};

ArticleCardTitle.propTypes = {
	title: PropTypes.string,
};

ArticleCardTitle.defaultProps = {
	title: 'World’s Most Dangerous Technology Ever Made.',
};

export default ArticleCardTitle;
