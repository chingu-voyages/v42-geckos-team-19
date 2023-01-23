import React from "react";
import "./Body.css";

export default function Body() {
  return (
    <div>
      <div className="banner">
        LIMITED TIME OFFER - 50% OFF ALL BOOKS WITH SOFT COVERS{" "}
      </div>
      <div>
        <img src="../images/main-image.png" alt="books" className="cover-img" />
      </div>
    </div>
  );
}
