import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent_default from '@testing-library/user-event';
import { HelmetProvider } from 'react-helmet-async';
import Contact from '../components/Contact'; // Updated path
import emailjs from 'emailjs-com';

// Mock emailjs-com
jest.mock('emailjs-com', () => ({
	sendForm: jest.fn(),
}));

// Helper function to render with HelmetProvider
const renderWithProviders = (ui, options) => {
	return render(<HelmetProvider>{ui}</HelmetProvider>, options);
};

describe('Contact Component', () => {
	beforeEach(() => {
		// Clear all mocks before each test
		jest.clearAllMocks();
	});

	test('renders the contact form correctly', () => {
		renderWithProviders(<Contact />);

		expect(screen.getByPlaceholderText(/navn/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/e-post/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/melding/i)).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: /send melding/i }),
		).toBeInTheDocument();
	});

	test('allows user to fill and submit the form successfully', async () => {
		emailjs.sendForm.mockImplementation(() =>
			Promise.resolve({ status: 200, text: 'OK' }),
		);
		const user = userEvent_default;
		renderWithProviders(<Contact />);

		await user.type(screen.getByPlaceholderText(/navn/i), 'Test Bruker');
		await user.type(
			screen.getByPlaceholderText(/e-post/i),
			'test@example.com',
		);
		await user.type(
			screen.getByPlaceholderText(/melding/i),
			'Dette er en testmelding.',
		);

		await user.click(screen.getByRole('button', { name: /send melding/i }));

		await waitFor(() => {
			expect(
				screen.getByText(/meldingen ble sendt!/i),
			).toBeInTheDocument();
		});

		// Check if form fields are reset
		expect(screen.getByPlaceholderText(/navn/i).value).toBe('');
		expect(screen.getByPlaceholderText(/e-post/i).value).toBe('');
		expect(screen.getByPlaceholderText(/melding/i).value).toBe('');
	});

	test('shows an error message on submission failure', async () => {
		emailjs.sendForm.mockImplementation(() =>
			Promise.reject(new Error('Failed to send')),
		);
		const user = userEvent_default;
		renderWithProviders(<Contact />);

		await user.type(screen.getByPlaceholderText(/navn/i), 'Test Bruker');
		await user.type(
			screen.getByPlaceholderText(/e-post/i),
			'test@example.com',
		);
		await user.type(
			screen.getByPlaceholderText(/melding/i),
			'Dette er en testmelding.',
		);

		await user.click(screen.getByRole('button', { name: /send melding/i }));

		await waitFor(() => {
			expect(
				screen.getByText(
					/kunne ikke sende meldingen. vennligst prøv igjen./i,
				),
			).toBeInTheDocument();
		});

		// Form fields should not be reset on failure
		expect(screen.getByPlaceholderText(/navn/i).value).toBe('Test Bruker');
	});
});
