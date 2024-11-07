import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
	return (
		<section
			id="hero"
			className="w-full min-h-screen bg-gradient-to-r from-[#000000] to-[#3533cd] flex flex-col items-center text-center text-white pt-16 md:pt-24 px-4"
		>
			<img
				src="/images/pop_no_bg.png"
				alt="ML Vri Logo"
				className="w-64 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] h-auto mb-4 rounded-full"
			/>

			<div className="flex flex-col items-center">
				<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-4">
					Velkommen til ML Vri
				</h1>
				<p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-md mb-6">
					Profesjonelle flytte- og oppussingstjenester for hjem og
					bedrifter.
				</p>
			</div>

			<Link
				to="/services"
				className="bg-gold-gradient text-navy py-3 px-6 rounded-md text-lg font-semibold hover:bg-white-gradient mb-4"
			>
				Utforsk Våre Tjenester
			</Link>
		</section>
	);
}

export default Hero;
