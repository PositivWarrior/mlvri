import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HelmetProvider } from 'react-helmet-async';
// import { MemoryRouter } from 'react-router-dom';
import App from '../App'; // Updated path

test('renders the main application and displays the Navbar with the main link', async () => {
	render(
		<HelmetProvider>
			<App />
		</HelmetProvider>,
	);
	const homeElement = screen.getByRole('link', { name: /lukmeg/i });
	expect(homeElement).toBeInTheDocument();
});

test('renders a key element from the Hero section on the home page', async () => {
	render(
		<HelmetProvider>
			<App />
		</HelmetProvider>,
	);

	const welcomeHeading = await screen.findByRole('heading', {
		name: /Velkommen til LukMeg/i,
	});
	expect(welcomeHeading).toBeInTheDocument();
});

test('renders the footer with copyright information', () => {
	render(
		<HelmetProvider>
			<App />
		</HelmetProvider>,
	);
	expect(
		screen.getByText(/© 2024 Kacper Margol. All rights reserved./i),
	).toBeInTheDocument();
});

describe('Navigation tests', () => {
	const testCases = [
		{
			linkName: /Om Oss/i,
			expectedText: /familieeid bedrift/i,
			queryMethod: 'findByText',
		},
		{
			linkName: /Tjenester/i,
			expectedText: /Profesjonell flyttehjelp/i,
			queryMethod: 'findByText',
		},
		{
			linkName: /Omtaler/i,
			expectedText: /Legg igjen din omtale/i,
			queryMethod: 'findByPlaceholderText',
		},
		{
			linkName: /Kontakt/i,
			expectedText: /Send oss en melding/i,
			queryMethod: 'findByText',
		},
	];

	testCases.forEach((testCase) => {
		const { linkName, expectedText, queryMethod } = testCase;
		test(`navigates to ${linkName} page and displays correct content`, async () => {
			window.history.pushState({}, '', '/');
			render(
				<HelmetProvider>
					<App />
				</HelmetProvider>,
			);

			await screen.findByRole('heading', {
				name: /Velkommen til LukMeg/i,
			});

			const navLink = screen.getByRole('link', { name: linkName });
			await userEvent.click(navLink);

			let targetElement;
			if (queryMethod === 'findByPlaceholderText') {
				targetElement = await screen.findByPlaceholderText(
					expectedText,
				);
			} else {
				targetElement = await screen.findByText(expectedText);
			}
			expect(targetElement).toBeInTheDocument();
		});
	});
});
