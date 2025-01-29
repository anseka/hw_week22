import React, { useState, useEffect } from 'react';

const HeroCard = ({ hero }) => {
	const [rating, setRating] = useState(0);

	useEffect(() => {
		const savedRating = localStorage.getItem(hero.name);
		if (savedRating) {
			setRating(Number(savedRating));
		}
	}, [hero.name]);

	const handleRatingChange = (newRating) => {
		setRating(newRating);
		localStorage.setItem(hero.name, newRating);
	};

	const renderStars = () => {
		let stars = [];
		for (let i = 1; i <= 5; i++) {
			stars.push(
				<span
					key={i}
					className={`star ${i <= rating ? 'star-filled' : ''}`}
					onClick={() => handleRatingChange(i)}>
					★
				</span>
			);
		}
		return stars;
	};

	return (
		<div className='hero-card'>
			<h2>{hero.name}</h2>
			<img src={hero.url} alt={hero.name} className='hero-image' />
			<p>
				<strong>Альтер эго:</strong> {hero.alterego}
			</p>
			<p>
				<strong>Род занятий:</strong> {hero.occupation}
			</p>
			<p>
				<strong>Суперспособности:</strong> {hero.superpowers}
			</p>
			<p>{hero.info}</p>
			<div>
				<strong>Ваша оценка:</strong>
				{renderStars()}
			</div>
		</div>
	);
};

export default HeroCard;
