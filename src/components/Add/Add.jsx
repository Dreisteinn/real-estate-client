import React, { useState } from 'react';
import { useAuthCtx } from '../../store/authContext';
import initStateOfProperty from '../../store/initStateOfProperty';
import { useNewPostCtx } from '../../store/newPostContextProvider';
import styles from './Add.module.scss';
import Description from './Description';
import Details from './Details';
import DropDowns from './DropDowns';
import Features from './Features';
import GroupOfInputs from './GroupOfInputs';
import Upload from './Upload';

const Add = (e) => {
	const [isResetted, setIsResetted] = useState(false);
	const { property, setProperty } = useNewPostCtx();
	const [error, setError] = useState(null);
	// const url = process.env.REACT_APP_API_URL;
	const url = 'http://localhost:3001';
	const { user } = useAuthCtx().state;
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsResetted(false);
		if (user) {
			const modifiedProperty = { ...property, publisher: { name: user.name, number: user.number, id: user.id } };

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
				e.target.reset();
				setIsResetted(true);
			} else {
				setError('დარწმუნდით რომ ყველა ველი შევსებული გაქვთ!');
				console.log(resData.error);
			}

			console.log(resData);
		}
	};

	return (
		<div className={styles.Wrapper}>
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
				<button type='submit' className={styles.SubmitButton}>
					დამატება
				</button>
				{error && <p className={styles.FormError}>{error}</p>}
			</form>
		</div>
	);
};

export default Add;
