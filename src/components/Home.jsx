import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import ServicesOverview from './ServicesOverview';
import { Helmet } from 'react-helmet';

function Home() {
	return (
		<>
			<Helmet>
				<title>ML Vri – Flytting og Oppussing</title>
				<meta
					name="description"
					content="Velkommen til ML Vri! Vi tilbyr profesjonelle flytte- og oppussingstjenester for hjem og bedrifter i Norge. Kontakt oss i dag for et tilbud."
				/>
				<meta
					name="keywords"
					content="flytting, oppussing, Norge, håndverkere, ML Vri"
				/>
				<meta
					property="og:title"
					content="ML Vri – Flytting og Oppussing"
				/>
				<meta
					property="og:description"
					content="Profesjonelle flytte- og oppussingstjenester for hjem og bedrifter i Norge."
				/>
				<meta property="og:image" content="/images/pop_no_bg.png" />
				<meta property="og:type" content="website" />
				<meta name="author" content="ML Vri" />
				<link
					rel="canonical"
					href="https://positivwarrior.github.io/Portfolio/"
				/>
			</Helmet>
			<Hero />
			<AboutUs />
			<ServicesOverview />
		</>
	);
}

export default Home;
