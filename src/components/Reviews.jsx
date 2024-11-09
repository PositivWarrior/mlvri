import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import {
	collection,
	addDoc,
	onSnapshot,
	orderBy,
	query,
} from 'firebase/firestore';

function Comments() {
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState('');
	const [author, setAuthor] = useState('');
	const [rating, setRating] = useState(0);

	const handleAddComment = async () => {
		if (newComment.trim() && author.trim()) {
			await addDoc(collection(db, 'comments'), {
				text: newComment.trim(),
				author: author.trim(),
				rating: rating, // zapisujemy ocenę
				createdAt: new Date(),
			});
			setNewComment('');
			setAuthor('');
			setRating(0); // resetujemy ocenę
		}
	};

	useEffect(() => {
		const q = query(
			collection(db, 'comments'),
			orderBy('createdAt', 'desc'),
		);
		const unsubscribe = onSnapshot(q, (snapshot) => {
			const commentsData = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setComments(commentsData);
		});

		return unsubscribe;
	}, []);

	// Funkcja renderująca gwiazdki na podstawie oceny
	const renderStars = (count) => {
		const stars = [];
		for (let i = 1; i <= 5; i++) {
			stars.push(
				<span
					key={i}
					className={i <= count ? 'text-gold' : 'text-gray-300'}
				>
					★
				</span>,
			);
		}
		return stars;
	};

	return (
		<section id="comments" className="text-center mb-10">
			<h2 className="text-3xl font-bold text-center text-gold mb-6 mt-6">
				Omtaler
			</h2>
			<div className="my-4 mx-auto max-w-2xl px-4">
				<input
					type="text"
					placeholder="Ditt navn"
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
					className="w-full p-2 border border-gray-300 rounded-md mb-4 text-navy"
				/>
				<textarea
					placeholder="Legg igjen din omtale"
					value={newComment}
					onChange={(e) => setNewComment(e.target.value)}
					className="w-full p-2 border border-gray-300 rounded-md resize-none mb-4 text-navy"
					rows="3"
				/>
				<div className="flex items-center justify-center space-x-2 mb-4">
					<span className="text-navy">Din vurdering:</span>
					<div className="flex space-x-1">
						{[1, 2, 3, 4, 5].map((num) => (
							<span
								key={num}
								onClick={() => setRating(num)}
								className={`cursor-pointer ${
									num <= rating
										? 'text-gold'
										: 'text-gray-300'
								}`}
							>
								★
							</span>
						))}
					</div>
				</div>
				<button
					onClick={handleAddComment}
					className="bg-gold-gradient text-navy py-2 px-4 rounded-md hover:bg-white-gradient"
				>
					Legg til omtale
				</button>
			</div>
			<div className="comments-list mt-6 space-y-4 max-w-2xl mx-auto px-4">
				{comments.length > 0 ? (
					comments.map((comment) => (
						<div
							key={comment.id}
							className="bg-lightNavy p-4 rounded-md shadow-md text-white"
						>
							<div className="text-left">
								<p className="text-sm text-gray-400">
									{comment.author} -{' '}
									{new Date(
										comment.createdAt.seconds * 1000,
									).toLocaleString()}
								</p>
								<p className="mt-1">{comment.text}</p>
								<div className="mt-2">
									{/* Wyświetlanie oceny w formie gwiazdek */}
									{renderStars(comment.rating)}
								</div>
							</div>
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

export default Comments;
