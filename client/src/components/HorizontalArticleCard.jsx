import PropTypes from 'prop-types';
import CategoryTitle from './shared/CategoryTitle';
import ArticleCardTitle from './shared/ArticleCardTitle';
import ArticleCardInformations from './shared/ArticleCardInformations';
import ArticleCardContent from './shared/ArticleCardContent';

const HorizontalArticleCard = ({
	img,
	title,
	category,
	authorName,
	date,
	readTime,
	content,
}) => {
	return (
		<div className="flex flex-wrap lg:flex-nowrap mt-10 mx-6 lg:mx-auto">
			<div className="w-full lg:w-1/3 ">
				<img src={img} className="w-full h-full object-cover" />
			</div>
			<div className="lg:ml-10 lg:w-1/2 mt-4 lg:mt-0">
				<CategoryTitle title={category} />
				<ArticleCardTitle title={title} />
				<ArticleCardInformations
					authorName={authorName}
					date={date}
					readTime={readTime}
				/>
				<ArticleCardContent content={content} />
			</div>
		</div>
	);
};

HorizontalArticleCard.defaultProps = {
	img: '/src/assets/rectangleHorizontal.svg',
	title: 'Tempor deserunt Sunt Qui',
	category: 'NATURE',
	authorName: 'Connie Robertson',
	date: 'November 3, 2012',
	readTime: 12,
	content:
		'Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla tempor aute reprehenderit ut dolore mollit nisi consequat excepteur ex officia pariatur irure.',
};

HorizontalArticleCard.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	category: PropTypes.string,
	authorName: PropTypes.string,
	date: PropTypes.string,
	readTime: PropTypes.number,
	content: PropTypes.string,
};

export default HorizontalArticleCard;
