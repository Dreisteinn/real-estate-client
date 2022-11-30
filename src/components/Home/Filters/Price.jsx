import React, { useState, useRef, useEffect } from 'react';

import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import styles from '../Search.module.scss';
import usePropertiesCtx from '../../../store/propertiesContext';
import { getHighestPrice } from '../../../helpers';

const Price = () => {
	const { properties } = usePropertiesCtx();
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(getHighestPrice(properties));
	const [showPrice, setShowPrice] = useState(false);
	const priceRef = useRef();
	const { setFilters } = usePropertiesCtx();

	useEffect(() => {
		priceRef.current.style.visibility = showPrice ? 'visible' : 'none';
		priceRef.current.style.opacity = showPrice ? '1' : '0';
		priceRef.current.style.zIndex = showPrice ? '7' : 'unset';
	}, [showPrice]);

	useEffect(() => {
		setFilters((prev) => {
			return {
				...prev,
				price: {
					min: minPrice,
					max: maxPrice,
				},
			};
		});
	}, [maxPrice, minPrice]); //eslint-disable-line react-hooks/exhaustive-deps

	const handleSettingMaxPrice = (input) => {
		const inputValue = parseInt(input.value);
		if (inputValue > 0 && inputValue > minPrice) {
			setMaxPrice(inputValue);
		} else {
			if (isNaN(inputValue)) {
				setMaxPrice('');
			} else {
				setMaxPrice(inputValue);
			}
		}
	};

	return (
		<div className={styles.InnerContainer}>
			<div className={styles.Filter} onClick={() => setShowPrice((prev) => !prev)}>
				<h4>ფასი</h4>
				<div className={styles.Select}>
					<h4>{`${minPrice || 0}₾ - ${maxPrice || 0}₾`}</h4>
					{showPrice ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
				</div>
			</div>
			<div className={styles.DropDownWrapper} ref={priceRef} onMouseLeave={() => setShowPrice(false)}>
				<span>ფასი</span>
				<div className={styles.MinMax}>
					<input
						type='text'
						placeholder='მინ.ფასი (₾)'
						value={minPrice}
						onChange={(e) => setMinPrice(parseInt(e.target.value) || 0)}
					/>
					<input
						type='text'
						placeholder='მაქს.ფასი (₾)'
						value={maxPrice}
						onChange={(e) => handleSettingMaxPrice(e.target)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Price;
