import React, { useState } from "react";
import "./styles.css";
const App = () => {
  const [myword, setWord] = useState("Hello");
  const [word, setFinal] = useState(myword);
  const myText = (event) => {
    setWord(event.target.value);
  };
  const showWord = () => {
    setFinal("Namaste 🙏 " + myword + " Bhaiya");
  };
  return (
    <>
      <div>
        <h1>
          <br />
          {word}
        </h1>

        <input
          className="inp"
          type="text"
          onChange={myText}
          placeholder="Enter your name"
        />
        <br />
        <button onClick={showWord}> Submit</button>
      </div>
    </>
  );
};

export default App;
