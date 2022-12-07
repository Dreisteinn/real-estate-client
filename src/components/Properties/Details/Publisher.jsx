import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdPhoneAndroid } from 'react-icons/md';

const Publisher = ({ className, data }) => {
	return (
		<div className={className}>
			<h3>
				<BsFillPersonFill /> {data.name}
			</h3>
			<h4>
				<MdPhoneAndroid />
				{data.number}
			</h4>
		</div>
	);
};

export default Publisher;
