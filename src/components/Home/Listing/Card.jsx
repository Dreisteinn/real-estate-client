import React from 'react';
import { AiFillCar } from 'react-icons/ai';
import { FaBath } from 'react-icons/fa';
import { MdMeetingRoom } from 'react-icons/md';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom';
import { getTitle } from '../../../helpers';

const Card = ({ data }) => {
	const { price, location, transactionType, propertyType } = data;
	const posterImage = data.images[0];
	const { bathroom, parking, room } = data.details;
	const title = getTitle(location, transactionType, propertyType);

	return (
		<Link to={`/properties/${data.id}`}>
			<div className={styles.Wrapper}>
				<img src={posterImage} alt='Property' />
				<h3>{title}</h3>
				<h4>{price > 0 ? `${price.toLocaleString()}₾` : 'ფასი ზუსტდება'}</h4>
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
