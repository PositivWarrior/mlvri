import React from 'react';
import { Helmet } from 'react-helmet';

function Services() {
	const services = [
		{
			title: 'Flytting',
			description:
				'Profesjonell flyttehjelp for både private hjem og bedrifter. Vi tar oss av alt fra pakking til transport.',
			image: 'https://plus.unsplash.com/premium_photo-1679858379293-ea25549715e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmluZyUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D', // Zamień na rzeczywisty obraz dla "Flytting"
		},
		{
			title: 'Oppussing',
			description:
				'Totaloppussing og renovering av hjem og kontor. Skap ditt drømmeinteriør med hjelp av våre eksperter.',
			image: 'https://plus.unsplash.com/premium_photo-1678742388675-1fa2292994a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGNsZWFuaW5nfGVufDB8fDB8fHww', // Zamień na rzeczywisty obraz dla "Oppussing"
		},
		{
			title: 'Transport av store gjenstander',
			description:
				'Trygg og sikker transport av store gjenstander, inkludert pianoflytting, tunge møbler og mer.',
			image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aW5nJTIwY29tcGFueXxlbnwwfHwwfHx8MA%3D%3D', // Zamień na rzeczywisty obraz dla "Transport"
		},
		{
			title: 'Konsultasjon og pristilbud',
			description:
				'Gratis konsultasjon og pristilbud for å finne den beste løsningen til dine behov.',
			image: 'https://plus.unsplash.com/premium_photo-1681074963633-0e91aa0676ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2VyJTIwY29uc3VsdHxlbnwwfHwwfHx8MA%3D%3D', // Zamień na rzeczywisty obraz dla "Konsultasjon"
		},
	];

	return (
		<>
			<Helmet>
				<title>Våre Tjenester – ML Vri</title>
				<meta
					name="description"
					content="Utforsk våre profesjonelle tjenester innen flytting og oppussing. Vi tilbyr rehabilitering, tilbygg, nybygg, og transporttjenester."
				/>
				<meta
					name="keywords"
					content="tjenester, flytting, oppussing, rehabilitering, tilbygg, nybygg"
				/>
				<meta property="og:title" content="Våre Tjenester – ML Vri" />
				<meta
					property="og:description"
					content="Utforsk våre tjenester innen flytting og oppussing. Profesjonell og trygg hjelp for alle prosjekter."
				/>
				<meta property="og:image" content="/images/services.jpg" />
				<link rel="canonical" href="https://yourdomain.com/services" />
			</Helmet>
			<section></section>
			<section id="services" className="p-8 bg-white text-navy">
				<h2 className="text-3xl font-bold text-center text-gold mb-8">
					Våre Tjenester
				</h2>
				<div className="grid md:grid-cols-2 gap-8">
					{services.map((service, index) => (
						<div
							key={index}
							className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
						>
							<img
								src={service.image}
								alt={service.title}
								className="w-full h-56 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-gold mb-2">
									{service.title}
								</h3>
								<p className="text-gray-700">
									{service.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}

export default Services;
