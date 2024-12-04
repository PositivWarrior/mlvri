import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import {
	PhoneIcon,
	EnvelopeIcon,
	MapPinIcon,
	ClockIcon,
} from '@heroicons/react/24/outline';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
	const formRef = useRef();
	const [successMessage, setSuccessMessage] = useState('');
	const [formData, setFormData] = useState({
		from_name: '',
		from_email: '',
		message: '',
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_nfi11k7',
				'template_dewkewe',
				formRef.current,
				'ouIL0a7IpDVcizQLE',
			)
			.then(
				(response) => {
					console.log('SUCCESS!', response.status, response.text);
					setSuccessMessage('Meldingen ble sendt!');
					setFormData({ from_name: '', from_email: '', message: '' });
					setTimeout(() => setSuccessMessage(''), 5000);
				},
				(error) => {
					console.log('FAILED...', error);
					setSuccessMessage(
						'Kunne ikke sende meldingen. Vennligst prøv igjen.',
					);
				},
			);

		e.target.reset();
	};

	return (
		<>
			<Helmet>
				<title>Kontakt – LukMeg</title>
				<meta
					name="description"
					content="Kontakt oss for å få mer informasjon om våre tjenester. Vi svarer gjerne på dine spørsmål."
				/>
				<meta
					name="keywords"
					content="kontakt, LukMeg, flyttehjelp, oppussing"
				/>
				<meta property="og:title" content="Kontakt – LukMeg" />
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

				{/* Contact Information and Location */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
					<div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
						<h3 className="text-xl font-semibold text-gold text-center mb-4">
							Kontaktinformasjon
						</h3>
						<div className="flex items-center space-x-4">
							<PhoneIcon className="text-gold w-6 h-6" />
							<p className="text-gray-700 text-lg">
								<strong>Telefon:</strong> 998 54 333
							</p>
						</div>
						<div className="flex items-center space-x-4">
							<EnvelopeIcon className="text-gold w-6 h-6" />
							<p className="text-gray-700 text-lg">
								<strong>E-post:</strong> lukmegnorge@gmail.com
							</p>
						</div>
						<div className="flex items-center space-x-4">
							<MapPinIcon className="text-gold w-6 h-6" />
							<p className="text-gray-700 text-lg">
								<strong>Adresse:</strong> Nordbybråten 16, 1592
								Våler
							</p>
						</div>
						<div>
							<h4 className="text-lg font-semibold text-navy">
								Åpningstider:
							</h4>
							<div className="space-y-4 mt-4">
								<div className="flex items-center space-x-4">
									<ClockIcon className="text-gold w-6 h-6" />
									<p className="text-gray-700 text-lg">
										<strong>Mandag - Fredag:</strong> 08:00
										- 16:00
									</p>
								</div>
								<div className="flex items-center space-x-4">
									<ClockIcon className="text-gold w-6 h-6" />
									<p className="text-gray-700 text-lg">
										<strong>Lørdag - Søndag:</strong> Stengt
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="space-y-4 flex flex-col h-full">
						<h3 className="text-xl font-semibold text-gold text-center">
							Lokasjon
						</h3>
						<div className="bg-white p-6 rounded-lg shadow-lg">
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

				{/* Contact Form */}
				<div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
					<h3 className="text-xl font-semibold text-gold text-center mb-4">
						Send oss en melding
					</h3>
					<form
						ref={formRef}
						onSubmit={sendEmail}
						className="space-y-4"
					>
						<input
							type="text"
							name="from_name"
							placeholder="Navn"
							value={formData.from_name}
							onChange={handleInputChange}
							required
							className="w-full p-2 border border-lightNavy rounded-md text-navy"
						/>
						<input
							type="email"
							name="from_email"
							placeholder="E-post"
							value={formData.from_email}
							onChange={handleInputChange}
							required
							className="w-full p-2 border border-lightNavy rounded-md text-navy"
						/>
						<textarea
							name="message"
							placeholder="Melding"
							value={formData.message}
							onChange={handleInputChange}
							required
							className="w-full p-2 border border-lightNavy rounded-md resize-none text-navy"
							rows="4"
						/>
						<button
							type="submit"
							className="bg-gold-gradient text-navy py-2 px-4 rounded-md transition-transform duration-300 hover:scale-105 hover:shadow-md focus:outline-none"
							aria-label="Send melding"
						>
							Send melding
						</button>
					</form>
					{successMessage && (
						<p className="mt-4 text-center text-green-500">
							{successMessage}
						</p>
					)}
				</div>
			</section>
		</>
	);
};

export default Contact;
