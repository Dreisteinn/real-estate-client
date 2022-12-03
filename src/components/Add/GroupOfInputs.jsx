import React from 'react';
import TextInput from './Reusable/TextInput';
import styles from './Add.module.scss';
import { useNewPostCtx } from '../../store/newPostContextProvider';
import { getFormattedNumber } from '../../helpers';

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
				placeholder='ზუსტი ფასი (₾) ან 0'
				setState={(e) =>
					setProperty((prev) => {
						return { ...prev, price: getFormattedNumber(e.target.value) };
					})
				}
			/>
			<TextInput
				placeholder='ფართობი (მ²)'
				setState={(e) =>
					setProperty((prev) => {
						return { ...prev, area: getFormattedNumber(e.target.value) };
					})
				}
			/>
		</div>
	);
};

export default GroupOfInputs;
