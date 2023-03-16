import React from "react";
import MainHeader from "./MainHeader";
import Navbar from "./Navbar";
import Featured from "./Featured";

const Header = () => {
  return (
    <MainHeader>
      <Navbar />
      <Featured />
    </MainHeader>
  );
};

export default Header;
