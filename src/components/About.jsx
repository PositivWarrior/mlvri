import React from 'react';

function About() {
	return (
		<section id="about" className="p-8 bg-white text-navy">
			<h2 className="text-3xl font-bold text-center text-gold mb-8">
				Om Oss
			</h2>
			<div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-5xl mx-auto">
				{/* Zdjęcie rodzinne */}
				<div className="md:w-1/2 w-full">
					<img
						src="https://plus.unsplash.com/premium_photo-1682098296872-3512afc090ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhbWlseXxlbnwwfHwwfHx8MA%3D%3D"
						alt="Firma rodzinna ML Vri"
						className="rounded-lg shadow-lg w-full h-auto"
					/>
				</div>
				{/* Opis firmy */}
				<div className="md:w-1/2 w-full">
					<p className="text-lg text-gray-700">
						ML Vri er en familieeid bedrift, etablert i 2019. Vi
						setter stor pris på familieverdier og arbeider alltid
						med nøyaktighet og en hjelpende hånd for å skape en
						hyggelig atmosfære.
					</p>
					<p className="text-lg text-gray-700 mt-4">
						Vår familie har overført viktige verdier gjennom
						generasjoner, og vi tror på å tilby tjenester med både
						hjerte og profesjonalitet. Hos oss møter du en pålitelig
						og vennlig tilnærming som gjør at du kan føle deg trygg
						på at vi tar vare på dine eiendeler og behov.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
