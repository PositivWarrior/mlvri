export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				navy: '#001f3f',
				gold: '#FFD700',
				white: '#ffffff',
				lightNavy: '#0a2a4d',
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
