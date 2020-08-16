import React, { FC } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./core/store/Store";
import { BurgerBuilderWithPrice } from "./view/containers/burger/BurgerBuilderWithPrice";
import { Layout } from "./view/components/template/Layout";
import { ErrorBoundary } from "./core/hoc/error/ErrorBoundary";
import { Order } from "./view/page/order/Order";
import { CheckoutWithStore } from "./view/containers/checkout/CheckoutWithStore";
import { SignInWithStore } from "./view/containers/sign/SignInWithStore";
import { LogoutWithStore } from "./view/containers/sign/LogoutWithStore";

const App: FC = () => {
  return (
    <ErrorBoundary fallbackProvider={() => <div>error!!!!!</div>}>
      <Provider store={store}>
        <Layout>
          <Switch>
            <Route path="/" exact component={BurgerBuilderWithPrice} />
            <Route path="/checkout" component={CheckoutWithStore} />
            <Route path="/orders" component={Order} />
            <Route path="/sign" component={SignInWithStore} />
            <Route path="/logout" component={LogoutWithStore} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
