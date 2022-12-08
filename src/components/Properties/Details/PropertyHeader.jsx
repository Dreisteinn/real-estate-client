import React from 'react';
import { getTitle } from '../../../helpers';
import { useAuthCtx } from '../../../store/authContext';
import styles from './Property.module.scss';
import { BsFillTrash2Fill } from 'react-icons/bs';
import usePropertiesCtx from '../../../store/propertiesContext';

const PropertyDetailsHeader = ({ data }) => {
	const { price, address, area, transactionType, propertyType, location, publisher_id } = data;
	const title = getTitle(location, transactionType, propertyType);
	const { user } = useAuthCtx().state;
	const { setProperties, properties } = usePropertiesCtx();

	const handleRemove = async () => {
		const confirmed = window.confirm('ნამდვილად გსურთ განცხადების აღება?');
		const url = process.env.REACT_APP_API_URL;
		if (confirmed) {
			await fetch(`${url}/api/properties/${data.id}`, {
				method: 'Delete',
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			});
			const updatedProperties = properties.filter((prop) => prop.id !== data.id);
			setProperties(updatedProperties);
		}
	};

	return (
		<div className={styles.PropertyHeader}>
			<div className={styles.PropertyDetails}>
				<div className={styles.Title_Address}>
					<h2 className={styles.Title}>{title}</h2>
					<h4 className={styles.Address}>{address}</h4>
				</div>
				<div className={styles.Price_Area}>
					<h2 className={styles.Price}>{price > 0 ? `${price.toLocaleString()}₾` : 'ფასი ზუსტდება'}</h2>
					<h4 className={styles.Area}>
						{area}მ<sup>2</sup>
					</h4>
				</div>
			</div>
			{publisher_id === user.id && (
				<button className={styles.Delete} onClick={() => handleRemove()}>
					წაშალე
					<BsFillTrash2Fill />
				</button>
			)}
		</div>
	);
};

export default PropertyDetailsHeader;
