import PropTypes from 'prop-types';

const ArticlePagination = ({ prevArticle, nextArticle }) => {
	return (
		<div className="flex justify-between max-h">
			<div className="flex items-center">
				<img
					src="/src/assets/icons/BackButton.svg"
					alt=""
					className="h-20 "
				/>
				<h1 className="ml-10 font-heading font-bold">
					<span className="text-lg font-normal">Go back:</span>{' '}
					{prevArticle.title}
				</h1>
			</div>
			<div className="flex items-center">
				<h1 className="mr-10 font-heading font-bold">
					<span className="text-lg font-normal">Next up:</span>{' '}
					{nextArticle.title}
				</h1>
				<img
					src="/src/assets/icons/NextButton.svg"
					alt=""
					className="h-20"
				/>
			</div>
		</div>
	);
};

ArticlePagination.defaultProps = {
	prevArticle: {
		title: 'Boom boom pow is et Letstrade.',
	},
	nextArticle: {
		title: 'Lorem ipsum so Ceat Riak',
	},
};

ArticlePagination.propTypes = {
	prevArticle: PropTypes.shape({
		title: PropTypes.string,
	}),
	nextArticle: PropTypes.shape({
		title: PropTypes.string,
	}),
};

export default ArticlePagination;
