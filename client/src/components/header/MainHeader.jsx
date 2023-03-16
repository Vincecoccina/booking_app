import React from "react";

const MainHeader = (props) => {
  return (
    <header>
      <nav>{props.children}</nav>
    </header>
  );
};

export default MainHeader;
