import React from 'react';
import ForSale from './Listing/ForSale';
import Hero from './Hero';
import styles from './Home.module.scss';
import Search from './Search';
import Promo from './Promo/Promo';
import SecondPromo from './Promo/SecondPromo';
import ForRent from './Listing/ForRent';
import usePropertiesCtx from '../../store/propertiesContext';
import FilteredProperties from './Filters/FilteredProperties';
import { getHighestPrice, getInitState } from '../../helpers';

const Home = () => {
	const filters = usePropertiesCtx().filters;
	const { properties } = usePropertiesCtx();
	const highestPrice = getHighestPrice(properties);
	const initState = getInitState(filters, highestPrice);
	return (
		<div className={styles.HomeWrapper}>
			<div className={styles.HeroWrapper}>
				<Hero />
			</div>
			<Search />
			{initState ? (
				<>
					<Promo />
					<ForSale />
					<SecondPromo />
					<ForRent />
				</>
			) : (
				<FilteredProperties />
			)}
		</div>
	);
};

export default Home;
