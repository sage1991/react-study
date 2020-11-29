import React, { FC, useState } from "react";


interface AuthContextState {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthContextState>({
  isAuth: false,
  login: () => {},
  logout: () => {}
});


export const AuthContextProvider: FC = props => {
  const [ isAuth, setAuth ] = useState<boolean>(false);
  const login = () => setAuth(true);
  const logout = () => setAuth(false);

  return (
    <AuthContext.Provider value={{ isAuth: isAuth, login: login, logout: logout }}>
      { props.children }
    </AuthContext.Provider>
  );
}