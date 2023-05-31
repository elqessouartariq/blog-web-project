import axiosInstance from '../utils/axiosConfig';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import FeaturedArticleSection from '../components/sections/FeaturedArticleSection';
import MiniArticleCard from '../components/MiniArticleCard';
import EditorsPickSection from '../components/sections/EditorsPickSection';
import LargeArticleCard from '../components/LargeArticleCard';
import RecommendedArticleSection from '../components/sections/RecommendedArticleSection';
import MoreArticlesSection from '../components/sections/MoreArticlesSection';
import SpecialArticleCard from '../components/SpecialArticleCard';

const Home = () => {
	const [articles, setArticles] = useState([]);
	const [featuredArticle, setFeaturedArticle] = useState({});
	const [otherArticles, setOtherArticles] = useState([]);
	const [recommendedArticle, setRecommendedArticle] = useState([]);
	useEffect(() => {
		async function getArticles() {
			try {
				const res = await axiosInstance.get('articles');
				setArticles(res.data);
				if (res.data.length > 0) {
					setFeaturedArticle(res.data[res.data.length - 1]);
					setRecommendedArticle(res.data[res.data.length - 2]);
					setOtherArticles(res.data.slice(0, res.data.length - 2));
				}
			} catch (err) {
				throw new Error(err);
			}
		}
		getArticles();
	}, []);

	return (
		<div className="mt-8 mx-6">
			<Header />
			{featuredArticle.author && (
				<FeaturedArticleSection>
					<SpecialArticleCard
						title={featuredArticle.title}
						authorName={featuredArticle.author.name}
						content={featuredArticle.content}
					/>
				</FeaturedArticleSection>
			)}

			<EditorsPickSection>
				{otherArticles.length > 0 &&
					otherArticles.map((article) => (
						<>
							<LargeArticleCard>
								<MiniArticleCard
									title={article.title}
									authorName={article.author.name}
									content={article.content}
								/>
							</LargeArticleCard>
						</>
					))}
			</EditorsPickSection>
			<RecommendedArticleSection>
				{recommendedArticle.author && (
					<SpecialArticleCard
						title={recommendedArticle.title}
						authorName={recommendedArticle.author.name}
						content={recommendedArticle.content}
					/>
				)}
			</RecommendedArticleSection>

			<MoreArticlesSection />
		</div>
	);
};

export default Home;
