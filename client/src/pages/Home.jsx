import Header from '../components/Header';
import FeaturedArticleSection from '../components/sections/FeaturedArticleSection';
import MiniArticleCard from '../components/MiniArticleCard';
import EditorsPickSection from '../components/sections/EditorsPickSection';
import LargeArticleCard from '../components/LargeArticleCard';
import RecommendedArticleSection from '../components/sections/RecommendedArticleSection';
import MoreArticlesSection from '../components/sections/MoreArticlesSection';
import SpecialArticleCard from '../components/SpecialArticleCard';
const Home = () => {
	return (
		<div className="mt-8 mx-6">
			<Header />
			<FeaturedArticleSection>
				<SpecialArticleCard />
			</FeaturedArticleSection>

			<EditorsPickSection>
				<LargeArticleCard>
					<MiniArticleCard />
				</LargeArticleCard>
				<LargeArticleCard>
					<MiniArticleCard />
				</LargeArticleCard>
				<LargeArticleCard>
					<MiniArticleCard />
				</LargeArticleCard>
				<LargeArticleCard>
					<MiniArticleCard />
				</LargeArticleCard>
			</EditorsPickSection>
			<RecommendedArticleSection>
				<SpecialArticleCard />
			</RecommendedArticleSection>

			<MoreArticlesSection />
		</div>
	);
};

export default Home;
