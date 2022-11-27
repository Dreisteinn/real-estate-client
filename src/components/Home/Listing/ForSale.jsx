import React from 'react';
import Card from './Card';
import styles from './ForSale.module.scss';
import Carousel from './Carousel';

const ForSale = () => {
	return (
		<div className={styles.Wrapper}>
			<h2>გასაყიდი უძრავი ქონება</h2>
			<p>იხილეთ ბოლოს დამატებული გასაყიდი უძრავი ქონება და მიიღეთ დაწვრილებითი ინფორმაცია თითოეულ მათგანზე</p>
			<div className={styles.Properties}>
				<Carousel />
			</div>
		</div>
	);
};

export default ForSale;
