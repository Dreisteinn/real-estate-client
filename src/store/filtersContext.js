import { createContext, useState, useContext } from 'react';

const FiltersCtx = createContext();

const FiltersCtxProvider = ({ children }) => {
	const [activeFilter, setActiveFilter] = useState(null);
	return <FiltersCtx.Provider value={{ activeFilter, setActiveFilter }}>{children}</FiltersCtx.Provider>;
};
export const useFiltersCtx = () => useContext(FiltersCtx);

export default FiltersCtxProvider;
