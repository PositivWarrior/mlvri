import React, { memo } from 'react';

export const Tile = memo(({ icon: Icon, title, description }) => (
	<div className="bg-gray-100 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
		<div className="flex items-center space-x-4">
			<Icon className="w-14 h-14 text-gold" />
			<h3 className="text-xl font-semibold text-navy">{title}</h3>
		</div>
		<p className="text-gray-700 mt-4 flex-grow">{description}</p>
	</div>
));

export default Tile;
