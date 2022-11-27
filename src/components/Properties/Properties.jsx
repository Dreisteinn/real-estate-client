import React from 'react';
import styles from './Properties.module.scss';
import Search from '../../components/Home/Search';
import Card from '../Home/Listing/Card';

const Properties = () => {
	const properties = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<div className={styles.Wrapper}>
			<div className={styles.SearchWrapper}>
				<Search />
			</div>
			<ul className={styles.List}>
				{properties.map((e, i) => {
					return <Card key={i} />;
				})}
			</ul>
		</div>
	);
};

export default Properties;
