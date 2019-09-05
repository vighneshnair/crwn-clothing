import React from "react";
import "./homepage.styles.scss";
import MenuItem from "../../components/menu-items/menu-items.component";
import Directory from "../../components/directory/directory.component";

const HomePage = () => (
  <div className="homepage">
    <Directory />
    <MenuItem />
  </div>
);

export default HomePage;
