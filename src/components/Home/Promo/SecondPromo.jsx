import React from 'react';
import styles from './Promo.module.scss';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const SecondPromo = () => {
	return (
		<div className={styles.SecondPromo}>
			<div className={styles.SecondLine}></div>
			<h2>შენ იმსახურებ ფინანსურ კეთილდღეობას!</h2>
			<p>
				უძრავი ქონების ფლობა ფინანსური კეთილდღეობის საწინდარია. თუ გსურთ ფულის დაბანდება, ამ სფეროში ინვესტირება
				ერთ-ერთი ყველაზე სწორი და ნაკლებად რისკიანი გადაწყვეტილება იქნება. გადახედეთ ჩვენს კატალოგს და საჭიროების
				შემთხვევაში დაიხმარეთ კვალიფიციური აგენტი.
			</p>
			<button>
				<Link to='/properties'>
					კატალოგი <HiArrowNarrowRight />
				</Link>
			</button>
		</div>
	);
};

export default SecondPromo;
