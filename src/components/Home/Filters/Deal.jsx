import React, { useState, useRef, useEffect } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import styles from '../Search.module.scss';
import usePropertiesCtx from '../../../store/propertiesContext';
const Deal = () => {
	const [showDeals, setShowDeals] = useState(false);
	const [typeOfDeal, setTypeOfDeal] = useState('');
	const { setFilters } = usePropertiesCtx();
	const dealsRef = useRef();
	const handleSelect = (selectedType) => {
		setTypeOfDeal(selectedType);
		setShowDeals(false);
		setFilters((prev) => {
			return { ...prev, transactionType: selectedType };
		});
	};
	useEffect(() => {
		dealsRef.current.style.visibility = showDeals ? 'visible' : 'none';
		dealsRef.current.style.opacity = showDeals ? '1' : '0';
		dealsRef.current.style.zIndex = showDeals ? '7' : 'unset';
	}, [showDeals]);

	return (
		<div className={styles.InnerContainer}>
			<div className={styles.Filter}>
				<h4>გარიგების ტიპი</h4>
				<div className={styles.Select} onClick={() => setShowDeals((prev) => !prev)}>
					<h4>{typeOfDeal || 'აირჩიეთ'}</h4>
					{showDeals ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
				</div>
			</div>
			<div className={styles.DropDownWrapper} ref={dealsRef} onMouseLeave={() => setShowDeals(false)}>
				<span>გარიგების ტიპი</span>
				<ul className={styles.DealsList}>
					<li onClick={(e) => handleSelect(e.target.innerText)}>იყიდება</li>
					<li onClick={(e) => handleSelect(e.target.innerText)}>ქირავდება</li>
					<li onClick={(e) => handleSelect(e.target.innerText)}>გირავდება</li>
					<li onClick={(e) => handleSelect(e.target.innerText)}>ქირავდება დღიურად</li>
				</ul>
			</div>
		</div>
	);
};

export default Deal;
