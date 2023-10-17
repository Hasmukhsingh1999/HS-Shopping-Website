import React from "react";
import Left from "./NavbarDestructure/Left";
import Center from "./NavbarDestructure/Center";
import Right from "./NavbarDestructure/Right";

const Navbar = () => {
  return (
    <div className={`h-[60px] w-full flex items-center  justify-center cursor-pointer `}>
      <div
        className={`flex w-full justify-between  px-[9vw] items-center`}
      >
        <Left />
        <Center />
        <Right />
      </div>
    </div>
  );
};

export default Navbar;

