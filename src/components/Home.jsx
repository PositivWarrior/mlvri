import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<section
			id="hero"
			className="h-screen bg-navy-gradient flex flex-col items-center justify-center text-center text-white"
			style={{
				backgroundImage:
					"url('https://images.unsplash.com/photo-1520038410233-7141be7e6f97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdmluZyUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D')", // Zamień na ścieżkę do swojego zdjęcia
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<h1 className="text-4xl font-bold mb-6">Velkommen til ML Vri</h1>
			<p className="text-xl mb-8">
				Profesjonelle flytte- og oppussingstjenester for hjem og
				bedrifter.
			</p>
			<Link
				to="/services"
				className="bg-gold-gradient text-navy py-3 px-6 rounded-md text-lg font-semibold hover:bg-white-gradient"
			>
				Utforsk Våre Tjenester
			</Link>
		</section>
	);
}

export default Home;
