import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // setCount(count + 1);
    console.log(count);
    setTimeout(() => {
      // setCount(count + 1);
      setCount((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <>
      <h2>{count}</h2>
      <button className="btn" onClick={handleClick}>
        Increment
      </button>
    </>
  );
};

export default UseStateGotcha;
