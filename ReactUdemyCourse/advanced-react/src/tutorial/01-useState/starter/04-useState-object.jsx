import { useState } from "react";

const UseStateObject = () => {
  // const [name, setName] = useState("peter");
  // const [age, setAge] = useState(24);
  // const [hobby, setHobby] = useState("travelling");

  const [person, setPerson] = useState({
    name: "ally",
    age: 65,
    hobby: "reading",
  });

  const displayPerson = () => {
    // setName("John");
    // setAge(30);
    // setHobby("Hiking");
    setPerson({
      name: "John",
      age: 30,
      hobby: "Hiking",
    });
  };

  return (
    <>
      {/* <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>Enjoys : {hobby}</h3>
      <button onClick={displayPerson} className="btn">
        Show John
      </button> */}
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys : {person.hobby}</h3>
      <button onClick={displayPerson} className="btn">
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
