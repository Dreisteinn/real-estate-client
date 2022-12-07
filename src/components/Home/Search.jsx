import React from 'react';
import styles from './Search.module.scss';
import Deal from './Filters/Deal';
import Location from './Filters/Location';
import Price from './Filters/Price';
import PropertyType from './Filters/PropertyType';
import { AnimatePresence, motion } from 'framer-motion';

const Search = () => {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ y: '200%' }}
				animate={{ y: '-50%' }}
				transition={{ duration: 1, type: 'just' }}
				className={styles.Wrapper}
			>
				<Deal />
				<Location />
				<PropertyType />
				<Price />
			</motion.div>
		</AnimatePresence>
	);
};

export default Search;
