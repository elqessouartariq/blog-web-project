import PropTypes from 'prop-types';

const ArticleCardInformations = ({ authorName, date, readTime }) => {
	return (
		<p className="font-primary text-sm text-primaryGray font-normal my-3">
			{authorName}
			<span className="inline-block mx-3">
				<img src="/src/assets/Ellipse.svg" />
			</span>
			{date} ({readTime} mins read)
		</p>
	);
};

ArticleCardInformations.propTypes = {
	authorName: PropTypes.string,
	date: PropTypes.string,
	readTime: PropTypes.number,
};

ArticleCardInformations.defaultProps = {
	authorName: 'Ralph Hawkins',
	date: 'May 7, 2019',
	readTime: 10,
};

export default ArticleCardInformations;
