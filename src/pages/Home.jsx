import React from "react";
import { useState } from "react";
import Pension from "../images/pension.png";
import PensionGold from "../images/pensionGold.png";
import Capitalization from "../images/capitalization.png";
import CapitalizationGold from "../images/capitalizationGold.png";
import Emergency from "../images/emergency.png";
import EmergencyGold from "../images/emergencyGold.png";
import HoldOut from "../images/holdout.png";
import HoldOutGold from "../images/holdoutGold.png";
import RCL from "../images/rcl.png";
import RCLGold from "../images/rclGold.png";
import RegularLoan from "../images/regular.png";
import RegularLoanGold from "../images/regularGold.png";
import City from "../images/city.jpg";

import Deal from "../images/deal.png";
import PisoPay from "../images/PisoPay_logoStandard_white.png";
import { Link } from "react-router-dom";

export default function Home() {
  const [imgPension, setImgPension] = useState(Pension);
  const [imgCapitalization, setImgCapitalization] = useState(Capitalization);
  const [imgEmergency, setImgEmergency] = useState(Emergency);
  const [imgHoldOut, setImgHoldOut] = useState(HoldOut);
  const [imgRCL, setImgRCL] = useState(RCL);
  const [imgRegularLoan, setImgRegularLoan] = useState(RegularLoan);

  const [count, setCount] = useState(5000);

  const increment = () => {
    if (count + 5000 <= 20000) {
      setCount(count + 5000);
    }
  };

  const decrement = () => {
    if (count - 5000 >= 5000) {
      setCount(count - 5000);
    }
  };

  return (
    <>
      <div className="container relative flex flex-col gap-2 p-4 text-center text-white rounded-lg shadow bg-primary">
        <h2 className="font-semibold">Credit Amount</h2>
        <div className="flex flex-row items-center justify-center gap-4">
          <button onClick={decrement}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 rounded sm:w-6 sm:h-6 bg-secondary"
            >
              <path
                fillRule="evenodd"
                d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <h1 className="text-xl font-bold sm:text-3xl">
            ₱ {count.toLocaleString()}
          </h1>
          <button onClick={increment}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 rounded sm:w-6 sm:h-6 bg-secondary"
            >
              <path
                fillRule="evenodd"
                d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <p className="flex flex-row justify-between font-thin text-3xs xs:text-xs sm:text-sm">
          <span>*Interest as low as 0.06%/day</span>
          <span>*Term 365 days</span>
        </p>
        <Link
          to="/apply-loan"
          className="self-center px-8 py-2 text-xs font-bold rounded-full bg-container hover:opacity-90 text-secondary w-fit hover:shadow-lg sm:text-lg"
        >
          Borrow Now
        </Link>
        <p className="text-xs font-thin sm:text-sm">
          Amount will increase by repeat borrowing
        </p>
      </div>

      <div className="container h-auto p-4 my-4 rounded-lg shadow bg-container">
        <div className="flex flex-row items-center justify-center gap-6 mb-4 text-primary">
          <img src={Deal} className="h-20" alt="deal" />
          <div>
            <h2 className="font-bold sm:text-lg">Our Products</h2>
            <p className="mt-1 text-3xs xs:text-2xs sm:text-sm font-base">
              Get to know more about our products
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-rows-2 grid-cols-2 w-full gap-4 text-center text-slate=600 mb-4">
        <div
          onMouseOver={() => setImgPension(PensionGold)}
          onMouseOut={() => setImgPension(Pension)}
          className={ProductContainer}
        >
          <img
            src={imgPension}
            className="pt-2 h-18 xs:h-22 2xs:pt-8"
            alt="Pension Loan"
          />

          <h2 className="pt-2 text-sm font-medium">GSIS/Pension Loan</h2>
        </div>
        <div
          onMouseOver={() => setImgEmergency(EmergencyGold)}
          onMouseOut={() => setImgEmergency(Emergency)}
          className={ProductContainer}
        >
          <img
            src={imgEmergency}
            className="pt-2 h-18 xs:h-22 2xs:pt-8"
            alt="Emergency"
          />

          <h2 className="pt-2 text-sm font-medium">Emergency Loan</h2>
        </div>
        <div
          onMouseOver={() => setImgRCL(RCLGold)}
          onMouseOut={() => setImgRCL(RCL)}
          className={ProductContainer}
        >
          <img src={imgRCL} className="pt-2 h-18 xs:h-22 2xs:pt-8" alt="RCL" />

          <h2 className="pt-2 text-sm font-medium">RCL Loan</h2>
        </div>
        <div
          onMouseOver={() => setImgRegularLoan(RegularLoanGold)}
          onMouseOut={() => setImgRegularLoan(RegularLoan)}
          className={ProductContainer}
        >
          <img
            src={imgRegularLoan}
            className="pt-2 h-18 xs:h-22 2xs:pt-8"
            alt="Regular Loan"
          />

          <h2 className="pt-2 text-sm font-medium">Regular Loan</h2>
        </div>
        <div
          onMouseOver={() => setImgCapitalization(CapitalizationGold)}
          onMouseOut={() => setImgCapitalization(Capitalization)}
          className={ProductContainer}
        >
          <img
            src={imgCapitalization}
            className="pt-2 h-18 xs:h-22 2xs:pt-8"
            alt="Capitalization"
          />

          <h2 className="pt-2 text-sm font-medium">Capitalization Loan</h2>
        </div>
        <div
          onMouseOver={() => setImgHoldOut(HoldOutGold)}
          onMouseOut={() => setImgHoldOut(HoldOut)}
          className={ProductContainer}
        >
          <img
            src={imgHoldOut}
            className="pt-2 h-18 xs:h-22 2xs:pt-8"
            alt="HoldOut"
          />

          <h2 className="pt-2 text-sm font-medium">Hold-out Loan</h2>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
        <button
          className="relative transition ease-in delay-75 rounded-lg hover:shadow-xl"
          // onClick={() => {
          //     setOpenAbout(true);
          // }}
        >
          <img
            src={City}
            className="object-cover w-full bg-no-repeat rounded h-36"
            alt="City"
          />
          <div className="absolute top-0 w-full h-full bg-black bg-opacity-20"></div>
          <p className="absolute text-lg font-bold -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-secondary">
            About Us
          </p>
        </button>
        <button className="relative transition ease-in delay-75 rounded-lg hover:shadow-xl">
          <img
            src={City}
            className="object-cover w-full bg-no-repeat rounded h-36"
            alt="City"
          />
          <div className="absolute top-0 w-full h-full bg-black bg-opacity-20"></div>
          <p className="absolute text-lg font-bold -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-secondary">
            Our Partners
          </p>
        </button>
      </div>

      <div className="flex flex-row items-center justify-center py-6 my-auto">
        <p className="mr-6 text-right text-secondary text-2xs">Powered by</p>
        <img src={PisoPay} className="h-8" alt="pisopay-logo"/>
      </div>
    </>
  );
}

const ProductContainer =
  "container shadow-lg relative flex flex-col rounded-lg hover:bg-gradient-to-t from-secondary to-primary transition ease-in delay-75 hover:text-white text-primary p-4 place-items-center bg-white";
