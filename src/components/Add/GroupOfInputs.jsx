import React from 'react';
import TextInput from './Reusable/TextInput';
import styles from './Add.module.scss';
import { useNewPostCtx } from '../../store/newPostContextProvider';

const GroupOfInputs = () => {
	const { setProperty } = useNewPostCtx();

	return (
		<div className={styles.GroupOfInputs}>
			<TextInput
				placeholder='მისამართი...'
				setState={(e) =>
					setProperty((prev) => {
						return { ...prev, address: e.target.value };
					})
				}
			/>
			<TextInput
				placeholder='ფასი (₾)'
				setState={(e) =>
					setProperty((prev) => {
						return { ...prev, price: e.target.value };
					})
				}
			/>
			<TextInput
				placeholder='ფართობი (მ²)'
				setState={(e) =>
					setProperty((prev) => {
						return { ...prev, area: e.target.value };
					})
				}
			/>
		</div>
	);
};

export default GroupOfInputs;
