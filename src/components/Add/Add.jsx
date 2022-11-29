import React, { useState } from 'react';
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
	const url = process.env.REACT_APP_API_URL;
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsResetted(false);
		try {
			const res = await fetch(`${url}/api/properties`, {
				method: 'POST',
				body: JSON.stringify(property),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			setProperty(initStateOfProperty);
			e.target.reset();
			setIsResetted(true);
			console.log(await res.json());
		} catch (e) {
			console.log(e.message);
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
			</form>
		</div>
	);
};

export default Add;
