import React from 'react';
import { getTitle } from '../../../helpers';
import styles from './Property.module.scss';

const PropertyDetailsHeader = ({ data }) => {
	const { price, address, area, transactionType, propertyType, location } = data;
	const title = getTitle(location, transactionType, propertyType);
	return (
		<div className={styles.PropertyHeader}>
			<div className={styles.Title_Address}>
				<h2 className={styles.Title}>{title}</h2>
				<h4 className={styles.Address}>{address}</h4>
			</div>
			<div className={styles.Price_Area}>
				<h2 className={styles.Price}>{price ? `${price.toLocaleString()}₾` : 'ფასი ზუსტდება'}</h2>
				<h4 className={styles.Area}>
					{area}მ<sup>2</sup>
				</h4>
			</div>
		</div>
	);
};

export default PropertyDetailsHeader;
