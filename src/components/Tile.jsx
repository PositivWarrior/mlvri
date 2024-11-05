import React from 'react';

function Tile({ icon: Icon, title, description }) {
	return (
		<div className="bg-gray-100 p-6 rounded-lg shadow-md">
			<div className="flex items-center space-x-4">
				<Icon className="w-14 h-14 text-gold" />
				<h3 className="text-xl font-semibold text-navy">{title}</h3>
			</div>
			<p className="text-gray-700 mt-4">{description}</p>
		</div>
	);
}

export default Tile;
