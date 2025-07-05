import React from "react";

function Card({ title, author, description, image }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px", margin: "16px", maxWidth: "300px" }}>
      <img src={image} alt={title} style={{ width: "100%", borderRadius: "8px" }} />
      <h3>{title}</h3>
      <p>by {author}</p>
      <p>{description}</p>
    </div>
  );
}

export default Card;