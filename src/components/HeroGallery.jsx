import React, { useEffect, useState } from 'react';
import HeroCard from './HeroCard';

const HeroGallery = () => {
	const [heroes, setHeroes] = useState([]);

	useEffect(() => {
		fetch('/data.json')
			.then((response) => response.json())
			.then((data) => setHeroes(data));
	}, []);

	return (
		<div className='hero-gallery'>
			{heroes.map((hero) => (
				<HeroCard key={hero.name} hero={hero} />
			))}
		</div>
	);
};

export default HeroGallery;
