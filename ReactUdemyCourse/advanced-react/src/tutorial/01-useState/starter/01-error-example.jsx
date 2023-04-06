import { useState } from "react";

/**
 * When you update a local variable in a React component, React doesn't know that the variable has changed.
 * This is because local variables are not part of the component's state, and React only updates the component when the state changes.
 * To update the state in a React component, you can use the useState hook.
 */
const ErrorExample = () => {
  let count = 0;
  const handleClick = () => {
    count = count + 1;
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick} className="btn">
        Increment
      </button>
    </div>
  );
};

export default ErrorExample;
