import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle Component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    console.log("Use Effect");
    const intId = setInterval(() => {
      console.log("hello there");
    }, 1000);
    return () => {
      clearInterval(intId);
    };
  }, []);
  return <h1>Random Component</h1>;
};

export default CleanupFunction;
