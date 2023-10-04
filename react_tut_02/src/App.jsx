import React from "react";
import Card from "./Card";
import sData from "./Sdata";

function App() {
  return (
    <>
      <h1 className="headding_style">List of top 5 Netflix App in 2023</h1>
      <div className="cards">
        {sData.map((val, ind) => {
          return (
            <Card
              key={ind}
              imgSrc={val.imgSrc}
              title={val.title}
              category={val.category}
              link={val.link}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
