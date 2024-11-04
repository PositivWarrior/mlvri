import React, { useState } from 'react';

function Reviews() {
	const [reviews, setReviews] = useState([]);
	const [newReview, setNewReview] = useState('');

	const handleAddReview = () => {
		if (newReview.trim()) {
			setReviews([...reviews, newReview.trim()]);
			setNewReview('');
		}
	};

	return (
		<section id="reviews" className="text-center">
			<h2 className="text-2xl font-semibold mb-4 text-gold">Omtaler</h2>
			<div className="my-4">
				<textarea
					placeholder="Legg igjen din omtale"
					value={newReview}
					onChange={(e) => setNewReview(e.target.value)}
					className="w-full p-2 border border-gray-300 rounded-md resize-none mb-4 text-navy"
				/>
				<button
					onClick={handleAddReview}
					className="bg-gold-gradient text-navy py-2 px-4 rounded-md hover:bg-white-gradient"
				>
					Legg til omtale
				</button>
			</div>
			<div className="reviews-list mt-6 space-y-4">
				{reviews.length > 0 ? (
					reviews.map((review, index) => (
						<div
							key={index}
							className="bg-lightNavy p-4 rounded-md shadow-md text-white"
						>
							<p>{review}</p>
						</div>
					))
				) : (
					<p className="text-gray-500">
						Ingen omtaler. Bli den første til å legge igjen en
						omtale!
					</p>
				)}
			</div>
		</section>
	);
}

export default Reviews;
