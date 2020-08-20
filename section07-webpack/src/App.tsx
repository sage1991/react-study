import * as React from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import { loadComponent } from "./views/hoc/loadComponent";
import { Pizza } from "./views/containers/Pizza";
import { Users } from "./views/containers/Users";

const AsyncPizza = loadComponent(Pizza.name, () => { return import("./views/containers/Pizza") });
const AsyncUsers = loadComponent(Users.name, () => { return import("./views/containers/Users") });


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <Link to="/">Users</Link> | <Link to="/pizza">pizza</Link>
          </div>
          <div>
            <Route path="/" exact component={AsyncUsers} />
            <Route path="/pizza" exact component={AsyncPizza} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}


export { App };