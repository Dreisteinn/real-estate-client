import React, { useState } from 'react';
import styles from './UserMessages.module.scss';
import { AiFillCaretDown } from 'react-icons/ai';

const Message = (message) => {
	const { subject, text, createdAt } = message.message;
	const { name, email, number } = message.message.from;
	const [showSenderDetails, setShowSenderDetails] = useState(false);

	const getDateAndtime = () => {
		const date = new Date(createdAt.substring(0, 10));
		const dateFormatted = date.toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' });
		const time = createdAt.substring(11, 16);
		return `(${time}) ${dateFormatted}`;
	};

	return (
		<div className={styles.Message}>
			<div className={styles.SenderWrapper}>
				<div className={styles.Sender}>
					გამომგზავნი
					<AiFillCaretDown onClick={() => setShowSenderDetails((prev) => !prev)} />
				</div>
				{showSenderDetails && (
					<div className={styles.Details}>
						<h4>
							<span>სახელი:</span> {name}
						</h4>
						<h4>
							<span>ელ-ფოსტა:</span> {email}
						</h4>
						<h4>
							<span>ტელ-ნომერი:</span> {number}
						</h4>
					</div>
				)}
			</div>
			<h3>{subject}</h3>
			<p className={styles.MessageText}>{text}</p>
			<p className={styles.MessageDate}>{getDateAndtime()}</p>
		</div>
	);
};

export default Message;
