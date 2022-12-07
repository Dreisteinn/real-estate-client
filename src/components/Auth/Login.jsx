import React, { useState } from 'react';
import styles from './Form.module.scss';
import { FiMail } from 'react-icons/fi';
import { VscKey } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import { motion } from 'framer-motion';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const { login, loading, error } = useLogin();

	const handleLogin = async (e) => {
		e.preventDefault();
		await login(email, password);
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className={styles.Wrapper}
		>
			<form onSubmit={handleLogin}>
				<h1>შესვლა</h1>
				{error && <p className={styles.FormError}>{error}</p>}
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
				<button disabled={loading}>შესვლა</button>
				<input type='button' value='რეგისტრაცია' className={styles.SignupBtn} onClick={() => navigate('/signup')} />
			</form>
		</motion.div>
	);
};

export default Login;
