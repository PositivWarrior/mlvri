import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const Home = React.lazy(() => import('./components/Home'));
const Services = React.lazy(() => import('./components/Services'));
const About = React.lazy(() => import('./components/About'));
const Reviews = React.lazy(() => import('./components/Reviews'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
	return (
		<Router>
			<Navbar />
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/about" element={<About />} />
					<Route path="/reviews" element={<Reviews />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Suspense>
			<Footer />
		</Router>
	);
}

export default App;
