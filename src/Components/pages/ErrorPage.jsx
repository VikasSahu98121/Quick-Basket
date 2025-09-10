import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
      <h1 className="display-1 text-danger fw-bold">404</h1>
      <h2 className="mb-3">Oops! Page Not Found</h2>
      <p className="text-muted mb-4">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-danger px-4 py-2">
        Go Back Home
      </Link>
    </div>
  );
};
