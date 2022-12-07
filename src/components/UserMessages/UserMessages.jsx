import React, { useEffect, useState } from 'react';
import styles from './UserMessages.module.scss';
import Message from './Message';
import { BeatLoader } from 'react-spinners';

const UserMessages = () => {
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(false);
	const { id, token } = JSON.parse(localStorage.getItem('user'));
	const url = process.env.REACT_APP_API_URL;

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			const res = await fetch(`${url}/api/user/messages`, {
				headers: {
					userid: id,
					Authorization: `Bearer ${token}`,
				},
			});
			setLoading(false);
			const fetchedMessages = await res.json();
			setMessages(fetchedMessages);
		};
		getMessages();
	}, []);

	return (
		<div className={styles.Wrapper}>
			<ul className={styles.Messages}>
				<h2>შეტყობინებები</h2>
				{loading && <BeatLoader size={10} color='#252850' loading={loading} />}
				{messages.map((message, i) => (
					<Message key={i} message={message} />
				))}
			</ul>
		</div>
	);
};

export default UserMessages;
