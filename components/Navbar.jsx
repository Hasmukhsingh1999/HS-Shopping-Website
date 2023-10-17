import React from "react";
import Left from "./NavbarDestructure/Left";
import Center from "./NavbarDestructure/Center";
import Right from "./NavbarDestructure/Right";

const Navbar = () => {
  return (
    <div className={`h-[60px] w-full flex items-center cursor-pointer`}>
      <div
        className={`py-[10px] px-[20px] w-full flex  items-center justify-between`}
      >
        <Left />
        <Center />
        <Right />
      </div>
    </div>
  );
};

export default Navbar;
