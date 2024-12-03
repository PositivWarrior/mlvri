import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3BottomLeftIcon, XCircleIcon } from '@heroicons/react/24/outline';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-gradient-to-r from-[#000000] to-[#3533cd] p-4 flex justify-between items-center">
			<h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-500">
				<Link to="/">LukMeg</Link>
			</h1>

			<div className="hidden md:flex space-x-4">
				<Link to="/about" className="text-white hover:text-gold">
					Om Oss
				</Link>
				<Link to="/services" className="text-white hover:text-gold">
					Tjenester
				</Link>
				<Link to="/reviews" className="text-white hover:text-gold">
					Omtaler
				</Link>
				<Link to="/contact" className="text-white hover:text-gold">
					Kontakt
				</Link>
			</div>

			<div className="md:hidden">
				<button
					onClick={toggleMenu}
					className="text-white focus:outline-none"
				>
					{isOpen ? (
						<XCircleIcon className="h-6 w-6" />
					) : (
						<Bars3BottomLeftIcon className="h-6 w-6" />
					)}
				</button>
			</div>

			{isOpen && (
				<div className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-[#000000]/80 to-[#3533cd]/80 backdrop-blur-md flex flex-col items-center space-y-4 py-4 z-50">
					<Link
						to="/about"
						onClick={toggleMenu}
						className="text-white hover:text-gold"
					>
						Om Oss
					</Link>
					<Link
						to="/services"
						onClick={toggleMenu}
						className="text-white hover:text-gold"
					>
						Tjenester
					</Link>
					<Link
						to="/reviews"
						onClick={toggleMenu}
						className="text-white hover:text-gold"
					>
						Omtaler
					</Link>
					<Link
						to="/contact"
						onClick={toggleMenu}
						className="text-white hover:text-gold"
					>
						Kontakt
					</Link>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
