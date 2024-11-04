import React from 'react';
import { Link } from 'react-router-dom';
import {
	ClipboardDocumentListIcon,
	ShieldCheckIcon,
	PhoneIcon,
	BuildingOfficeIcon,
	CogIcon,
	HomeIcon,
} from '@heroicons/react/24/outline';

function Home() {
	return (
		<>
			<section
				id="hero"
				className="h-screen bg-navy-gradient flex flex-col items-center justify-center text-center text-white"
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1520038410233-7141be7e6f97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdmluZyUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<h1 className="text-4xl font-bold mb-6">
					Velkommen til ML Vri
				</h1>
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

			{/* Sekcja "Hvem er vi?" */}
			<section id="about-us" className="p-8 bg-white text-navy">
				<h2 className="text-3xl font-bold text-center text-gold mb-6">
					Hvem er vi?
				</h2>
				<p className="text-lg max-w-3xl mx-auto text-center text-gray-700 mb-12">
					Erfarne håndverkere og kvalitetsmessig arbeid. LukMeg er et
					bygge- og renoveringsfirma som består av et dyktig team av
					fagfolk som kun bruker de beste materialene. Våre ansatte
					sikrer gode resultater og tilbyr en solid arbeidsmoral for
					hvert prosjekt som gjennomføres. Alt vi jobber med er bygget
					på et solid fundament som betyr at det er bygget for å vare
					i årevis.
				</p>

				<div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
					{/* Kafelek 1: Kundene i fokus */}
					<div className="relative bg-gray-100 p-6 rounded-lg shadow-md">
						<ClipboardDocumentListIcon className="absolute top-2 left-2 w-20 h-20 text-gold" />
						<div className="ml-24 md:ml-28">
							<h3 className="text-xl font-semibold text-navy">
								Kundene i fokus
							</h3>
						</div>
						<p className="text-gray-700 mt-4 md:mt-6 lg:mt-8">
							Vi har et stort fokus på god kommunikasjon og godt
							samarbeid med våre kunder, og tilpasser oss etter
							dine behov for å sikre at du får det resultatet du
							ser for deg.
						</p>
					</div>

					{/* Kafelek 2: Godt utført arbeid */}
					<div className="relative bg-gray-100 p-6 rounded-lg shadow-md">
						<ShieldCheckIcon className="absolute top-2 left-2 w-20 h-20 text-gold" />
						<div className="ml-24 md:ml-28">
							<h3 className="text-xl font-semibold text-navy">
								Godt utført arbeid
							</h3>
						</div>
						<p className="text-gray-700 mt-4 md:mt-6 lg:mt-8">
							Vi er opptatt av godt håndverk, kvalitet og
							fagkunnskap i arbeidet vi utfører, og yter alltid
							vårt beste for å gjøre en god jobb for våre kunder.
						</p>
					</div>

					{/* Kafelek 3: Motta et tilbud */}
					<div className="relative bg-gray-100 p-6 rounded-lg shadow-md">
						<PhoneIcon className="absolute top-2 left-2 w-20 h-20 text-gold" />
						<div className="ml-24 md:ml-28">
							<h3 className="text-xl font-semibold text-navy">
								Motta et tilbud
							</h3>
						</div>
						<p className="text-gray-700 mt-4 md:mt-6 lg:mt-8">
							Vi kommer gjerne på en befaring for å vurdere ditt
							prosjekt. Kontakt oss gjerne for avtale, og motta et
							uforpliktende tilbud fra oss.
						</p>
					</div>
				</div>
			</section>

			{/* Nowa Sekcja: Hva kan vi hjelpe deg med? */}
			<section id="services-overview" className="p-8 bg-white text-navy">
				<h2 className="text-3xl font-bold text-center text-gold mb-6">
					Hva kan vi hjelpe deg med?
				</h2>
				<p className="text-lg max-w-3xl mx-auto text-center text-gray-700 mb-12">
					Vi utfører det meste av tradisjonelle tømrertjenester. Ta en
					titt på hva vi kan hjelpe deg med nedenfor, og kontakt oss
					for en hyggelig prat om ditt prosjekt.
				</p>

				<div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
					{/* Kafelek 1: Rehabilitering */}
					<div className="relative bg-gray-100 p-6 rounded-lg shadow-md">
						<CogIcon className="absolute top-2 left-2 w-20 h-20 text-gold" />
						<div className="ml-24 md:ml-28">
							<h3 className="text-xl font-semibold text-navy">
								Rehabilitering
							</h3>
						</div>
						<p className="text-gray-700 mt-4 md:mt-6 lg:mt-8">
							Skal du pusse opp? Vi i LukMeg utfører renovasjon og
							rehabilitering på gamle boliger og byggverk, og gir
							deg råd og veiledning for å finne ut hvilke deler av
							huset som må prioriteres for utskifting. Vi bruker
							produkter og materialer fra kjente produsenter, og
							tilpasser bruken etter kundens behov.
						</p>
					</div>

					{/* Kafelek 2: Tilbygg */}
					<div className="relative bg-gray-100 p-6 rounded-lg shadow-md">
						<BuildingOfficeIcon className="absolute top-2 left-2 w-20 h-20 text-gold" />
						<div className="ml-24 md:ml-28">
							<h3 className="text-xl font-semibold text-navy">
								Tilbygg
							</h3>
						</div>
						<p className="text-gray-700 mt-4 md:mt-6 lg:mt-8">
							Planlegger du å utvide og trenger et ekstra soverom
							eller kanskje en vinterhage? LukMeg fører opp
							tilbygg og påbygg etter dine behov og ønsker, slik
							at du får den plassen du trenger. Ta kontakt med
							oss. Vi står klare til å hjelpe deg!
						</p>
					</div>

					{/* Kafelek 3: Nybygg */}
					<div className="relative bg-gray-100 p-6 rounded-lg shadow-md">
						<HomeIcon className="absolute top-2 left-2 w-20 h-20 text-gold" />
						<div className="ml-24 md:ml-28">
							<h3 className="text-xl font-semibold text-navy">
								Nybygg
							</h3>
						</div>
						<p className="text-gray-700 mt-4 md:mt-6 lg:mt-8">
							Har du en tomt og skal bygge nytt? LukMeg hjelper
							deg med å realisere boligdrømmen og bistår deg
							gjennom hele prosessen, fra planleggingsfasen til du
							setter nøkkelen i døra. Våre dyktige håndverkere har
							kompetansen og kvalifikasjonene til å skape ditt nye
							drømmehjem.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default Home;
