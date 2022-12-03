import React from 'react';
import { useAuthCtx } from '../../store/authContext';
import styles from './UserPosts.module.scss';
import { Navigate } from 'react-router-dom';
import { IoMdLogOut } from 'react-icons/io';
import { GrAddCircle } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import useLogout from '../../hooks/useLogout';
import Card from '../Home/Listing/Card';
import useFetchUserPosts from '../../hooks/useFetchUserPosts';

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
			<div className={styles.Wrapper}>
				<div className={styles.Heading}>
					<GrAddCircle onClick={() => navigate('/add')} />
					<h2>ჩემი განცხადებები</h2>
				</div>
				<button className={styles.LogoutButton} onClick={() => logout()}>
					გასვლა <IoMdLogOut />
				</button>
				<div className={styles.Posts}>
					{data.length < 1 && <h3>არაფერი მოიძებნა</h3>}
					<ul className={styles.Properties}>
						{data.map((post, i) => {
							return <Card key={i} data={post} />;
						})}
					</ul>
				</div>
			</div>
		);
	}
};

export default UserPosts;