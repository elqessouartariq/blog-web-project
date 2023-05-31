import PropTypes from 'prop-types';

const UserPrimaryMenu = () => {
	const user = JSON.parse(localStorage.getItem('authUser'));

	const handleLogout = () => {
		if (confirm('Are you sure you want to logout?')) {
			localStorage.removeItem('authUser');
			localStorage.removeItem('authToken');

			window.location.href = '/';
		}
	};

	return (
		<>
			<div className="w-36 absolute top-24 right-8 rounded-lg user-primary-menu bg-white stroke-[#F3F3F3] shadow-sm py-4">
				<h1 className="font-primary font-bold text-base pl-4 ">
					{user.name}
				</h1>

				<h2 className="font-primary text-sm text-primaryGray font-normal pl-4">
					@{user.username}
				</h2>

				<span className="border border-[1px] inline-block w-full"></span>
				<ul className="pl-4">
					<li>
						<a href="#">Dashboard</a>
					</li>
					<li>
						<a href="#">Write a Post</a>
					</li>
					<li>
						<a href="#">Settings</a>
					</li>
					<li>
						<a href="#">Help</a>
					</li>
					<li>
						<a href="#" onClick={handleLogout}>
							Sign out
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default UserPrimaryMenu;
