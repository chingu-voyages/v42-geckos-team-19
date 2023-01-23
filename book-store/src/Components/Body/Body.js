import React from "react";
import Card from "../Card/Card.js";
import data from "../data/data.js";
import "./Body.css";

export default function Body() {
  const cards = data.map((card) => {
    return <Card key={card.id} card={card} />;
  });

  return (
    <div className="body">
      <div className="banner">
        LIMITED TIME OFFER - 50% OFF ALL BOOKS WITH SOFT COVERS{" "}
      </div>
      <div>
        <img src="../images/main-image.png" alt="books" className="cover" />
      </div>
      <section className="cards-list">{cards}</section>
    </div>
  );
}
