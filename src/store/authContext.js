import { createContext, useReducer, useContext, useEffect } from 'react';
const AuthCtx = createContext();

const authReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return { user: action.payload };
		case 'LOGOUT':
			return { user: null };
		default:
			return state;
	}
};
const AuthCtxProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
	});
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user) {
			dispatch({ type: 'LOGIN', payload: user });
		}
	}, []);
	return <AuthCtx.Provider value={{ state, dispatch }}>{children}</AuthCtx.Provider>;
};

export const useAuthCtx = () => useContext(AuthCtx);
export default AuthCtxProvider;
