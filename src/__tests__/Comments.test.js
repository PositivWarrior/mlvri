import React from 'react';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent_default from '@testing-library/user-event';
import { HelmetProvider } from 'react-helmet-async';
import Comments from '../components/Comments'; // Updated path
import { db } from '../firebaseConfig'; // Updated path

// Mock Firebase/Firestore
const mockAddDoc = jest.fn();
const mockOnSnapshot = jest.fn();

jest.mock('firebase/firestore', () => ({
	...jest.requireActual('firebase/firestore'), // Import and retain default exports
	collection: jest.fn(),
	addDoc: (...args) => mockAddDoc(...args),
	onSnapshot: (...args) => mockOnSnapshot(...args),
	query: jest.fn(),
	orderBy: jest.fn(),
}));

// Helper function to render with HelmetProvider
const renderWithProviders = (ui, options) => {
	return render(<HelmetProvider>{ui}</HelmetProvider>, options);
};

describe('Comments (Reviews) Component', () => {
	const user = userEvent_default;

	beforeEach(() => {
		jest.clearAllMocks();
		// Default mock for onSnapshot to return empty comments array
		// and an unsubscribe function
		mockOnSnapshot.mockImplementation((q, callback) => {
			callback({ docs: [] }); // Simulate empty initial state
			return jest.fn(); // Return a mock unsubscribe function
		});
	});

	test('renders the main heading and input fields', () => {
		renderWithProviders(<Comments />);
		expect(
			screen.getByRole('heading', { name: /Omtaler/i, level: 2 }),
		).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/Ditt navn/i)).toBeInTheDocument();
		expect(
			screen.getByPlaceholderText(/Legg igjen din omtale/i),
		).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: /Legg til omtale/i }),
		).toBeInTheDocument();
	});

	test('shows "no reviews" message when there are no comments', () => {
		renderWithProviders(<Comments />);
		expect(
			screen.getByText(
				/Ingen omtaler. Bli den første til å legge igjen en omtale!/i,
			),
		).toBeInTheDocument();
	});

	test('displays comments when they are loaded', async () => {
		const mockCommentsData = [
			{
				id: '1',
				author: 'Ola Nordmann',
				text: 'Super service!',
				rating: 5,
				createdAt: { seconds: Date.now() / 1000, nanoseconds: 0 },
			},
			{
				id: '2',
				author: 'Kari Jensen',
				text: 'Veldig fornøyd.',
				rating: 4,
				createdAt: {
					seconds: Date.now() / 1000 - 3600,
					nanoseconds: 0,
				},
			},
		];

		mockOnSnapshot.mockImplementation((q, callback) => {
			callback({
				docs: mockCommentsData.map((c) => ({
					id: c.id,
					data: () => c,
				})),
			});
			return jest.fn();
		});

		renderWithProviders(<Comments />);

		// Wait for the first comment to be fully rendered and check its content
		const comment1Item = await screen.findByTestId('comment-item-1');
		expect(
			within(comment1Item).getByText('Super service!'),
		).toBeInTheDocument();
		expect(
			within(comment1Item).getByText(/Ola Nordmann/i),
		).toBeInTheDocument();
		// Stars are rendered by the component's renderStars function. We check how many are 'text-gold'.
		// Assuming renderStars outputs <span>★</span> where filled ones have 'text-gold'
		expect(
			within(comment1Item).getAllByText('★', {
				selector: 'span.text-gold',
			}).length,
		).toBe(5);

		// Wait for the second comment to be fully rendered and check its content
		const comment2Item = await screen.findByTestId('comment-item-2');
		expect(
			within(comment2Item).getByText('Veldig fornøyd.'),
		).toBeInTheDocument();
		expect(
			within(comment2Item).getByText(/Kari Jensen/i),
		).toBeInTheDocument();
		expect(
			within(comment2Item).getAllByText('★', {
				selector: 'span.text-gold',
			}).length,
		).toBe(4);
	});

	test('allows adding a new comment', async () => {
		mockAddDoc.mockResolvedValue({ id: 'newComment123' });
		renderWithProviders(<Comments />);

		await user.type(
			screen.getByPlaceholderText(/Ditt navn/i),
			'Ny Anmelder',
		);
		await user.type(
			screen.getByPlaceholderText(/Legg igjen din omtale/i),
			'Fantastisk arbeid!',
		);

		// Click the 5th star for a 5-star rating using the new aria-label
		await user.click(screen.getByRole('button', { name: /Rate 5 stars/i }));

		await user.click(
			screen.getByRole('button', { name: /Legg til omtale/i }),
		);

		// Check addDoc was called
		await waitFor(() => {
			expect(mockAddDoc).toHaveBeenCalledTimes(1);
		});
		// Check the content of the call separately if needed, no longer in the same waitFor
		expect(mockAddDoc).toHaveBeenCalledWith(
			undefined, // This will be the collection ref from the mock
			expect.objectContaining({
				author: 'Ny Anmelder',
				text: 'Fantastisk arbeid!',
				rating: 5,
			}),
		);

		// Check if fields are reset
		// The value of controlled input fields should be reflected immediately or after state update.
		// If clearing is async due to state updates, waitFor might be needed for these specific assertions.
		await waitFor(() => {
			expect(screen.getByPlaceholderText(/Ditt navn/i).value).toBe('');
		});
		await waitFor(() => {
			expect(
				screen.getByPlaceholderText(/Legg igjen din omtale/i).value,
			).toBe('');
		});
		// Rating reset visual check: all stars should be gray, or the internal state should be 0.
		// For simplicity, we assume the input fields reset is the primary check here.
		// To check star reset: expect(screen.getAllByRole('button', { name: /Rate \d stars/i }).every(star => star.classList.contains('text-gray-300'))).toBe(true);
		// This would require more complex query if not all stars are buttons or easily identifiable when unselected.
	});
});
