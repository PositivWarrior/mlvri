import React from 'react';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import Services from '../components/Services'; // Updated path

// Helper function to render with HelmetProvider
const renderWithProviders = (ui, options) => {
	return render(<HelmetProvider>{ui}</HelmetProvider>, options);
};

describe('Services Component', () => {
	test('renders the main heading', () => {
		renderWithProviders(<Services />);
		expect(
			screen.getByRole('heading', { name: /Våre Tjenester/i, level: 2 }),
		).toBeInTheDocument();
	});

	const expectedServices = [
		{
			title: /Flytting/i,
			description:
				/Profesjonell flyttehjelp for både private hjem og bedrifter/i,
			imageAlt: /Flytting/i, // Assuming alt text matches title for simplicity
		},
		{
			title: /Oppussing/i,
			description: /Totaloppussing og renovering av hjem og kontor/i,
			imageAlt: /Oppussing/i,
		},
		{
			title: /Transport av store gjenstander/i,
			description: /Trygg og sikker transport av store gjenstander/i,
			imageAlt: /Transport av store gjenstander/i,
		},
		{
			title: /Konsultasjon og pristilbud/i,
			description:
				/Gratis konsultasjon og pristilbud for å finne den beste løsningen/i,
			imageAlt: /Konsultasjon og pristilbud/i,
		},
	];

	expectedServices.forEach((service) => {
		test(`renders service card for "${service.title}"`, () => {
			renderWithProviders(<Services />);
			expect(
				screen.getByRole('heading', { name: service.title, level: 3 }),
			).toBeInTheDocument();
			expect(screen.getByText(service.description)).toBeInTheDocument();
			const image = screen.getByAltText(service.imageAlt);
			expect(image).toBeInTheDocument();
			// We could also check image src if they are stable and known
		});
	});
});
