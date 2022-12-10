export const getTitle = (location, transactionType, propertyType) => {
	const modifiedLocationName =
		location[location.length - 1] === 'ი' ? location.substring(0, location.length - 1) + 'ში' : location + 'ში';
	return `${transactionType} ${propertyType} ${modifiedLocationName}`;
};

export const getResettedFilters = (maxPrice) => {
	return {
		propertyType: '',
		transactionType: '',
		location: '',
		price: {
			min: 0,
			max: maxPrice,
		},
	};
};

export const getHighestPrice = (properties) => {
	return Math.max(...properties.map((property) => property.price));
};

export const getInitState = (filters, maxPrice) => {
	return (
		filters.propertyType === '' &&
		filters.transactionType === '' &&
		filters.location === '' &&
		filters.price.min === 0 &&
		filters.price.max === maxPrice
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

export const getFormattedNumber = (num) => {
	const str = String(num).replaceAll(' ', '');
	const parsed = parseInt(str);
	return parsed;
};

export const getFormattedDate = (timestamp) => {
	const date = new Date(timestamp.substring(0, 10));
	const dateFormatted = date.toLocaleString('ka-GE', { day: 'numeric', month: 'long', year: 'numeric' });
	return dateFormatted;
};
