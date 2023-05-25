import PropTypes from 'prop-types';

const AuthorCard = ({ author }) => {
	const { name, avatar, username, about } = author;
	return (
		<div className="flex flex-wrap sm:flex-nowrap m-6">
			<img
				src={avatar}
				alt={name}
				className="rounded-full md:w-1/3  md:block h-52 mr-2 mb-6 sm:mb-0"
			/>
			<div className="md:w-2/3">
				<h4 className="font-heading text-3xl text-primaryBlack font-bold">
					{name}
				</h4>
				<p className="font-primary text-sm text-primaryGray font-normal mb-3">
					@{username}
				</p>
				<p>{about}</p>
				<div className="flex justify-between mt-3">
					<a href="#" target="_blank" rel="noopener noreferrer">
						<img
							src="src/assets/icons/link.svg"
							alt="link icon"
							className="inline-flex mr-2"
						/>
						arthurblack.com
					</a>
					<ul className="flex space-x-4 ">
						<li>
							<a href="#">
								<img
									src="src/assets/icons/linkedin.svg"
									alt="linkedin icon"
								/>
							</a>
						</li>
						<li>
							<a href="">
								<img
									src="src/assets/icons/instagram.svg"
									alt="instagram icon"
								/>
							</a>
						</li>
						<li>
							<a href="">
								<img
									src="src/assets/icons/twitter.svg"
									alt="twitter icon"
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

AuthorCard.defaultProps = {
	author: {
		name: 'Arthur Black',
		avatar: '/src/assets/profilePicture.svg',
		username: 'arthurblack',
		about: 'Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.',
	},
};

AuthorCard.propTypes = {
	author: PropTypes.shape({
		name: PropTypes.string,
		avatar: PropTypes.string,
		username: PropTypes.string,
		about: PropTypes.string,
	}),
};

export default AuthorCard;
