import React, { useState } from 'react';
import styles from './Form.module.scss';
import { useNavigate } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { VscKey } from 'react-icons/vsc';
import { TbLetterF, TbLetterL } from 'react-icons/tb';
import { BsTelephone } from 'react-icons/bs';
import { getFullName } from '../../helpers';
import useSignUp from '../../hooks/useSignUp';
import { motion } from 'framer-motion';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState({ firstname: '', lastname: '' });
	const [number, setNumber] = useState('');

	const { signup, loading, error } = useSignUp();
	const navigate = useNavigate();

	const handleSignUp = async (e) => {
		e.preventDefault();
		const fullname = getFullName(name.firstname, name.lastname);
		await signup(email, password, fullname, number);
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className={styles.Wrapper}
		>
			<form onSubmit={handleSignUp}>
				<h1>რეგისტრაცია</h1>
				{error && <p className={styles.FormError}>{error}</p>}
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
				<div className={styles.NumberWrapper}>
					<BsTelephone />
					<input type='text' value={number} placeholder='ტელ.ნომერი' onChange={(e) => setNumber(e.target.value)} />
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
				<button>რეგისტრაცია</button>
				<input
					type='button'
					value='შესვლა'
					className={styles.SignupBtn}
					onClick={() => navigate('/login')}
					disabled={loading}
				/>
			</form>
		</motion.div>
	);
};

export default Signup;
