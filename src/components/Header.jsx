import React from "react";
import logo from "../assets/sante-logo.png";
import JoinWaitListBtn from "./JoinWaitListBtn";

const Header = () => {
  return (
    <header className="w-full z-[2] bg-[#ffffff] shadow top-0 fixed">
      <main className="app-container">
        <div className="flex items-center justify-between">
          <div className="lg:w-[151px] w-[74px]">
            <img src={logo} alt="logo" />
          </div>
          <div className="">
            <JoinWaitListBtn/>
          </div>
        </div>
      </main>
    </header>
  );
};

export default Header;
