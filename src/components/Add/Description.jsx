import React from 'react';
import { useNewPostCtx } from '../../store/newPostContextProvider';
import styles from './Add.module.scss';

const Description = () => {
	const { setProperty } = useNewPostCtx();
	return (
		<div className={styles.Description}>
			<h3>აღწერეთ უძრავი ქონება</h3>
			<textarea
				placeholder='შეიტანეთ ტექსტი...'
				onChange={(e) =>
					setProperty((prev) => {
						return { ...prev, description: e.target.value };
					})
				}
			></textarea>
		</div>
	);
};

export default Description;
