import React from "react";
import { Spinner } from "react-bootstrap";

const LoaderComponent = () => {
  return (
    <div class="spinner-grow text-danger" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );
};

export default LoaderComponent;
