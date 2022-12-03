import { createContext, useContext, useState, useEffect } from 'react';
// import properties from '../data';
import { getHighestPrice, getResettedFilters } from '../helpers';

const PropertiesCtx = createContext();

export const PropertiesContextProvider = ({ children }) => {
	const [properties, setProperties] = useState([]);
	const initState = getResettedFilters(getHighestPrice(properties));
	const [filters, setFilters] = useState(initState);

	useEffect(() => {
		const getProperties = async () => {
			const url = process.env.REACT_APP_API_URL;
			const response = await fetch(`${url}/api/properties`);
			const data = await response.json();
			setProperties(data);
		};
		getProperties();
	}, []);

	return (
		<PropertiesCtx.Provider value={{ properties, setProperties, filters, setFilters }}>
			{children}
		</PropertiesCtx.Provider>
	);
};

const usePropertiesCtx = () => {
	return useContext(PropertiesCtx);
};

export default usePropertiesCtx;
