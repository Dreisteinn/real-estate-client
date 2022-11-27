import React from 'react';
import styles from './Property.module.scss';

const PropertyDetailsHeader = () => {
	const { price, title, address, pricePerSquareMeter } = {
		price: Number(450000).toLocaleString(),
		title: 'იყიდება აპარტამენტი ახალ კორსპუსში',
		address: 'რუსთაველის გამზირი, ბათუმი. (ბულვართან)',
		pricePerSquareMeter: '2,800',
	};

	return (
		<div className={styles.PropertyHeader}>
			<div className={styles.Title_Address}>
				<h2 className={styles.Title}>{title}</h2>
				<h4 className={styles.Address}>{address}</h4>
			</div>
			<div className={styles.Price_PricePerSquareMeter}>
				<h2 className={styles.Price}>{`${price}₾`}</h2>
				<h4 className={styles.PricePerSquareMeter}>
					{`${pricePerSquareMeter}₾`}/კმ<sup>2</sup>
				</h4>
			</div>
		</div>
	);
};

export default PropertyDetailsHeader;
