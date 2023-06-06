import React, { useState } from "react";
import A from "../../images/Vector1.png";
import AGold from "../../images/Vector1Gold.png";
import B from "../../images/otc.png";
import BGold from "../../images/otcGold.png";
import C from "../../images/Vector4.png";
import CGold from "../../images/Vector4Gold.png";
import { Link } from "react-router-dom";

const Cashout = () => {
  const [imgA, setImgA] = useState(A);
  const [imgB, setImgB] = useState(B);
  const [imgC, setImgC] = useState(C);
  return (
    <div className="flex flex-col max-w-2xl mx-auto">
      <div className="mt-4 text-sm font-medium text-gray-600">
        {/* Loan Application Status /{" "} */}
        <span className="text-gray-800">Select Payment Method</span>{" "}
      </div>
      <div className="container w-full h-auto p-8 pb-4 my-6 bg-white shadow">
        <div className="pb-6 text-xl font-bold">Select Payment Method</div>
        <div className="grid grid-flow-row grid-cols-1 gap-4 py-2 md:grid-cols-2 lg:grid-cols-3">
          <Link
            onMouseOver={() => setImgB(BGold)}
            onMouseOut={() => setImgB(B)}
            to="/cashout/otc"
            className={Container}
          >
            <img src={imgB} className="h-10" alt="OTC" />
            <h2 className="text-sm font-semibold text-center">
              Over The Counter
            </h2>
          </Link>
          <div
            onMouseOver={() => setImgA(AGold)}
            onMouseOut={() => setImgA(A)}
            className={Container}
          >
            <img src={imgA} className="h-10" alt="ATM" />
            <h2 className="text-sm font-semibold text-center">ATM / Bank</h2>
          </div>
          <div
            onMouseOver={() => setImgC(CGold)}
            onMouseOut={() => setImgC(C)}
            className={Container}
          >
            <img src={imgC} className="h-10" alt="emoney" />
            <h2 className="text-sm font-semibold text-center">
              eMoney / Mobile Wallet
            </h2>
          </div>
        </div>
        <div className="flex flex-row justify-end gap-4 my-6">
          <Link
            to="/transactions"
            className="px-8 py-2 text-xs border rounded bg-container text-primary hover:opacity-90 border-secondary"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

const Container = "gap-4 flex flex-col place-items-center w-full container border border-primary p-8 hover:bg-gradient-to-t from-secondary to-primary transition ease-in delay-75 hover:text-white cursor-pointer rounded-lg"

export default Cashout;
