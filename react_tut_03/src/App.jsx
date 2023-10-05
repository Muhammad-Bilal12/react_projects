import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function incNum() {
    setCount(count + 1);
  }
  function deccNum() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Count is 0");
    }
  }

  return (
    <>
      <div className="box">
        <h1>Counter App</h1>
        <h1 className="count">{count}</h1>
        <div>
          <button onClick={incNum}>Increment</button>
          <button onClick={deccNum}>Deccrement</button>
        </div>
      </div>
    </>
  );
};

export default App;
