import React from 'react';
import Card from '../Listing/Card';
import styles from './FilteredProperties.module.scss';
import usePropertiesCtx from '../../../store/propertiesContext';

const FilteredProperties = () => {
	const { properties, filters } = usePropertiesCtx();

	const filteredProperties = properties.filter(
		(property) =>
			property.transactionType.includes(filters.transactionType) &&
			property.propertyType.includes(filters.propertyType) &&
			(property.location.includes(filters.location) || property.address.includes(filters.location)) &&
			property.price >= filters.price.min &&
			property.price <= filters.price.max
	);
	return (
		<ul className={styles.Wrapper}>
			{filteredProperties.length > 0 ? (
				filteredProperties?.map((property, i) => <Card key={i} data={property} />)
			) : (
				<h2 style={messageStyles}>არაფერი მოიძებნა</h2>
			)}
		</ul>
	);
};

const messageStyles = { fontSize: '1.3rem', color: '#585858', textAlign: 'center', width: '90vw' };
export default FilteredProperties;
