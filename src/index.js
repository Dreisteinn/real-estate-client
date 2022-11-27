import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global/index.scss';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ContextProviders from './store/ContextProviders';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ContextProviders>
			<BrowserRouter>
				<ScrollToTop />
				<App />
			</BrowserRouter>
		</ContextProviders>
	</React.StrictMode>
);
