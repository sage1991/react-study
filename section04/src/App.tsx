import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./core/store/Store";
import { BurgerBuilderWithPrice } from "./page/burgerBuilder/BurgerBuilderWithPrice";
import { Layout } from "./page/Layout";


const App: FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilderWithPrice} />
        </Switch>
      </Layout>
    </Provider>
  );
}

export default App;
