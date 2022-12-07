import React from 'react';
import styles from './About.module.scss';
import image from '../../images/Content Image large.jpg';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className={styles.Wrapper}
		>
			<div className={styles.InnerContainer}>
				<motion.div
					initial={{ x: '-100%' }}
					animate={{ x: 0 }}
					transition={{ duration: 1, delay: '.2' }}
					className={styles.Info}
				>
					<h1>ჩვენს შესახებ</h1>
					<p>
						ჩვენი ვებსაიტი გაშვებულია 2019 წლიდან და იქიდან მოყოლებული უკვე რამდენიმე ასეული განცხადება განთავსდა
						უძრავი ქონების ობიექტებზე. ჩვენი მიზანი იყო შეგვექმნა კიდევ ერთი პლატფორმა, რაც უძრავი ქონებით
						დაინტერესებულ პირებს გაუმარტივებდა ძებნის პროცესს, ხოლო რეალტორებს გაყიდვას ან გაქირავებას. ამ გზით,
						ვცდილობთ ხელი შევუწყოთ საქართველოში უძრავი ქონების ბიზნესის განვითარებას.
					</p>
				</motion.div>
				<motion.img
					alt='people'
					src={image}
					initial={{ x: '100%' }}
					animate={{ x: 0 }}
					transition={{ duration: 0.8, delay: '.2' }}
				/>
			</div>
		</motion.div>
	);
};

export default About;
