import React, { FC, useContext } from 'react';
import { Ingredients } from './components/ingredients/Ingredients';
import { Auth } from "./components/auth";
import { AuthContext } from "./context/auth-context";

const App: FC = () => {
  const authContext = useContext(AuthContext);

  if (authContext.isAuth) return <Ingredients/>;
  return <Auth />;
};

export default App;
