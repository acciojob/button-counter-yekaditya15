import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const handelClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <p>Button clicked {count} times</p>
      <button onClick={handelClick}>Click me</button>
    </div>
  );
};

export default App;
