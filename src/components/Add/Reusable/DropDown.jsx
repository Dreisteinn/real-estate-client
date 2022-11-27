import React, { useState, useEffect } from 'react';
import styles from './Reusable.module.scss';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';

const DropDown = ({ children, label, options, setState, className, updatedSelectedValue }) => {
	const [showOptions, setShowOptions] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);

	useEffect(() => {
		if (updatedSelectedValue) {
			setSelectedOption(updatedSelectedValue);
		}
	}, [updatedSelectedValue]);

	const handleClick = (value) => {
		setSelectedOption(value);
		setState(value);
		setShowOptions(false);
	};

	return (
		<div className={[styles.DropDown, className].join(' ')}>
			<div className={styles.Label} onClick={() => setShowOptions((prev) => !prev)}>
				{selectedOption ? selectedOption : label} {showOptions ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
			</div>

			{showOptions && (
				<ul className={styles.Options}>
					{options.map((op, i) => (
						<li key={i} onClick={(e) => handleClick(e.target.innerText)}>
							{op}
						</li>
					))}
					{children}
				</ul>
			)}
		</div>
	);
};

export default DropDown;
