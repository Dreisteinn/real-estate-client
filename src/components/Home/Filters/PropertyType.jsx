import React, { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import styles from '../Search.module.scss';
import usePropertiesCtx from '../../../store/propertiesContext';
import { useFiltersCtx } from '../../../store/filtersContext';

const PropertyType = () => {
	const [propertyType, setPropertyType] = useState('');
	const { setFilters } = usePropertiesCtx();
	const { activeFilter, setActiveFilter } = useFiltersCtx();

	const handleSelect = (selectedPropertyType) => {
		setPropertyType(selectedPropertyType);
		setActiveFilter(null);
		setFilters((prev) => {
			return { ...prev, propertyType: selectedPropertyType };
		});
	};

	return (
		<div className={styles.InnerContainer}>
			<div className={styles.Filter} onClick={() => setActiveFilter('realEstateType')}>
				<h4>უძრავი ქონების ტიპი</h4>
				<div className={styles.Select}>
					<h4>{propertyType || 'აირჩიეთ'}</h4>
					{activeFilter === 'realEstateType' ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
				</div>
			</div>
			{activeFilter === 'realEstateType' && (
				<div className={styles.DropDownWrapper} onMouseLeave={() => setActiveFilter(null)}>
					<span>უძრავი ქონების ტიპი</span>
					<ul className={styles.PropertyType}>
						<li onClick={(e) => handleSelect(e.target.innerText)}>ბინა</li>
						<li onClick={(e) => handleSelect(e.target.innerText)}>კერძო სახლი</li>
						<li onClick={(e) => handleSelect(e.target.innerText)}>კომერციული ფართი</li>
						<li onClick={(e) => handleSelect(e.target.innerText)}>სასტუმრო</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default PropertyType;
