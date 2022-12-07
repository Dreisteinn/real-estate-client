import React, { useEffect, useState } from 'react';
import styles from './UserMessages.module.scss';
import Message from './Message';
import { BeatLoader } from 'react-spinners';
import { motion } from 'framer-motion';

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
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className={styles.Wrapper}
		>
			<ul className={styles.Messages}>
				<h2>შეტყობინებები</h2>
				{loading && <BeatLoader size={10} color='#252850' loading={loading} />}
				{messages.length > 0 && messages.map((message, i) => <Message key={i} message={message} />)}
			</ul>
		</motion.div>
	);
};

export default UserMessages;
