import React, { useState } from 'react';
import useFetchUserPosts from '../../hooks/useFetchUserPosts';
import { useAuthCtx } from '../../store/authContext';
import initStateOfProperty from '../../store/initStateOfProperty';
import { useNewPostCtx } from '../../store/newPostContextProvider';
import usePropertiesCtx from '../../store/propertiesContext';
import styles from './Add.module.scss';
import Description from './Description';
import Details from './Details';
import DropDowns from './DropDowns';
import Features from './Features';
import GroupOfInputs from './GroupOfInputs';
import Upload from './Upload';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Add = (e) => {
	const [isResetted, setIsResetted] = useState(false);
	const { property, setProperty } = useNewPostCtx();
	const [error, setError] = useState(null);
	const { user } = useAuthCtx().state;
	const { setProperties } = usePropertiesCtx();
	const { setPosts: setUserPosts } = useFetchUserPosts();
	const [shouldDisable, setShouldDisable] = useState(false);
	const navigate = useNavigate();
	const url = process.env.REACT_APP_API_URL;

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsResetted(false);
		setShouldDisable(true);

		if (user) {
			const modifiedProperty = { ...property, publisher: { name: user.name, number: user.number, id: user.id } };
			if (modifiedProperty.images < 1) {
				setError('აუცილებელია ატვირთოთ მინიმუმ ერთი სურათი!');
				return;
			}
			const res = await fetch(`${url}/api/properties`, {
				method: 'POST',
				body: JSON.stringify(modifiedProperty),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user.token}`,
				},
			});

			const resData = await res.json();
			if (res.ok) {
				setProperty(initStateOfProperty);
				setProperties((prev) => [...prev, resData]);
				setUserPosts((prev) => [...prev, resData]);
				e.target.reset();
				setIsResetted(true);
				navigate('/my-posts');
			} else {
				setError('დარწმუნდით რომ ყველა ველი შევსებული გაქვთ!');
				setShouldDisable(false);
			}
			console.log(resData);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className={styles.Wrapper}
		>
			<h2 style={{ marginBottom: '30px', textAlign: 'center', color: '#313131' }}>განცხადების დამატება</h2>
			<form onSubmit={(e) => handleSubmit(e)}>
				<DropDowns />
				<div className={styles.MainInfo}>
					<h3>ძირითადი დეტალები</h3>
					<GroupOfInputs />
				</div>
				<Details />
				<Upload resetted={isResetted} />
				<Description />
				<Features />
				<button type='submit' className={styles.SubmitButton} disabled={shouldDisable}>
					დამატება
				</button>
				{error && <p className={styles.FormError}>{error}</p>}
			</form>
		</motion.div>
	);
};

export default Add;
