import React from 'react';
import styles from './UserMessages.module.scss';

const Message = (message) => {
	const { subject, text } = message.message;
	const { name, email, number } = message.message.from;

	return (
		<div className={styles.Message}>
			<div className={styles.Sender}>
				<h4>{name}</h4>
				<h4>{email}</h4>
				<h4>{number}</h4>
			</div>
			<h3>{subject}</h3>
			<p>{text}</p>
		</div>
	);
};

export default Message;
