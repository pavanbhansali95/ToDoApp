import React, { useState } from 'react';

export const AuthContext = React.createContext({
    isLogin: false,
    login: () => {}
});
const AuthContextProvider = props => {
    const [isLogin, setIsLogin] = useState(false);
    const login = (value) => {
        setIsLogin(value);
    }
    return <AuthContext.Provider value = {{isLogin: isLogin,login: login}}>
        {props.children}
    </AuthContext.Provider>
};
export default AuthContextProvider;