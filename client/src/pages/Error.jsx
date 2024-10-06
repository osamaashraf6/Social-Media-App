import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <div>404</div>
      <div>Page Not Found</div>
      <Link to="/" replace={true}>
        Go back to home
      </Link>
    </>
  );
};

export default Error;
