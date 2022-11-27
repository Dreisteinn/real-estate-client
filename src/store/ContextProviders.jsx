import React from 'react';
import AuthCtxProvider from './authContext';
import NewPostContextProvider from './newPostContextProvider';
import { PropertiesContextProvider } from './propertiesContext';

const ContextProviders = ({ children }) => {
	return (
		<PropertiesContextProvider>
			<AuthCtxProvider>
				<NewPostContextProvider>{children}</NewPostContextProvider>
			</AuthCtxProvider>
		</PropertiesContextProvider>
	);
};

export default ContextProviders;
