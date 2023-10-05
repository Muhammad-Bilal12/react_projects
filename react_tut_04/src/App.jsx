import { useState } from "react";

function App() {
  let currentTime = new Date().toLocaleTimeString();
  const [currTime, setCurrTime] = useState(currentTime);
  const getTime = () => {
    currentTime = new Date().toLocaleTimeString();
    setCurrTime(currentTime);
  };

  setInterval(getTime, 1000);
  return (
    <>
      <h1>{currTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </>
  );
}

export default App;
