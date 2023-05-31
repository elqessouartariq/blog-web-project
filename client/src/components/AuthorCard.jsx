import PropTypes from 'prop-types';

const AuthorCard = ({ author }) => {
	const { name, avatar, username, about } = author;
	return (
		<div className="author-card">
			<h3 className="uppercase font-primary text-lg text-primaryGray font-normal mb-4">
				ABOUT THE AUTHOR
			</h3>
			<div className="flex items-center">
				<img
					src={avatar}
					alt={name}
					className="rounded-full h-52 w-52 object-cover"
				/>
				<div className="ml-9 ">
					<h4 className="font-heading text-3xl text-primaryBlack font-bold">
						{name}
					</h4>
					<p className="font-primary text-sm text-primaryGray font-normal mb-3">
						@{username}
					</p>
					<p>{about}</p>
				</div>
			</div>
		</div>
	);
};

AuthorCard.defaultProps = {
	author: {
		name: 'John Doe',
		avatar: '/src/assets/profilePicture.svg',
		username: 'johndoe',
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
