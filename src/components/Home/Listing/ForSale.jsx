import React from 'react';
import styles from './ForSale.module.scss';
import Carousel from './Carousel';
import usePropertiesCtx from '../../../store/propertiesContext';

const ForSale = () => {
	const propertiesForSale = usePropertiesCtx().properties.filter((property) => property.transactionType === 'იყიდება');
	return (
		<div className={styles.Wrapper}>
			<h2>გასაყიდი უძრავი ქონება</h2>
			<p>იხილეთ ბოლოს დამატებული გასაყიდი უძრავი ქონება და მიიღეთ დაწვრილებითი ინფორმაცია თითოეულ მათგანზე</p>
			<div className={styles.Properties}>
				<Carousel properties={propertiesForSale} />
			</div>
		</div>
	);
};

export default ForSale;
