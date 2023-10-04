import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.imgSrc} alt="Movie Poster" className="card_img" />
      <div className="card_info">
        <h3 className="card_title">{props.title}</h3>
        <p className="card_category">{props.category}</p>
        <a href={props.link} target="_blank">
          <button>Watch Now</button>
        </a>
      </div>
    </div>
  );
}

export default Card;
