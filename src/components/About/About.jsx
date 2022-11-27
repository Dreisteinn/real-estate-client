import React from 'react';
import styles from './About.module.scss';
import image from '../../images/Content Image large.jpg';

const About = () => {
	return (
		<div className={styles.Wrapper}>
			<div className={styles.InnerContainer}>
				<div className={styles.Info}>
					<h1>ჩვენს შესახებ</h1>
					<p>
						ჩვენი ვებსაიტი გაშვებულია 2019 წლიდან და იქიდან მოყოლებული უკვე რამდენიმე ასეული განცხადება განთავსდა
						უძრავი ქონების ობიექტებზე. ჩვენი მიზანი იყო შეგვექმნა კიდევ ერთი პლატფორმა, რაც უძრავი ქონებით
						დაინტერესებულ პირებს გაუმარტივებდა ძებნის პროცესს, ხოლო რეალტორებს გაყიდვას ან გაქირავებას. ამ გზით,
						ვცდილობთ ხელი შევუწყოთ საქართველოში უძრავი ქონების ბიზნესის განვითარებას.
					</p>
				</div>
				<img alt='people' src={image} />
			</div>
		</div>
	);
};

export default About;
