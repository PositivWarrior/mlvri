import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
	return (
		<Router>
			<Navbar /> {/* Montujemy Navbar */}
			<main className="bg-white-gradient text-navy min-h-screen p-8">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/about" element={<About />} />
					<Route path="/reviews" element={<Reviews />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</main>
			<Footer /> {/* Montujemy Footer */}
		</Router>
	);
}

export default App;
