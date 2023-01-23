import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      {props.card.available === 0 && (
        <div className="card--badge">SOLD OUT</div>
      )}
      <img
        src={`../images/${props.card.coverImg}`}
        alt="experience-img"
        className="card--image"
      />
      <p className="card--title">{props.card.title}</p>
      <p className="card--description">{props.card.description}</p>
      <hr />
      <div className="flex-grid">
        <div className="column">
          <p className="author">Author</p>
        </div>
        <div className="column">
          <p className="price">Price</p>
        </div>
      </div>
      <div className="flex-grid">
        <div className="column">
          <p>{props.card.author}</p>
        </div>
        <div className="column">
          <p className="card--price">${props.card.price}</p>
        </div>
      </div>
    </div>
  );
}
