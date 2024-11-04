import React from 'react';

function Footer() {
	return (
		<footer className="bg-navy-gradient text-white py-4 mt-8">
			<div className="text-center">
				<p className="text-sm">
					© 2024 Kacper Margol. All rights reserved.
				</p>

				<div className="flex justify-center space-x-4 mt-4">
					{/* Linki do mediów społecznościowych i portfolio developera */}
					<a
						href="https://kacpermargol.com"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-gold"
					>
						Portfolio
					</a>
					<a
						href="https://linkedin.com/in/kacpermargol"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-gold"
					>
						LinkedIn
					</a>
					<a
						href="https://github.com/kacpermargol"
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
