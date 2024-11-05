import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav className="bg-gradient-to-r from-[#000000] to-[#3533cd] p-4 flex justify-between items-center">
			<h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-500">
				<Link to="/">ML Vri</Link>
			</h1>
			<div className="space-x-4">
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
		</nav>
	);
}

export default Navbar;
