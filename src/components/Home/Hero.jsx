import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
	return (
		<div className={styles.Hero}>
			<h1>გსურს, შეიძინო შენთვის საოცნებო სახლი?</h1>
			<p>
				ჩვენ გაძლევთ შესაძლებლობას რომ ძალიან მარტივად, ზედმეტი ძალისხმევის გარეშე იპოვოთ თქვენს გემოვნებაზე
				მორგებული სახლი ან აპარტამენტი
			</p>
		</div>
	);
};

export default Hero;
