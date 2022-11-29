import { useAuthCtx } from '../store/authContext';

const useLogout = () => {
	const { dispatch } = useAuthCtx();
	const logout = () => {
		localStorage.removeItem('user');
		dispatch({ type: 'LOGOUT' });
	};
	return logout;
};

export default useLogout;
