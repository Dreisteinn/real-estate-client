import React, { useRef, useState } from 'react';
import styles from './Property.module.scss';
import { useAuthCtx } from '../../../store/authContext';
import { useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import Publisher from './Publisher';

const Contact = ({ data }) => {
	const [errorMessage, setErrorMessage] = useState(null);
	const [loading, setLoading] = useState(false);
	const { user } = useAuthCtx().state;
	const navigate = useNavigate();
	const textAreaRef = useRef();
	const subjectRef = useRef();

	const handleSend = async (event) => {
		const form = event.target;
		event.preventDefault();

		if (!user) {
			navigate('/login');
			return;
		}

		setErrorMessage(null);
		const text = textAreaRef.current.value;
		const subject = subjectRef.current.value;
		const { email, number, name, id } = user;
		const url = process.env.REACT_APP_API_URL;
		const message = {
			text,
			subject,
			from: {
				email,
				number,
				name,
				id,
			},
			to: data.publisher_id,
		};

		if (text && subject) {
			setLoading(true);
			const res = await fetch(`${url}/api/user/messages`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user.token}`,
				},
				body: JSON.stringify(message),
			});
			setLoading(false);
			if (!res.ok) {
				setErrorMessage(res.json().message);
			}
			form.reset();
			console.log(await res.json());
		} else {
			setErrorMessage('ყველა ველი უნდა იყოს შევსებული');
		}
	};

	return (
		<div className={styles.ContactToPublisher}>
			<Publisher data={data.publisher} className={styles.Publisher} />
			{loading && <BeatLoader size={10} color='#252850' loading={loading} />}
			{errorMessage && <p style={{ padding: '5px 15px', fontWeight: '600', color: ' red' }}>{errorMessage}</p>}
			<form onSubmit={(e) => handleSend(e)}>
				<input ref={subjectRef} required className={styles.Subject} placeholder='თემა'></input>
				<textarea ref={textAreaRef} required className={styles.SenderMessage} placeholder='შეტყობინება'></textarea>
				<button type='submit' onClick={() => handleSend()}>
					გაგზავნა
				</button>
			</form>
		</div>
	);
};

export default Contact;
