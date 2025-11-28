import React from "react";
import { Spinner } from "react-bootstrap";

const LoaderComponent = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <Spinner animation="border" variant="danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default LoaderComponent;
