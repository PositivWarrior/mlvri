import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Hero() {
	const logoVariants = {
		hidden: { opacity: 0, scale: 0.5 },
		visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
	};

	const textVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
	};

	return (
		<section
			id="hero"
			className="w-full bg-gradient-to-r from-[#000000] to-[#3533cd] flex flex-col items-center text-center text-white px-4 pt-8 md:pt-12 pb-16"
		>
			<motion.img
				src="/images/pop_no_bg.png"
				alt="LukMeg Logo for flytte- og oppussingstjenester"
				className="w-64 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] h-auto mb-4 mt-[-1rem] md:mt-[-1.5rem] rounded-full"
				variants={logoVariants}
				initial="hidden"
				animate="visible"
			/>

			<motion.div
				className="flex flex-col items-center"
				variants={textVariants}
				initial="hidden"
				animate="visible"
			>
				<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-4">
					Velkommen til LukMeg
				</h1>
				<p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-md mb-6">
					Profesjonelle flytte- og oppussingstjenester for hjem og
					bedrifter.
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1, delay: 1 }}
			>
				<Link
					to="/services"
					className="bg-gold-gradient text-navy py-3 px-6 rounded-md text-lg font-semibold hover:bg-white-gradient mb-4"
				>
					Utforsk Våre Tjenester
				</Link>
			</motion.div>
		</section>
	);
}

export default Hero;
