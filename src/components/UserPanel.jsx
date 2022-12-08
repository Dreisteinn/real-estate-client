import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthCtx } from '../store/authContext';
import styles from './Header.module.scss';
import { BiMessageDetail } from 'react-icons/bi';
import { RiUser3Fill } from 'react-icons/ri';

const UserPanel = ({ setShowNav }) => {
	const { user } = useAuthCtx().state;
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/login');
		setShowNav(false);
	};

	if (user) {
		return (
			<div className={styles.UserPanel}>
				<button
					className={styles.LoginButton}
					onClick={() => {
						setShowNav(false);
						navigate('/my-posts');
					}}
				>
					<RiUser3Fill /> {user.name}
				</button>
				<BiMessageDetail
					onClick={() => {
						setShowNav(false);
						navigate('/messages');
					}}
				/>
			</div>
		);
	} else {
		return (
			<button className={styles.LoginButton} onClick={handleClick}>
				შესვლა
			</button>
		);
	}
};

export default UserPanel;
