import React from 'react';
import styles from './ForSale.module.scss';
import Carousel from './Carousel';
const ForRent = () => {
	return (
		<div className={styles.Wrapper} style={{ paddingTop: '100px' }}>
			<h2>გასაქირავებელი უძრავი ქონება</h2>
			<p>იხილეთ ბოლოს დამატებული გასაქირავებელი უძრავი ქონება და მიიღეთ დაწვრილებითი ინფორმაცია თითოეულ მათგანზე</p>
			<div className={styles.Properties}>
				<Carousel />
			</div>
		</div>
	);
};

export default ForRent;
