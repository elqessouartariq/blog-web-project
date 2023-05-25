const UserPrimaryMenu = () => {
	return (
		<>
			<div className="w-32 rounded-lg user-primary-menu bg-white stroke-[#F3F3F3] shadow-sm py-3">
				<h1 className="font-primary font-bold text-base pl-3">
					Arthur Black
				</h1>

				<h2 className="font-primary text-sm text-primaryGray font-normal pl-3">
					@arthurblack
				</h2>

				<span className="border border-[1px] inline-block w-full"></span>
				<ul className="pl-3">
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
						<a href="#">Sign out</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default UserPrimaryMenu;
