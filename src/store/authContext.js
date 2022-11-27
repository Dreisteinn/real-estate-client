import { createContext, useState, useContext } from 'react';
const AuthCtx = createContext();

const AuthCtxProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	return <AuthCtx.Provider value={{ user }}>{children}</AuthCtx.Provider>;
};

export const useAuthCtx = () => useContext(AuthCtx);
export default AuthCtxProvider;
