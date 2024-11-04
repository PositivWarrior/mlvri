module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				navy: '#001f3f', // Granatowy
				gold: '#FFD700', // Złoty
				white: '#ffffff',
				lightNavy: '#0a2a4d', // Jasny odcień granatowego
			},
			backgroundImage: {
				'navy-gradient':
					'linear-gradient(135deg, #001f3f 0%, #0a2a4d 100%)',
				'gold-gradient':
					'linear-gradient(135deg, #FFD700 0%, #ffdf00 100%)',
				'white-gradient':
					'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
			},
		},
	},
	plugins: [],
};
