import React from 'react';
import DropDown from './Reusable/DropDown';
import { useNewPostCtx } from '../../store/newPostContextProvider';
import Location from './Location';
import styles from './Add.module.scss';

const DropDowns = () => {
	const { setProperty, property } = useNewPostCtx();
	const transactionTypes = ['იყიდება', 'ქირავდება', 'გირავდება', 'ქირავდება დღიურად'];
	const propertyTypes = ['ბინა', 'სახლი და აგარაკი', 'კომერციული ფართი', 'სასტუმრო'];
	console.log(property);
	return (
		<div className={styles.DropDownsContainer}>
			<DropDown
				label='გარიგების ტიპი'
				options={transactionTypes}
				setState={(value) =>
					setProperty((prev) => {
						return { ...prev, transactionType: value };
					})
				}
			/>
			<DropDown
				label='უძრავი ქონების ტიპი'
				options={propertyTypes}
				setState={(value) =>
					setProperty((prev) => {
						return { ...prev, propertyType: value };
					})
				}
			/>
			<Location setProperty={setProperty} />
		</div>
	);
};

export default DropDowns;
