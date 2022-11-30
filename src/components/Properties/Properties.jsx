import React from 'react';
import styles from './Properties.module.scss';
import Search from '../../components/Home/Search';
import Card from '../Home/Listing/Card';
import usePropertiesCtx from '../../store/propertiesContext';
import { getHighestPrice, getInitState } from '../../helpers';
import FilteredProperties from '../Home/Filters/FilteredProperties';

const Properties = () => {
	const { properties, filters } = usePropertiesCtx();
	const highestPrice = getHighestPrice(properties);
	const initState = getInitState(filters, highestPrice);

	return (
		<div className={styles.Wrapper}>
			<div className={styles.SearchWrapper}>
				<Search />
			</div>
			{initState ? (
				<ul className={styles.List}>
					{properties.map((property, i) => {
						return <Card data={property} key={i} />;
					})}
				</ul>
			) : (
				<FilteredProperties />
			)}
		</div>
	);
};

export default Properties;
