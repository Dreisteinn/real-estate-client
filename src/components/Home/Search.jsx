import React from 'react';
import styles from './Search.module.scss';
import Deal from './Filters/Deal';
import Location from './Filters/Location';
import Price from './Filters/Price';
import PropertyType from './Filters/PropertyType';

const Search = () => {
	return (
		<div className={styles.Wrapper}>
			<Deal />
			<Location />
			<PropertyType />
			<Price />
		</div>
	);
};

export default Search;
