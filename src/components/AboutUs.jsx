import React, { memo } from 'react';
import { Tile } from './Tile';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import {
	ClipboardDocumentListIcon,
	ShieldCheckIcon,
	PhoneIcon,
} from '@heroicons/react/24/outline';

// Memoized Tile Component for Performance Optimization
const MemoizedTile = memo(({ icon, title, description }) => (
	<Tile icon={icon} title={title} description={description} />
));

function AboutUs() {
	// Animation Variants for Tiles
	const tileVariants = (direction) => ({
		hidden: { opacity: 0, x: direction === 'left' ? -50 : 50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.4 },
		},
	});

	// Tile Data
	const tiles = [
		{
			icon: ClipboardDocumentListIcon,
			title: 'Kundene i fokus',
			description:
				'Vi har et stort fokus på god kommunikasjon og godt samarbeid med våre kunder...',
		},
		{
			icon: ShieldCheckIcon,
			title: 'Godt utført arbeid',
			description:
				'Vi er opptatt av godt håndverk, kvalitet og fagkunnskap...',
		},
		{
			icon: PhoneIcon,
			title: 'Motta et tilbud',
			description:
				'Vi tilbyr en uforpliktende befaring for å diskutere ditt prosjekt...',
		},
	];

	return (
		<section
			id="about-us"
			className="p-8 bg-white text-gray-800"
			aria-labelledby="about-us-heading"
		>
			<h2
				id="about-us-heading"
				className="text-3xl font-bold text-center text-gold mb-6"
			>
				Hvem er vi?
			</h2>
			<p
				className="text-lg max-w-3xl mx-auto text-center text-gray-700 mb-12"
				style={{ fontSize: '1.125rem', lineHeight: '1.75rem' }}
			>
				Erfarne håndverkere og kvalitetsmessig arbeid. LukMeg er et
				flytte- og renoveringsfirma som består av et dyktig team av
				fagfolk som kun bruker de beste materialene. Våre ansatte sikrer
				gode resultater og tilbyr en solid arbeidsmoral for hvert
				prosjekt som gjennomføres. Alt vi jobber med er bygget på et
				solid fundament som betyr at det er bygget for å vare i årevis.
			</p>

			{/* LazyMotion only applies to non-LCP elements */}
			<LazyMotion features={domAnimation}>
				<div
					className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto"
					aria-label="Våre verdier"
				>
					{tiles.map((tile, index) => (
						<m.div
							key={index}
							variants={tileVariants(
								index % 2 === 0 ? 'left' : 'right',
							)}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.3 }}
							style={{
								width: '100%', // Prevent layout shifts
								minHeight: '180px', // Set a minimum height for tiles
							}}
						>
							<MemoizedTile
								icon={tile.icon}
								title={tile.title}
								description={tile.description}
							/>
						</m.div>
					))}
				</div>
			</LazyMotion>
		</section>
	);
}

export default AboutUs;
