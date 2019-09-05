import React from "react";
import "./menu-items.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <div className="title">{title}</div>
      <div className="subtitle">SHOP NOW</div>
    </div>
  </div>
);

export default MenuItem;
