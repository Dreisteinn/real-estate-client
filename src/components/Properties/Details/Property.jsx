import React, { useState } from 'react';
import AdditionalImages from './AdditionalImages';
import Contact from './Contact';
import Description from './Description';
import Details from './Details';
import Features from './Features';
import styles from './Property.module.scss';
import PropertyDetailsHeader from './PropertyHeader';
import usePropertiesCtx from '../../../store/propertiesContext';
import { Navigate, useParams } from 'react-router-dom';

const Property = () => {
	const { id } = useParams();
	const property = usePropertiesCtx().properties.find((property) => property.id.toString() === id);
	const [mainImage, setMainImage] = useState(null);

	if (property) {
		const initMainImage = property.images[0];
		return (
			<div className={styles.Wrapper}>
				<PropertyDetailsHeader data={property} />
				<div className={styles.Main}>
					<div className={styles.Info}>
						<img src={mainImage || initMainImage} alt='property' className={styles.MainImage} />
						<AdditionalImages images={property.images} setMainImage={setMainImage} />
						<Details data={property} />
						<Description description={property.description} />
						<Features features={property.features} />
					</div>
					<Contact data={property} />
				</div>
			</div>
		);
	} else {
		return <Navigate to='/' />;
	}
};

export default Property;
