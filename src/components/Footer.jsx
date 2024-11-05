import React from 'react';

function Footer() {
	return (
		<footer className="bg-gradient-to-r from-[#000000] to-[#3533cd] text-white py-4 mt-8">
			<div className="text-center">
				<p className="text-sm">
					© 2024 Kacper Margol. All rights reserved.
				</p>

				<div className="flex justify-center space-x-4 mt-4">
					<a
						href="https://positivwarrior.github.io/Portfolio/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-gold"
					>
						Portfolio
					</a>
					<a
						href="https://www.linkedin.com/in/kacper-margol-545493195/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-gold"
					>
						LinkedIn
					</a>
					<a
						href="https://github.com/PositivWarrior"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-gold"
					>
						GitHub
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
