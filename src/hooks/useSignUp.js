import { useState } from 'react';
import { useAuthCtx } from '../store/authContext';

const useSignUp = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const { dispatch } = useAuthCtx();

	const signup = async (email, password, name) => {
		setLoading(true);
		setError(null);

		const url = process.env.REACT_APP_API_URL;
		const response = await fetch(`${url}/api/user/signup`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password, name }),
		});
		const json = await response.json();
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
