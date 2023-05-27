import SmallButton from './shared/SmallButton';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import UserPrimaryMenu from './UserPrimaryMenu';

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
	return (
		<>
			<nav>
				<section className="MOBILE-MENU flex lg:hidden">
					<div
						className="HAMBURGER-ICON space-y-2"
						onClick={() => setIsNavOpen((prev) => !prev)}
					>
						<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
						<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
						<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
					</div>

					<div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
						{' '}
						<div
							className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
							onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
						>
							<svg
								className="h-8 w-8 text-gray-600"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<line x1="18" y1="6" x2="6" y2="18" />
								<line x1="6" y1="6" x2="18" y2="18" />
							</svg>
						</div>
						<ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
							<li className="border-b border-gray-400 my-8 uppercase">
								<a href="/about">Home</a>
							</li>
							<li className="border-b border-gray-400 my-8 uppercase">
								<a href="/portfolio">Categories</a>
							</li>
							<li className="border-b border-gray-400 my-8 uppercase">
								<a href="/contact">About</a>
							</li>
						</ul>
					</div>
				</section>
				<section className="hidden lg:flex lg:items-center lg:justify-between">
					<div className="left-navbar flex items-center ">
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
					<div className="right-navbar">
						<ul className="flex space-x-4 items-center">
							<li>
								<button>
									<img
										src="/src/assets/searchIcon.svg"
										className="h-6"
									/>
								</button>
							</li>
							<li>
								<SmallButton text="Log in" onClick={() => {}} />
							</li>
							<li>
								<a href="#">
									<img
										src="/src/assets/icons/bell.svg"
										alt=""
									/>
								</a>
							</li>
							<li>
								<button
									onClick={() => {
										isUserMenuOpen
											? setIsUserMenuOpen(false)
											: setIsUserMenuOpen(true);
									}}
								>
									<img
										src="/src/assets/profilePicture.svg"
										alt="Profile picture"
										className="rounded-full h-12 w-12"
									/>
								</button>
							</li>
						</ul>
						{isUserMenuOpen &&
							createPortal(<UserPrimaryMenu />, document.body)}
					</div>
				</section>
			</nav>
			<style>
				{`
					.hideMenuNav {
						display: none;
					}
					.showMenuNav {
						display: block;
						position: absolute;
						width: 100%;
						height: 100vh;
						top: 0;
						left: 0;
						background: white;
						z-index: 10;
						display: flex;
						flex-direction: column;
						justify-content: space-evenly;
						align-items: center;
					}
   				 `}
			</style>
		</>
	);
};

export default Header;
