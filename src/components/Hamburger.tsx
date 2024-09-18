import React from "react";
import "./Hamburger.css";

// type PropsType = {
//   onClick: MouseEventHandler | undefined;
// };

const Hamburger = () => {
  return (
    <div className="hamburger-container">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-bar-container" htmlFor="menu-toggle">
        <div className="menu-bar"></div>
      </label>
    </div>
  );
};

export default Hamburger;
