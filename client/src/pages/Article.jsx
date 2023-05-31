import PropTypes from 'prop-types';
import AuthorCard from '../components/AuthorCard';
import ArticleCardInformations from '../components/shared/ArticleCardInformations';
import ArticleCardTitle from '../components/shared/ArticleCardTitle';
import ArticlePagination from '../components/ArticlePagination';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axiosInstance from '../utils/axiosConfig';
import { useState } from 'react';

const Article = ({ article }) => {
	const { img, title, content, author } = article;
	const { id } = useParams(); 
	const articleId = parseInt(id);
	const [articleData, setArticle] = useState({});

	useEffect(() => {
		async function getArticle() {
			const res = await axiosInstance.get(`articles/${articleId}`);
			setArticle(res.data);
		}
		getArticle();
	}, [articleId]);
	return (
		<>
			<img
				src={articleData.image}
				className="w-full h-screen object-cover"
				alt="Big Article Image"
			/>
			<div className="mt-10 flex justify-center items-center">
				<div className="w-1/2">
					<div className="text-center">
						<ArticleCardTitle
							textSize={'text-5xl'}
							title={articleData.title}
						/>
					</div>
					<div className="text-center">
						<ArticleCardInformations />
					</div>
					<div
						className="font-primary text-primaryBlack leading-6 font-normal text-base mt-10"
						dangerouslySetInnerHTML={{
							__html: articleData.content,
						}}
					/>
					<div className="mt-24 mb-12">
						<AuthorCard author={articleData.author} />
					</div>
				</div>
			</div>
			<div className="mt-20 ">
				<ArticlePagination />
			</div>
		</>
	);
};

Article.defaultProps = {
	article: {
		img: '/src/assets/BigArticleImage.svg',
		title: 'World’s Most Dangerous Technology Ever Made.',
		content:
			'Commodo labore ut nisi laborum amet eu qui magna ullamco ut labore. Aliquip consectetur labore consectetur dolor exercitation est minim quis. Magna non irure qui ex est laborum nulla excepteur qui. Anim Lorem dolore cupidatat pariatur ex tempor. Duis ea excepteur proident ex commodo irure est.<br /><br />Nisi commodo qui pariatur enim sint laborum consequat enim in officia. Officia fugiat incididunt commodo et mollit aliqua non aute. Enim dolor eiusmod aliqua amet ipsum in enim eiusmod. Quis exercitation sit velit duis.<br /><br />Est Lorem labore consectetur minim sit eu eiusmod mollit velit. Consectetur voluptate ex amet id eiusmod laborum irure. Aliquip ad qui id exercitation irure amet commodo nisi quis. Occaecat minim incididunt eiusmod nostrud veniam quis culpa.Nisi ipsum et consequat id deserunt excepteur. Cillum non pariatur culpa ut occaecat laboris eu.Ullamco ad Lorem et elit laboris eu qui irure nulla qui culpa et. Cupidatat sunt ipsum proident aute exercitation do tempor aliqua cupidatat quis non exercitation. Adipisicing do minim dolore nulla mollit. Adipisicing incididunt irure ipsum et in esse ipsum elit tempor.<br /><br />Aliquip mollit sunt qui irure. Irure ullamco Lorem excepteur dolor qui ea ad quis. Enim fugiat cillum enim ad occaecat sint qui elit labore mollit sunt laborum fugiat consequat. Voluptate labore sunt duis eu deserunt. Occaecat do ut ut labore cillum enim dolore ad enim enim id. Aliquip do veniam ad excepteur ad cillum qui deserunt nostrud sunt aliqua duis sunt occaecat. Laborum incididunt commodo ullamco proident quis.',
	},
	author: {
		name: 'John Doe',
		avatar: '/src/assets/profilePicture.svg',
		username: 'johndoe',
		about: 'Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.',
	},
};

Article.propTypes = {
	article: PropTypes.shape({
		img: PropTypes.string,
		title: PropTypes.string,
		content: PropTypes.string,
		author: PropTypes.string,
	}),
	author: PropTypes.shape({
		name: PropTypes.string,
		avatar: PropTypes.string,
		username: PropTypes.string,
		about: PropTypes.string,
	}),
};

export default Article;
