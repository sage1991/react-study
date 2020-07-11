import React, { FC } from "react";


const ErrorPage: FC<ErrorPageProps> = (props) => <h1>{ props.message }</h1>;

interface ErrorPageProps {
  message?: string;
}

export { ErrorPage };