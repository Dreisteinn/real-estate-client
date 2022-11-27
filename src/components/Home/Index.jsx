import React from 'react';
import ForSale from './Listing/ForSale';
import Hero from './Hero';
import styles from './Home.module.scss';
import Search from './Search';
import Promo from './Promo/Promo';
import SecondPromo from './Promo/SecondPromo';
import ForRent from './Listing/ForRent';

const Home = () => {
	return (
		<div className={styles.HomeWrapper}>
			<div className={styles.HeroWrapper}>
				<Hero />
			</div>
			<Search />
			<Promo />
			<ForSale />
			<SecondPromo />
			<ForRent />
		</div>
	);
};

export default Home;
