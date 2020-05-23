import React, { FC } from "react";
import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import { Route, Redirect, Switch } from "react-router-dom";


const App: FC = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" component={BurgerBuilder} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
