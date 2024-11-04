import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<header className="bg-navy-gradient text-white py-6">
			<h1 className="text-center text-3xl font-bold">
				ML Vri – Flytting og Oppussing
			</h1>
			<nav className="mt-4">
				<ul className="flex justify-center space-x-6 text-lg">
					<li>
						<Link to="/" className="hover:text-gold">
							Hjem
						</Link>
					</li>
					<li>
						<Link to="/services" className="hover:text-gold">
							Tjenester
						</Link>
					</li>
					<li>
						<Link to="/about" className="hover:text-gold">
							Om Oss
						</Link>
					</li>
					<li>
						<Link to="/reviews" className="hover:text-gold">
							Omtaler
						</Link>
					</li>
					<li>
						<Link to="/contact" className="hover:text-gold">
							Kontakt
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
