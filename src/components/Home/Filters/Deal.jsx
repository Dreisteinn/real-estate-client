import React, { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import styles from '../Search.module.scss';
import usePropertiesCtx from '../../../store/propertiesContext';
import { useFiltersCtx } from '../../../store/filtersContext';
const Deal = () => {
	const [typeOfDeal, setTypeOfDeal] = useState('');
	const { setFilters } = usePropertiesCtx();
	const { activeFilter, setActiveFilter } = useFiltersCtx();

	const handleSelect = (selectedType) => {
		setTypeOfDeal(selectedType);
		setActiveFilter(null);
		setFilters((prev) => {
			return { ...prev, transactionType: selectedType };
		});
	};

	return (
		<div className={styles.InnerContainer}>
			<div className={styles.Filter}>
				<h4>გარიგების ტიპი</h4>
				<div className={styles.Select} onClick={() => setActiveFilter('deal')}>
					<h4>{typeOfDeal || 'აირჩიეთ'}</h4>
					{activeFilter === 'deal' ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
				</div>
			</div>

			{activeFilter === 'deal' && (
				<div className={styles.DropDownWrapper} onMouseLeave={() => setActiveFilter(null)}>
					<span>გარიგების ტიპი</span>
					<ul className={styles.DealsList}>
						<li onClick={(e) => handleSelect(e.target.innerText)}>იყიდება</li>
						<li onClick={(e) => handleSelect(e.target.innerText)}>ქირავდება</li>
						<li onClick={(e) => handleSelect(e.target.innerText)}>გირავდება</li>
						<li onClick={(e) => handleSelect(e.target.innerText)}>ქირავდება დღიურად</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default Deal;
