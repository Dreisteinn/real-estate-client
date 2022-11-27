import React, { useState } from 'react';
import styles from './Form.module.scss';
import { FiMail } from 'react-icons/fi';
import { VscKey } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const handleLogin = (e) => {
		e.preventDefault();
	};

	return (
		<div className={styles.Wrapper}>
			<form>
				<h1>შესვლა</h1>
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
				<button onClick={(e) => handleLogin(e)}>შესვლა</button>
				<input type='button' value='რეგისტრაცია' className={styles.SignupBtn} onClick={() => navigate('/signup')} />
			</form>
		</div>
	);
};

export default Login;
