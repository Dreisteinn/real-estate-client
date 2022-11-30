import { useState } from 'react';
import { useAuthCtx } from '../store/authContext';

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const { dispatch } = useAuthCtx();

	const login = async (email, password) => {
		setLoading(true);
		setError(null);
		// const url = process.env.REACT_APP_API_URL;
		const url = 'http://localhost:3001';
		const response = await fetch(`${url}/api/user/login`, {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const json = await response.json();
		console.log(json);
		if (!response.ok) {
			setError(json.error);
			setLoading(false);
		}
		if (response.ok) {
			localStorage.setItem('user', JSON.stringify(json));
			dispatch({ type: 'LOGIN', payload: json });
			setLoading(false);
		}
	};
	return { login, loading, error };
};

export default useLogin;
