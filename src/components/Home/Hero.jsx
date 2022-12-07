import React from 'react';
import styles from './Hero.module.scss';
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<motion.div
			className={styles.Hero}
			transition={{ type: 'spring', stiffness: '40', delay: '.2', duration: 1 }}
			initial={{ x: '-100% ', opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
		>
			<h1>გსურს, შეიძინო შენთვის საოცნებო სახლი?</h1>
			<p>
				ჩვენ გაძლევთ შესაძლებლობას რომ ძალიან მარტივად, ზედმეტი ძალისხმევის გარეშე იპოვოთ თქვენს გემოვნებაზე
				მორგებული სახლი ან აპარტამენტი
			</p>
		</motion.div>
	);
};

export default Hero;
