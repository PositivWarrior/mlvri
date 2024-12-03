import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import ServicesOverview from './ServicesOverview';
import { Helmet } from 'react-helmet';

function Home() {
	return (
		<>
			<Helmet>
				<title>LukMeg – Flytting og Oppussing</title>
				<meta
					name="description"
					content="Velkommen til LukMeg! Vi tilbyr profesjonelle flytte- og oppussingstjenester for hjem og bedrifter i Norge. Kontakt oss i dag for et tilbud."
				/>
				<meta
					name="keywords"
					content="flytting, oppussing, Norge, håndverkere, LukMeg, LukMeg, Viken, østfold"
				/>
				<meta
					property="og:title"
					content="LukMeg – Flytting og Oppussing"
				/>
				<meta
					property="og:description"
					content="Profesjonelle flytte- og oppussingstjenester for hjem og bedrifter i Norge."
				/>
				<meta property="og:image" content="/images/pop_no_bg.png" />
				<meta property="og:type" content="website" />
				<meta name="author" content="Kacper Margol" />
				<link
					rel="canonical"
					href="https://positivwarrior.github.io/Portfolio/"
				/>
				<script type="application/ld+json">
					{`
					{
						"@context": "https://schema.org",
						"@type": "LocalBusiness",
						"name": "LukMeg",
						"address": {
							"@type": "PostalAddress",
							"streetAddress": "Nordbybråten 16",
							"addressLocality": "Våler",
							"addressRegion": "NO",
							"postalCode": "1592"
						},
						"telephone": "99854333",
						"email": "lukmegnorge@gmail.com",
						"url": "https://yourdomain.com",
						"image": "/images/pop_no_bg.png",
						"openingHours": "Mo-Fr 08:00-16:00",
						"sameAs": [
							"https://www.linkedin.com/in/kacper-margol-545493195/",
							"https://github.com/PositivWarrior"
						]
					}
					`}
				</script>
			</Helmet>
			<Hero />
			<AboutUs />
			<ServicesOverview />
		</>
	);
}

export default Home;
