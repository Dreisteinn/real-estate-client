import React from 'react';
import AuthCtxProvider from './authContext';
import NewPostContextProvider from './newPostContextProvider';
import { PropertiesContextProvider } from './propertiesContext';
import FiltersCtxProvider from './filtersContext';

const ContextProviders = ({ children }) => {
	return (
		<PropertiesContextProvider>
			<AuthCtxProvider>
				<FiltersCtxProvider>
					<NewPostContextProvider>{children}</NewPostContextProvider>
				</FiltersCtxProvider>
			</AuthCtxProvider>
		</PropertiesContextProvider>
	);
};

export default ContextProviders;
