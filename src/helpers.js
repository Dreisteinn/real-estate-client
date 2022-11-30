export const getTitle = (location, transactionType, propertyType) => {
	const modifiedLocationName =
		location[location.length - 1] === 'ი' ? location.substring(0, location.length - 1) + 'ში' : location + 'ში';
	return `${transactionType} ${propertyType} ${modifiedLocationName}`;
};

export const getResettedFilters = (highestPrice) => {
	return {
		propertyType: '',
		transactionType: '',
		location: '',
		price: {
			min: 0,
			max: highestPrice,
		},
	};
};

export const getHighestPrice = (properties) => {
	return Math.max(...properties.map((property) => property.price));
};

export const getInitState = (filters, highestPrice) => {
	return (
		filters.propertyType === '' &&
		filters.transactionType === '' &&
		filters.location === '' &&
		filters.price.min === 0 &&
		filters.price.max === highestPrice
	);
};

export const getFullName = (fname, lname) => {
	const firstCharToUpperCase = (str) => {
		const f = str[0].toLocaleUpperCase();
		return `${f}${str.substring(1, str.length)}`;
	};
	if (fname && lname) {
		const regex = /[a-zA-Z]/;
		if (fname.match(regex) && lname.match(regex)) {
			return `${firstCharToUpperCase(fname)} ${firstCharToUpperCase(lname)}`;
		} else {
			return `${fname} ${lname}`;
		}
	}
};

export const getArrayFilledWithImages = (selectedImages) => {
	let arr = [];
	for (let i = 0; i < selectedImages.length; i++) {
		arr.push(selectedImages[i]);
	}

	return arr;
};
