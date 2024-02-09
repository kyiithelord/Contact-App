import React from "react";

const ErrorComponents = ({ children }) => {
  return (
    <div className="flex border shadow justify-center items-center space-x-2 text-red-600 my-2">
      <h1>{children}!</h1>
    </div>
  );
};

export default ErrorComponents;
