import React, { FC, useState, Suspense } from "react";
import "./Blog.css";
import { Route, Switch, Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import AsyncComponent from "../../hoc/AsyncComponent";

// lazy loading
const LazyPosts = React.lazy(() => import("./Posts/Posts"));

// lazy loading
const AsyncNewPost = AsyncComponent(() => {
  return import("./NewPost/NewPost");
});


const Blog: FC = () => {

  const [state] = useState({
    authenticated: true
  });

  return (
    <div className="Blog">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink 
                to="/posts" 
                exact 
                activeClassName="active" 
                activeStyle={{fontWeight: "bold", textDecoration: "underline"}}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: "/newpost",
                hash: "#submit",
                search: "?autosubmit=true"}}
                exact
              >
                New Post
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/posts" render={(props) => {
          console.log(props);
          return (
            <Suspense fallback={<div>loading...</div>}>
              <LazyPosts {...props} />
            </Suspense>
          );
        }} />
        {state.authenticated ? <Route path="/newpost" exact component={AsyncNewPost} /> : null}
        <Redirect from="/" to="/posts" exact />
        <Route render={() => <h1>404 not found</h1>} />
      </Switch>
    </div>
  );
}

export default Blog;
