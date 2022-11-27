import React from 'react';
import styles from './ForSale.module.scss';
import Carousel from './Carousel';
import usePropertiesCtx from '../../../store/propertiesContext';
const ForRent = () => {
	const propertiesForRent = usePropertiesCtx().properties.filter(
		(property) => property.transactionType === 'ქირავდება'
	);
	return (
		<div className={styles.Wrapper} style={{ paddingTop: '100px' }}>
			<h2>გასაქირავებელი უძრავი ქონება</h2>
			<p>იხილეთ ბოლოს დამატებული გასაქირავებელი უძრავი ქონება და მიიღეთ დაწვრილებითი ინფორმაცია თითოეულ მათგანზე</p>
			<div className={styles.Properties}>
				<Carousel properties={propertiesForRent} />
			</div>
		</div>
	);
};

export default ForRent;
