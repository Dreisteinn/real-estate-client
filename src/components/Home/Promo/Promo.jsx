import React from 'react';
import styles from './Promo.module.scss';
import image from '../../../images/Content Image large.jpg';
import { motion } from 'framer-motion';

const Promo = () => {
	return (
		<div className={styles.Wrapper}>
			<motion.img
				initial={{ x: '-100%' }}
				animate={{ x: 0 }}
				transition={{ duration: 1, delay: '.5' }}
				src={image}
				alt='promo'
			/>
			<motion.div
				initial={{ x: '100%' }}
				animate={{ x: 0 }}
				transition={{ duration: 1, delay: '.5' }}
				className={styles.TextContent}
			>
				<div className={styles.Line}></div>
				<h2>ჩვენთან საიმედო ხელში იქნებით!</h2>
				<p>
					ჩვენი გამოცდილი აგენტები ნებისმიერ დროს დაგეხმარებიან შეარჩიოთ თქვენს გემოვნებასა და მოთხოვნებზე
					მორგებული უძრავი ქონება. გააკეთეთ სწორი არჩევანი და მიეცით საშუალება პროფესიონალებს დაგეხმარონ.
				</p>
			</motion.div>
		</div>
	);
};

export default Promo;
