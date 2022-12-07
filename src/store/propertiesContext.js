import { createContext, useContext, useState, useEffect } from 'react';
// import properties from '../data';
import { getHighestPrice, getResettedFilters } from '../helpers';

const PropertiesCtx = createContext();

export const PropertiesContextProvider = ({ children }) => {
	const [properties, setProperties] = useState([]);
	const [loading, setLoading] = useState(false);
	const initState = getResettedFilters();
	const [filters, setFilters] = useState(initState);

	useEffect(() => {
		const getProperties = async () => {
			setLoading(true);
			const url = process.env.REACT_APP_API_URL;
			const response = await fetch(`${url}/api/properties`);
			const data = await response.json();
			setProperties(data);
			setFilters((prev) => {
				return { ...prev, price: { min: 0, max: getHighestPrice(data) } };
			});
			setLoading(false);
		};
		getProperties();
	}, []);

	return (
		<PropertiesCtx.Provider value={{ properties, setProperties, filters, setFilters, loading }}>
			{children}
		</PropertiesCtx.Provider>
	);
};

const usePropertiesCtx = () => {
	return useContext(PropertiesCtx);
};

export default usePropertiesCtx;
