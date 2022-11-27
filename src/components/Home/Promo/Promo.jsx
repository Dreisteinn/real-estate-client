import React from 'react';
import styles from './Promo.module.scss';
import image from '../../../images/Content Image large.jpg';

const Promo = () => {
	return (
		<div className={styles.Wrapper}>
			<img src={image} alt='promo' />
			<div className={styles.TextContent}>
				<div className={styles.Line}></div>
				<h2>ჩვენთან საიმედო ხელში იქნებით!</h2>
				<p>
					ჩვენი გამოცდილი აგენტები ნებისმიერ დროს დაგეხმარებიან შეარჩიოთ თქვენს გემოვნებასა და მოთხოვნებზე
					მორგებული უძრავი ქონება. გააკეთეთ სწორი არჩევანი და მიეცით საშუალება პროფესიონალებს დაგეხმარონ.
				</p>
			</div>
		</div>
	);
};

export default Promo;
