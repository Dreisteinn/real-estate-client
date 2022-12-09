import React, { useState } from 'react';
import { useAuthCtx } from '../../store/authContext';
import styles from './UserMessages.module.scss';
import { BeatLoader } from 'react-spinners';

const Reply = ({ senderId, setShowTextArea, subject }) => {
	const [text, setText] = useState('');
	const [loading, setLoading] = useState(false);
	const { token, email, number, name, id } = useAuthCtx().state.user;
	const subjectText = subject.startsWith('პასუხი') ? subject : `პასუხი თემაზე - "${subject}"`;

	const handleSubmit = async (e) => {
		e.preventDefault();
		const url = process.env.REACT_APP_API_URL;
		setLoading(true);
		const resp = await fetch(`${url}/api/user/messages`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				text,
				from: {
					email,
					number,
					id,
					name,
				},
				subject: subjectText,
				to: senderId,
			}),
		});
		console.log(await resp.json());
		setLoading(false);
		setShowTextArea(false);
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)} className={styles.ReplyForm}>
			{loading ? (
				<BeatLoader size={10} color='#252850' loading={loading} />
			) : (
				<>
					<textarea
						placeholder='შეტყობინება...'
						required
						onChange={(e) => setText(e.target.value.toString().trim())}
					/>
					<button type='submit'>გაგზავნა</button>
				</>
			)}
		</form>
	);
};

export default Reply;
