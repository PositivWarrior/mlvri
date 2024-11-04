import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import About from './components/About'; // Importujemy komponent Om Oss
import './App.css';

function App() {
	return (
		<Router>
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
			<main className="bg-white-gradient text-navy">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/about" element={<About />} />
					<Route path="/reviews" element={<Reviews />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
