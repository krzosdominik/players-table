import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider, QueryCache } from 'react-query';
import './index.css';
import App from './App';

const queryCache = new QueryCache();

const overrides = {
	queryCache,
	defaultOptions: {
		queries: {
			retry: 0,
			refetchOnWindowFocus: false
		}
	}
};

const queryClient = new QueryClient(overrides);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</React.StrictMode>
);
