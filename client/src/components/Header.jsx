import SmallButton from './shared/smallButton';

const Header = () => {
	return (
		<>
			<div className="flex items-center justify-between">
				<div className="left-navbar flex items-center">
					<div className="mr-6">
						<img src="/src/assets/logo.svg" />
					</div>
					<div>
						<ul className="flex space-x-7">
							<li className="font-heading font-bold">
								<a href="#">Home</a>
							</li>
							<li className="font-heading font-normal">
								<a href="#">Categories</a>
							</li>
							<li className="font-heading font-normal">
								<a href="#">About</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="right-navbar flex space-x-3">
					<button>
						<img src="/src/assets/searchIcon.svg" className="h-6" />
					</button>
					<SmallButton text="Log in" />
				</div>
			</div>
		</>
	);
};
export default Header;
