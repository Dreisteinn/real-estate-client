import React, { useState, useRef, useEffect } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import styles from '../Search.module.scss';
const Location = () => {
	const [locationInputValue, setLocationInputValue] = useState('');
	const [showLocation, setShowLocation] = useState(false);
	const [location, setLocation] = useState('');
	const locationRef = useRef();

	const handleSelect = (selectedLocation) => {
		setLocation(selectedLocation);
		setShowLocation(false);
		setLocationInputValue('');
	};
	useEffect(() => {
		locationRef.current.style.visibility = showLocation ? 'visible' : 'none';
		locationRef.current.style.opacity = showLocation ? '1' : '0';
		locationRef.current.style.zIndex = showLocation ? '7' : 'unset';
	}, [showLocation]);
	return (
		<div className={styles.InnerContainer}>
			<div className={styles.Filter} onClick={() => setShowLocation((prev) => !prev)}>
				<h4>მდებარეობა</h4>
				<div className={styles.Select}>
					<h4>{location || 'აირჩიეთ'}</h4>
					{showLocation ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
				</div>
			</div>
			<div className={styles.DropDownWrapper} ref={locationRef} onMouseLeave={() => setShowLocation(false)}>
				<span>მდებარეობა</span>
				<ul className={styles.Location}>
					<li onClick={(e) => handleSelect(e.target.innerText)}>თბილისი</li>
					<li onClick={(e) => handleSelect(e.target.innerText)}>ბათუმი</li>
					<li onClick={(e) => handleSelect(e.target.innerText)}>ქუთაისი</li>
					<li onClick={(e) => handleSelect(e.target.innerText)}>რუსთავი</li>
					<li onClick={(e) => handleSelect(e.target.innerText)}>გორი</li>
					<li onClick={(e) => handleSelect(e.target.innerText)}>ზუგდიდი</li>
					<li onClick={(e) => handleSelect(e.target.innerText)}>ფოთი</li>
					<li onClick={(e) => handleSelect(e.target.innerText)}>ხაშური</li>
					<li onClick={(e) => handleSelect(e.target.innerText)}>სამტრედია</li>
					<li onClick={(e) => handleSelect(e.target.innerText)}>სენაკი</li>
				</ul>
				<input
					placeholder='შეიტანეთ სახელი...'
					type='text'
					value={locationInputValue}
					onChange={(e) => setLocationInputValue(e.target.value)}
					onMouseLeave={(e) => handleSelect(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default Location;
