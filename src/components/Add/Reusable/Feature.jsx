import React from 'react';

const Feature = (props) => {
	const { label, setState } = props;
	return (
		<li>
			<input type={'checkbox'} onChange={(e) => setState(e.target.checked)} />
			{label}
		</li>
	);
};

export default Feature;
