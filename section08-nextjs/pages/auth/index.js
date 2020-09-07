import React from "react";
import Link from "next/link";
import Router from "next/router";
import User from "../../components/User";

const AuthIndexPage = (props) => {
  return (
    <div>
      <h1>Auth Page</h1>
      <p>
        Go to 
        <Link href="/"><a>Main</a></Link>
      </p>
      <button onClick={() => Router.push("/")}>Go to Main</button>
      <User name={props.name} age={props.age} />
    </div>
  );
}


AuthIndexPage.getInitialProps = (context) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "harry", age: 30 });
    }, 1000);
  });
}

export default AuthIndexPage;