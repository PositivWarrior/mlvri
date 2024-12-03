import React from 'react';
import Tile from './Tile';
import {
	ClipboardDocumentListIcon,
	ShieldCheckIcon,
	PhoneIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

function AboutUs() {
	const tileVariants = (direction) => ({
		hidden: { opacity: 0, x: direction === 'left' ? -100 : 100 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
	});

	const tiles = [
		{
			icon: ClipboardDocumentListIcon,
			title: 'Kundene i fokus',
			description:
				'Vi har et stort fokus på god kommunikasjon og godt samarbeid med våre kunder, og tilpasser oss etter dine behov for å sikre at du får det resultatet du ser for deg.',
		},
		{
			icon: ShieldCheckIcon,
			title: 'Godt utført arbeid',
			description:
				'Vi er opptatt av godt håndverk, kvalitet og fagkunnskap i arbeidet vi utfører, og yter alltid vårt beste for å gjøre en god jobb for våre kunder.',
		},
		{
			icon: PhoneIcon,
			title: 'Motta et tilbud',
			description:
				'Vi kommer gjerne på en befaring for å vurdere ditt prosjekt. Kontakt oss gjerne for avtale, og motta et uforpliktende tilbud fra oss.',
		},
	];

	return (
		<section id="about-us" className="p-8 bg-white text-navy">
			<h2 className="text-3xl font-bold text-center text-gold mb-6">
				Hvem er vi?
			</h2>
			<p className="text-lg max-w-3xl mx-auto text-center text-gray-700 mb-12">
				Erfarne håndverkere og kvalitetsmessig arbeid. LukMeg er et
				flytte- og renoveringsfirma som består av et dyktig team av
				fagfolk som kun bruker de beste materialene. Våre ansatte sikrer
				gode resultater og tilbyr en solid arbeidsmoral for hvert
				prosjekt som gjennomføres. Alt vi jobber med er bygget på et
				solid fundament som betyr at det er bygget for å vare i årevis.
			</p>

			<div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
				{tiles.map((tile, index) => (
					<motion.div
						key={index}
						variants={tileVariants(
							index % 2 === 0 ? 'left' : 'right',
						)}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
					>
						<Tile
							icon={tile.icon}
							title={tile.title}
							description={tile.description}
						/>
					</motion.div>
				))}
			</div>
		</section>
	);
}

export default AboutUs;
