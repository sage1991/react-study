import React, { FC, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { BurgerBuilderWithPrice } from "./view/containers/burger/BurgerBuilderWithPrice";
import { Layout } from "./view/components/template/Layout";
import { ErrorBoundary } from "./core/hoc/error/ErrorBoundary";
import { Callback } from "./core/types/function/Callback";
import { lazyLoadComponent } from "./core/hoc/async/AsyncComponent";

const LazyCheckoutWithStore = lazyLoadComponent("CheckoutWithStore", () => import("./view/containers/checkout/CheckoutWithStore"));
const LazySignInWithStore = lazyLoadComponent("SignInWithStore", () => import("./view/containers/sign/SignInWithStore"));
const LazyLogoutWithStore = lazyLoadComponent("LogoutWithStore", () => import("./view/containers/sign/LogoutWithStore"));
const LazyOrder = lazyLoadComponent("Order", () => import("./view/page/order/Order"));


const App: FC<AppProps> = (props) => {

  const { tryAutoSignIn } = props;

  useEffect(() => {
    tryAutoSignIn();
  }, [ tryAutoSignIn ]);

  return (
    <ErrorBoundary fallbackProvider={() => <div>error!!!!!</div>}>
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilderWithPrice} />
          <Route path="/checkout" component={LazyCheckoutWithStore} />
          <Route path="/orders" component={LazyOrder} />
          <Route path="/sign" component={LazySignInWithStore} />
          <Route path="/logout" component={LazyLogoutWithStore} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </ErrorBoundary>
  );
}

interface AppProps {
  tryAutoSignIn: Callback;
}

export { App };
