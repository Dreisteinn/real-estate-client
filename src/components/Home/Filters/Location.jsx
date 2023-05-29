import React, { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import styles from '../Search.module.scss';
import usePropertiesCtx from '../../../store/propertiesContext';
import { useFiltersCtx } from '../../../store/filtersContext';

const Location = () => {
	const [locationInputValue, setLocationInputValue] = useState('');
	const [location, setLocation] = useState('');
	const { setFilters } = usePropertiesCtx();
	const { activeFilter, setActiveFilter } = useFiltersCtx();

	const handleSelect = (selectedLocation) => {
		setLocation(selectedLocation);
		setActiveFilter(null);
		setLocationInputValue('');
		setFilters((prev) => {
			return { ...prev, location: selectedLocation };
		});
	};

	return (
		<div className={styles.InnerContainer}>
			<div className={styles.Filter} onClick={() => setActiveFilter('location')}>
				<h4>მდებარეობა</h4>
				<div className={styles.Select}>
					<h4>{location || 'აირჩიეთ'}</h4>
					{activeFilter === 'location' ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
				</div>
			</div>
			{activeFilter === 'location' && (
				<div className={styles.DropDownWrapper} onMouseLeave={() => setActiveFilter(null)}>
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
			)}
		</div>
	);
};

export default Location;
