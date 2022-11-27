import React, { useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import initStateOfProperty from './initStateOfProperty';
const NewPostCtx = createContext();

const NewPostContextProvider = ({ children }) => {
	const [property, setProperty] = useState(initStateOfProperty);
	return <NewPostCtx.Provider value={{ property, setProperty }}>{children}</NewPostCtx.Provider>;
};
export const useNewPostCtx = () => {
	return useContext(NewPostCtx);
};
export default NewPostContextProvider;
