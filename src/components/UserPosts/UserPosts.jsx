import React from 'react';
import { useAuthCtx } from '../../store/authContext';
import styles from './UserPosts.module.scss';
import { Navigate } from 'react-router-dom';
import { IoMdLogOut } from 'react-icons/io';
import { GrAddCircle } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import useLogout from '../../hooks/useLogout';
import useFetchUserPosts from '../../hooks/useFetchUserPosts';
import { motion } from 'framer-motion';
import Posts from './Posts';

const UserPosts = () => {
	const { user } = useAuthCtx().state;
	const logout = useLogout();
	const navigate = useNavigate();
	const { posts } = useFetchUserPosts();
	const data = posts;

	if (!user) {
		return <Navigate to='/login' />;
	} else {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				transition={{ duration: 1 }}
				animate={{ opacity: 1 }}
				className={styles.Wrapper}
			>
				<div className={styles.Heading}>
					<GrAddCircle onClick={() => navigate('/add')} />
					<h2>ჩემი განცხადებები</h2>
				</div>
				<button className={styles.LogoutButton} onClick={() => logout()}>
					გასვლა <IoMdLogOut />
				</button>
				<Posts data={data} />
			</motion.div>
		);
	}
};

export default UserPosts;
