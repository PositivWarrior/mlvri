import React from 'react';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import About from '../components/About'; // Updated path

// Helper function to render with HelmetProvider
const renderWithProviders = (ui, options) => {
	return render(<HelmetProvider>{ui}</HelmetProvider>, options);
};

describe('About Component', () => {
	test('renders the main heading', () => {
		renderWithProviders(<About />);
		expect(
			screen.getByRole('heading', { name: /Om Oss/i, level: 2 }),
		).toBeInTheDocument();
	});

	test('renders key descriptive text', () => {
		renderWithProviders(<About />);
		expect(
			screen.getByText(/LukMeg er en familieeid bedrift/i),
		).toBeInTheDocument();
		expect(
			screen.getByText(/Vår familie har overført viktige verdier/i),
		).toBeInTheDocument();
	});

	test('renders the image with correct alt text', () => {
		renderWithProviders(<About />);
		const image = screen.getByAltText(/Familie firma LukMeg/i);
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute(
			'src',
			'https://plus.unsplash.com/premium_photo-1682098296872-3512afc090ab?w=800&auto=format&fit=crop&q=60',
		);
	});
});
