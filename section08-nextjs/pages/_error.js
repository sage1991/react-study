import React from "react";
import Link from "next/link";
import Router from "next/router";

const ErrorPage = (props) => {
  return (
    <div>
      <h1>Oops... something went wrong...</h1>
      <p>
        Try
        <Link href="/auth"><a>Go Back</a></Link>
      </p>
    </div>
  );
}

export default ErrorPage;