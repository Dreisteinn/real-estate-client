import React from 'react';
import { useNewPostCtx } from '../../store/newPostContextProvider';
import styles from './Add.module.scss';
import TextInput from './Reusable/TextInput';

const Details = () => {
	const { property, setProperty } = useNewPostCtx();
	return (
		<div className={styles.DetailsOutterWrapper}>
			<h3>სხვა დეტალები (რაოდენობა)</h3>
			<div className={styles.Details}>
				<TextInput
					placeholder='პარკირების ადგილი...'
					setState={(e) =>
						setProperty((prev) => {
							return { ...prev, details: { ...prev.details, parking: e.target.value } };
						})
					}
				/>

				<TextInput
					type='text'
					setState={(e) =>
						setProperty((prev) => {
							return { ...prev, details: { ...prev.details, room: e.target.value } };
						})
					}
					placeholder='ოთახი...'
				/>

				<TextInput
					type='text'
					setState={(e) =>
						setProperty((prev) => {
							return { ...prev, details: { ...prev.details, bathroom: e.target.value } };
						})
					}
					placeholder='სველი წერტილი...'
				/>

				<TextInput
					type='text'
					setState={(e) =>
						setProperty((prev) => {
							return { ...prev, details: { ...prev.details, garage: e.target.value } };
						})
					}
					placeholder='ავტოფარეხი...'
				/>
			</div>
		</div>
	);
};

export default Details;
