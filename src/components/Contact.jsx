import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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
		<section id="contact" className="text-center">
			<h2 className="text-2xl font-semibold mb-4 text-gold">Kontakt</h2>
			<form
				onSubmit={handleSubmit}
				className="max-w-md mx-auto space-y-4"
			>
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
				/>
				<button
					type="submit"
					className="bg-gold-gradient text-navy py-2 px-4 rounded-md hover:bg-white-gradient"
				>
					Send melding
				</button>
			</form>
		</section>
	);
}

export default Contact;
