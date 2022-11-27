import React from 'react';
import styles from './Property.module.scss';

const Description = ({ description }) => {
	return (
		<div className={styles.Description}>
			<h3>აღწერა</h3>
			<p>{description}</p>
		</div>
	);
};

export default Description;
