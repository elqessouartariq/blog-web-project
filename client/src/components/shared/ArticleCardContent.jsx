import PropTypes from 'prop-types';

const ArticleCardContent = ({ content }) => {
	return (
		<p className="font-primary text-primaryBlack leading-6 font-normal text-base">
			{content}
		</p>
	);
};

ArticleCardContent.propTypes = {
	content: PropTypes.string,
};

ArticleCardContent.defaultProps = {
	content:
		'Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.',
};

export default ArticleCardContent;
