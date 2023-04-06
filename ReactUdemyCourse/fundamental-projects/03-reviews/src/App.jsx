import { useState } from "react";
import people from "./data";
import "./App.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function App() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  // console.log(name);

  //Used % insted of checkNumber()
  // const checkNumber = (number) => {
  //   if (number > people.length - 1) {
  //     return 0;
  //   }
  //   if (number < 0) {
  //     return people.length - 1;
  //   }
  //   return number;
  // };

  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length;
      // if (newIndex > people.length - 1) {
      //   return 0;
      // }
      return newIndex;
    });
  };

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + people.length) % people.length;
      // if (newIndex < 0) {
      //   return people.length - 1;
      // }
      return newIndex;
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    const newIndex = randomNumber % people.length;
    setIndex(newIndex);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-containter">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
          <button className="btn btn-hipster" onClick={randomPerson}>
            suprise me
          </button>
        </div>
      </article>
    </main>
  );
}

export default App;