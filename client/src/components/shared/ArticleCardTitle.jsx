import PropTypes from 'prop-types';

const ArticleCardTitle = ({ title, textSize }) => {
	return (
		<h3
			className={`font-heading ${textSize} text-primaryBlack font-bold leading-snug`}
		>
			{title}
		</h3>
	);
};

ArticleCardTitle.propTypes = {
	title: PropTypes.string,
	textSize: PropTypes.string,
};

ArticleCardTitle.defaultProps = {
	title: 'World’s Most Dangerous Technology Ever Made.',
	textSize: 'text-3xl',
};

export default ArticleCardTitle;
