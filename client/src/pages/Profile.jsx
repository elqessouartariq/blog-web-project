import Header from '../components/Header';
import HorizontalArticleCard from '../components/HorizontalArticleCard';
import MiniArticleCard from '../components/MiniArticleCard';
import ProfileCard from '../components/ProfileCard';
import RecommendedArticleSection from '../components/sections/RecommendedArticleSection';

const Profile = () => {
	return (
		<div className="flex-col md:w-1/2 md:justify-center mx-auto mt-20">
			<div>
				<ProfileCard />
			</div>
			<div className="hidden lg:block">
				<RecommendedArticleSection>
					<MiniArticleCard padding={'p-10'} />
				</RecommendedArticleSection>
			</div>
			<div>
				<HorizontalArticleCard />
				<HorizontalArticleCard />
				<HorizontalArticleCard />
				<HorizontalArticleCard />
				<HorizontalArticleCard />
			</div>
		</div>
	);
};

export default Profile;
