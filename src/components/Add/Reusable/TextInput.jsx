import React from 'react';
import styles from './Reusable.module.scss';

const TextInput = ({ setState, placeholder }) => {
	return <input type='text' className={styles.TextInput} onChange={setState} placeholder={placeholder} />;
};

export default TextInput;
