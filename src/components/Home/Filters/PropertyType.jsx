import React, { useState, useRef, useEffect } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import styles from '../Search.module.scss';
import usePropertiesCtx from '../../../store/propertiesContext';

const PropertyType = () => {
	const [showPropertyType, setShowPropertyType] = useState(false);
	const [propertyType, setPropertyType] = useState('');
	const propertyTypeRef = useRef();
	const { setFilters } = usePropertiesCtx();
	const handleSelect = (selectedPropertyType) => {
		setPropertyType(selectedPropertyType);
		setShowPropertyType(false);
		setFilters((prev) => {
			return { ...prev, propertyType: selectedPropertyType };
		});
	};
	useEffect(() => {
		propertyTypeRef.current.style.visibility = showPropertyType ? 'visible' : 'none';
		propertyTypeRef.current.style.opacity = showPropertyType ? '1' : '0';
		propertyTypeRef.current.style.zIndex = showPropertyType ? '7' : 'unset';
	}, [showPropertyType]);
	return (
		<div className={styles.InnerContainer}>
			<div className={styles.Filter} onClick={() => setShowPropertyType((prev) => !prev)}>
				<h4>უძრავი ქონების ტიპი</h4>
				<div className={styles.Select}>
					<h4>{propertyType || 'აირჩიეთ'}</h4>
					{showPropertyType ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
				</div>
			</div>
			<div className={styles.DropDownWrapper} ref={propertyTypeRef} onMouseLeave={() => setShowPropertyType(false)}>
				<span>უძრავი ქონების ტიპი</span>
				<ul className={styles.PropertyType}>
					<li onClick={(e) => handleSelect(e.target.innerText)}>ბინა</li>
					<li onClick={(e) => handleSelect(e.target.innerText)}>სახლი და აგარაკი</li>
					<li onClick={(e) => handleSelect(e.target.innerText)}>კომერციული ფართი</li>
					<li onClick={(e) => handleSelect(e.target.innerText)}>სასტუმრო</li>
				</ul>
			</div>
		</div>
	);
};

export default PropertyType;
