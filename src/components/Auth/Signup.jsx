import React, { useState } from 'react';
import styles from './Form.module.scss';
import { useNavigate } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { VscKey } from 'react-icons/vsc';
import { TbLetterF, TbLetterL } from 'react-icons/tb';
import { getFullName } from '../../helpers';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [comparablePassword, setComparablePassword] = useState('');
	const [name, setName] = useState({ firstname: '', lastname: '' });
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	const handleSignUp = (e) => {
		e.preventDefault();
		const fullname = getFullName(name.firstname, name.lastname);
		if (comparablePassword && comparablePassword === password) {
			//do something
		} else {
			setError('პაროლები უნდა ემთხვეოდეს და იყოს შემდგარი მინიმუმ 6 სიმბოლოსგან!');
		}
	};

	return (
		<div className={styles.Wrapper}>
			<form onSubmit={handleSignUp}>
				<h1>რეგისტრაცია</h1>
				<div className={styles.NameWrapper}>
					<TbLetterF />
					<input
						type='text'
						value={name.firstname}
						required
						placeholder='სახელი'
						onChange={(e) => setName({ ...name, firstname: e.target.value })}
					/>
				</div>
				<div className={styles.NameWrapper}>
					<TbLetterL />
					<input
						type='text'
						value={name.lastname}
						required
						placeholder='გვარი'
						onChange={(e) => setName({ ...name, lastname: e.target.value })}
					/>
				</div>
				<div className={styles.EmailWrapper}>
					<FiMail />
					<input type='email' value={email} placeholder='ელ.ფოსტა' onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div className={styles.PasswordWrapper}>
					<VscKey />
					<input
						type='password'
						value={password}
						placeholder='პაროლი'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className={styles.PasswordWrapper}>
					<VscKey />
					<input
						type='password'
						value={comparablePassword}
						placeholder='გაიმეორეთ პაროლი'
						onChange={(e) => setComparablePassword(e.target.value)}
					/>
				</div>
				<button>რეგისტრაცია</button>
				<input type='button' value='შესვლა' className={styles.SignupBtn} onClick={() => navigate('/login')} />
				<p style={{ color: 'red', fontSize: 'calc(10px + .5vw)', maxWidth: '70%' }}>{error}</p>
			</form>
		</div>
	);
};

export default Signup;
