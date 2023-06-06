import React from "react";
import World from "../images/world.svg"
import SecLogo from "../images/sec-logo.png"

export default function SidePanelL() {
  return (
    <>
      <div className="w-60 lg:flex flex-col gap-2 hidden mr-10">
        <h2 className="text-lg text-secondary font-bold text-justify">
          We are globally recognized to be SAFE and SECURED
        </h2>
        <img src={World} alt="World"/>
        <h2 className="text-sm text-secondary text-justify">
          Invite your friend to use PERA MPC&trade; and receive a{" "}
          <span className="text-lg text-primary font-bold">₱200</span> coupon!{" "}
          <a href="/" className="text-primary underline">
            See how
          </a>
        </h2>
        <div className="py-6 flex flex-row items-center justify-center">
          <p className="text-secondary text-2xs w-1/3">
            This application is regulated by
          </p>
          <img src={SecLogo} className="h-18" alt="SEC"/>
        </div>
      </div>
    </>
  );
}
