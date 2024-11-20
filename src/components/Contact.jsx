import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';

function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				'YOUR_SERVICE_ID',
				'YOUR_TEMPLATE_ID',
				e.target,
				'YOUR_USER_ID',
			)
			.then(
				(result) => {
					alert('Meldingen din har blitt sendt!');
				},
				(error) => {
					alert(
						'Feil ved sending av meldingen. Vennligst prøv igjen.',
					);
				},
			);
		setName('');
		setEmail('');
		setMessage('');
	};

	return (
		<>
			<Helmet>
				<title>Kontakt – ML Vri</title>
				<meta
					name="description"
					content="Kontakt oss for å få mer informasjon om våre tjenester. Vi svarer gjerne på dine spørsmål."
				/>
				<meta
					name="keywords"
					content="kontakt, ML Vri, flyttehjelp, oppussing"
				/>
				<meta property="og:title" content="Kontakt – ML Vri" />
				<meta
					property="og:description"
					content="Kontakt oss i dag for en uforpliktende samtale. Vi tilbyr profesjonelle flytte- og oppussingstjenester."
				/>
				<meta property="og:image" content="/images/contact.jpg" />
				<link rel="canonical" href="https://yourdomain.com/contact" />
				<script type="application/ld+json">
					{`
						{
							"@context": "https://schema.org",
							"@type": "ContactPoint",
							"telephone": "99854333",
							"contactType": "customer service",
							"email": "lukmegnorge@gmail.com",
							"areaServed": "NO",
							"availableLanguage": ["Norwegian", "English"]
						}
					`}
				</script>
			</Helmet>
			<section id="contact" className="text-center space-y-8">
				<h2 className="text-3xl font-bold text-center text-gold mb-8 mt-6">
					Kontakt
				</h2>

				{/* Informacje kontaktowe i lokalizacja */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
					<div className="space-y-4 flex flex-col h-full">
						<h3 className="text-xl font-semibold text-gold">
							Kontaktinformasjon
						</h3>
						<div className="bg-white p-6 rounded-lg shadow-lg flex-grow">
							<p>
								<strong>Telefon:</strong> 998 54 333
							</p>
							<p>
								<strong>E-post:</strong> lukmegnorge@gmail.com
							</p>
							<p>
								<strong>Adresse:</strong> Nordbybråten 16, 1592
								Våler
							</p>
							<p className="mt-4">
								<strong>Åpningstider:</strong>
							</p>
							<p>Mandag - Fredag: 08:00 - 16:00</p>
							<p>Lørdag - Søndag: Stengt</p>
						</div>
					</div>

					<div className="space-y-4 flex flex-col h-full">
						<h3 className="text-xl font-semibold text-gold">
							Lokasjon
						</h3>
						<div className="bg-white p-6 rounded-lg shadow-lg flex-grow">
							<iframe
								title="LukMeg Location"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1135.4322048629995!2d10.794567840793935!3d59.469736205073105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464159992c1e1107%3A0x2e3a1c6dbe51e407!2sNordbybr%C3%A5ten%2016%2C%201592%20V%C3%A5ler%2C%20Norway!5e0!3m2!1sen!2sus!4v1614356458051!5m2!1sen!2sus"
								width="100%"
								height="300"
								className="rounded-lg border-2 border-lightNavy"
								allowFullScreen=""
								loading="lazy"
							></iframe>
						</div>
					</div>
				</div>

				{/* Formularz kontaktowy */}
				<div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
					<h3 className="text-xl font-semibold text-gold text-center mb-4">
						Send oss en melding
					</h3>
					<form onSubmit={handleSubmit} className="space-y-4">
						<input
							type="text"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Navn"
							required
							className="w-full p-2 border border-lightNavy rounded-md text-navy"
						/>
						<input
							type="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="E-post"
							required
							className="w-full p-2 border border-lightNavy rounded-md text-navy"
						/>
						<textarea
							name="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							placeholder="Melding"
							required
							className="w-full p-2 border border-lightNavy rounded-md resize-none text-navy"
							rows="4"
						/>
						<button
							type="submit"
							className="bg-gold-gradient text-navy py-2 px-4 rounded-md hover:bg-white-gradient"
						>
							Send melding
						</button>
					</form>
				</div>
			</section>
		</>
	);
}

export default Contact;
