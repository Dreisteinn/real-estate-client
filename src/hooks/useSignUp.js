import { useState } from 'react';
import { useAuthCtx } from '../store/authContext';

const useSignUp = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const { dispatch } = useAuthCtx();

	const signup = async (email, password, name, number) => {
		setLoading(true);
		setError(null);
		console.log(email, password, name, number);

		// const url = process.env.REACT_APP_API_URL;
		const url = 'http://localhost:3001';
		const response = await fetch(`${url}/api/user/signup`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password, name, number }),
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
	return { signup, loading, error };
};

export default useSignUp;
