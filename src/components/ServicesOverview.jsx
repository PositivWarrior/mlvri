import React from 'react';
import Tile from './Tile';
import {
	CogIcon,
	BuildingOfficeIcon,
	HomeIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

function ServicesOverview() {
	const tileVariants = (direction) => ({
		hidden: { opacity: 0, x: direction === 'left' ? -100 : 100 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
	});

	const tiles = [
		{
			icon: CogIcon,
			title: 'Rehabilitering',
			description:
				'Skal du pusse opp? Vi i LukMeg utfører renovasjon og rehabilitering på gamle boliger og byggverk, og gir deg råd og veiledning for å finne ut hvilke deler av huset som må prioriteres for utskifting.',
		},
		{
			icon: BuildingOfficeIcon,
			title: 'Tilbygg',
			description:
				'Planlegger du å utvide og trenger et ekstra soverom eller kanskje en vinterhage? LukMeg fører opp tilbygg og påbygg etter dine behov og ønsker.',
		},
		{
			icon: HomeIcon,
			title: 'Nybygg',
			description:
				'Har du en tomt og skal bygge nytt? LukMeg hjelper deg med å realisere boligdrømmen og bistår deg gjennom hele prosessen.',
		},
	];

	return (
		<section id="services-overview" className="p-8 bg-white text-navy">
			<h2 className="text-3xl font-bold text-center text-gold mb-6">
				Hva kan vi hjelpe deg med?
			</h2>

			<p className="text-lg max-w-3xl mx-auto text-center text-gray-700 mb-12">
				Vi utfører det meste av tradisjonelle tømrertjenester. Ta en
				titt på hva vi kan hjelpe deg med nedenfor, og kontakt oss for
				en hyggelig prat om ditt prosjekt.
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

export default ServicesOverview;
