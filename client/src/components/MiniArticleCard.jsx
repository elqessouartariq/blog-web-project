import ArticleCardContent from './shared/ArticleCardContent';
import ArticleCardInformations from './shared/ArticleCardInformations';
import ArticleCardTitle from './shared/ArticleCardTitle';
import CategoryTitle from './shared/CategoryTitle';
import PropTypes from 'prop-types';

const MiniArticleCard = ({
	category,
	title,
	authorName,
	date,
	readTime,
	content,
	padding,
}) => {
	return (
		<div className={`w-[509px] bg-white ${padding}`}>
			<CategoryTitle title={category} />
			<ArticleCardTitle title={title} />
			<ArticleCardInformations
				authorName={authorName}
				date={date}
				readTime={readTime}
			/>
			<ArticleCardContent content={content} />
		</div>
	);
};

MiniArticleCard.propTypes = {
	category: PropTypes.string,
	title: PropTypes.string,
	authorName: PropTypes.string,
	date: PropTypes.string,
	readTime: PropTypes.number,
	content: PropTypes.string,
	padding: PropTypes.string,
};

MiniArticleCard.defaultProps = {
	category: 'FEATURED ARTICLE',
	title: 'World’s Most Dangerous Technology Ever Made.',
	authorName: 'Ralph Hawkins',
	date: 'May 7, 2019',
	readTime: 10,
	padding: 'p-0',
	content:
		'Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.',
};

export default MiniArticleCard;
