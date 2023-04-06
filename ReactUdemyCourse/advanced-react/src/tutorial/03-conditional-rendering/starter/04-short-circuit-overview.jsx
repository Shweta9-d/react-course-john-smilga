import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("susan");
  return (
    <div>
      {/* if wont work inside jsx link below */}
      {/* {if(someCondition){return "wont work"}} */}
      <h4>Truthy || : {name || "hello world"}</h4>
      <h4>Falsy || : {text || "hello world"}</h4>
      <h4>Truthy && : {name && "hello world"}</h4>
      <h4>Falsy && : {text && "hello world"}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
