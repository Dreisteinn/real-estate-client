import React from 'react';
import image from '../../../images/HeroBackground.jpg';
import { AiFillCar } from 'react-icons/ai';
import { FaBath } from 'react-icons/fa';
import { MdMeetingRoom } from 'react-icons/md';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom';

const Card = () => {
	const { price, img, address, bathroom, parking, room } = {
		price: '50',
		img: image,
		address: 'პეკინის გამზირი, საბურთალო, თბილისი',
		bathroom: 2,
		parking: 1,
		room: 3,
	};

	return (
		<Link to='/property'>
			<div className={styles.Wrapper}>
				<img src={img} alt='Property' />
				<h3>{address}</h3>
				<h4>{`${price}₾`}</h4>
				<ul className={styles.Details}>
					<li>
						<AiFillCar /> {parking}
					</li>
					<li>
						<FaBath /> {bathroom}
					</li>
					<li>
						<MdMeetingRoom /> {room}
					</li>
				</ul>
			</div>
		</Link>
	);
};

export default Card;
