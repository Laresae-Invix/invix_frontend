import React from "react";

const Header = () => {
	return (
		<header id="home" className="header-area bg-white shadow-md">
			<div id="header-sticky" className="menu-area">
				<div className="container mx-auto">
					<div className="flex justify-between items-center py-6">
						<div className="logo">
							<a href="/">
								<img src="img/logo/logo.png" alt="logo" className="w-32" />
							</a>
						</div>
						<nav className="hidden md:flex space-x-6">
							<a href="#home" className="text-gray-700 hover:text-blue-500">
								Home
							</a>
							<a href="#about" className="text-gray-700 hover:text-blue-500">
								About
							</a>
							<a href="#speakers" className="text-gray-700 hover:text-blue-500">
								Speakers
							</a>
							<a href="#shop" className="text-gray-700 hover:text-blue-500">
								Shop
							</a>
							<a href="#blog" className="text-gray-700 hover:text-blue-500">
								Blog
							</a>
						</nav>
						<div>
							<a
								href="#ticket"
								className="btn bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
							>
								Buy Ticket
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
