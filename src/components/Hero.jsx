import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
	return (
		<section
			id="hero"
			className="w-full h-screen bg-gradient-to-r from-[#000000] to-[#3533cd] flex flex-col items-center justify-center text-center text-white"
		>
			{/* Obrazek logo z efektem blendowania */}
			<img
				src="/images/pop_no_bg.png"
				alt="ML Vri Logo"
				className="w-1/2 h-auto mb-4 rounded-full"
			/>

			{/* Nagłówek i opis */}
			<div className="flex flex-col items-center">
				<h1 className="text-4xl font-bold text-gold mb-4">
					Velkommen til ML Vri
				</h1>
				<p className="text-xl text-gray-200 max-w-md mb-6">
					Profesjonelle flytte- og oppussingstjenester for hjem og
					bedrifter.
				</p>
			</div>

			{/* Przycisk */}
			<Link
				to="/services"
				className="bg-gold-gradient text-navy py-3 px-6 rounded-md text-lg font-semibold hover:bg-white-gradient"
			>
				Utforsk Våre Tjenester
			</Link>
		</section>
	);
}

export default Hero;
