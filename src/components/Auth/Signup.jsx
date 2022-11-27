import React, { useState } from 'react';
import styles from './Form.module.scss';
import { useNavigate } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { VscKey } from 'react-icons/vsc';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [comparablePassword, setComparablePassword] = useState('');
	const navigate = useNavigate();
	const handleLogin = (e) => {
		e.preventDefault();
	};

	return (
		<div className={styles.Wrapper}>
			<form>
				<h1>რეგისტრაცია</h1>
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
				<button onClick={(e) => handleLogin(e)}>რეგისტრაცია</button>
				<input type='button' value='შესვლა' className={styles.SignupBtn} onClick={() => navigate('/login')} />
			</form>
		</div>
	);
};

export default Signup;
