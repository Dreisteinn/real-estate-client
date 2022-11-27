import React, { useState, useRef } from 'react';
import DropDown from './Reusable/DropDown';
import styles from './Add.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';

const locations = [
	'თბილისი',
	'ბათუმი',
	'ქუთაისი',
	'რუსთავი',
	'გორი',
	'ზუგდიდი',
	'ფოთი',
	'ხაშური',
	'სამტრედია',
	'სენაკი',
];

const Location = ({ setProperty }) => {
	const [location, setLocation] = useState('');
	const inputRef = useRef();
	const handleClick = (e) => {
		e.preventDefault();
		setLocation(inputRef.current.value);
	};
	return (
		<DropDown
			label='ადგილმდებარეობა'
			options={locations}
			setState={(value) =>
				setProperty((prev) => {
					return { ...prev, location: value };
				})
			}
			className={styles.Location}
			updatedSelectedValue={location}
		>
			<div className={styles.LocationInputWrapper}>
				<input type='text' placeholder='სახელი' className={styles.LocationInput} ref={inputRef} />
				<button type='submit' onClick={(e) => handleClick(e)}>
					<AiOutlineSearch />
				</button>
			</div>
		</DropDown>
	);
};

export default Location;
