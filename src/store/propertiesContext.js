import { createContext, useContext, useState } from 'react';
import properties from '../data';
import { getResettedFilters } from '../helpers';

const PropertiesCtx = createContext();

export const PropertiesContextProvider = ({ children }) => {
	const initState = getResettedFilters();
	const [filters, setFilters] = useState(initState);
	return <PropertiesCtx.Provider value={{ properties, filters, setFilters }}>{children}</PropertiesCtx.Provider>;
};

const usePropertiesCtx = () => {
	return useContext(PropertiesCtx);
};

export default usePropertiesCtx;
