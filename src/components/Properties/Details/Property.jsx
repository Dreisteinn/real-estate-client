import React from 'react';
import AdditionalImages from './AdditionalImages';
import Contact from './Contact';
import Description from './Description';
import Details from './Details';
import Features from './Features';
import styles from './Property.module.scss';
import PropertyDetailsHeader from './PropertyHeader';

const Property = () => {
	return (
		<div className={styles.Wrapper}>
			<PropertyDetailsHeader />
			<div className={styles.Main}>
				<div className={styles.Info}>
					<img
						src='https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
						alt='property'
						className={styles.MainImage}
					/>
					<AdditionalImages />
					<Details />
					<Description />
					<Features />
				</div>
				<Contact />
			</div>
		</div>
	);
};

export default Property;
