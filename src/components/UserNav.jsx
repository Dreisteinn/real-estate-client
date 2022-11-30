import React from 'react';
import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import useLogout from '../hooks/useLogout';

const UserNav = ({ setShowUserNav }) => {
	const navigate = useNavigate();
	const logout = useLogout();
	return (
		<div className={styles.UserNav} onMouseLeave={() => setShowUserNav(false)}>
			<button onClick={() => navigate('/my-posts')}>ჩემი განცხადებები</button>
			<button onClick={() => logout()}>გასვლა</button>
		</div>
	);
};

export default UserNav;
