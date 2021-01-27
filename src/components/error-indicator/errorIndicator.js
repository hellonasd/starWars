import React from "react";
import "./errorIndicator.css";
const ErrorIndicator = () => {
  return (
    <div className="error">
      <span className="error-boom">BOOOM!!</span>
      <span>Something went wrong</span>
      <span>we will try to fix it</span>
    </div>
  );
};

export default ErrorIndicator;
