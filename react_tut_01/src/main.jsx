import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

let currDate = new Date(2023, 5, 10, 21);
let currTime = currDate.getHours();

let greet = "";
const greetStyle = {};

if (currTime >= 1 && currTime < 12) {
  greet = "Morning";
  greetStyle.color = "green";
} else if (currTime >= 12 && currTime < 19) {
  greet = "Afternoon";
  greetStyle.color = "Orange";
} else {
  greet = "Night";
  greetStyle.color = "blue";
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <h1 className="heading">
      Hello Sir, <span style={greetStyle}>Good {greet}</span>
    </h1>
  </>
);
