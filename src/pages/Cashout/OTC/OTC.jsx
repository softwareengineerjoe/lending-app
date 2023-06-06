import React from "react";
import LBC from "../../../images/lbc.png"
import Cebuana from "../../../images/cebuana.png"
import FamilyMart from "../../../images/familymart.png"
import SevenEleven from "../../../images/seveneleven.png"
import { Link } from "react-router-dom";

function OTC() {
    return (
        <div className="flex flex-col max-w-2xl mx-auto">
            <div className="mt-4 text-sm font-medium text-gray-600">
                <Link to="/cashout">Select Payment Method</Link> /{" "}
                <span className="text-gray-800">Over The Counter</span>{" "}
            </div>
            <div className="container w-full h-auto p-8 pb-4 my-6 bg-white rounded-lg shadow">
                <div className="pb-6 text-xl font-bold">
                    Over the Counter Stores
                </div>
                <div className="flex flex-col justify-center p-8 my-6 text-sm border rounded-lg bg-slate-200 border-secondary">
                    <p className="text-lg font-semibold text-center uppercase text-secondary">
                        cashout through any of the following partners
                    </p>
                    <p className="text-center text-secondary">
                        Visit any of our partners near you and inform the
                        cashier that you would like to cash out your loan.
                        Provide your account number and present a{" "}
                        <span className="text-primary">valid ID</span>
                    </p>
                </div>
                <div className="grid grid-flow-row grid-cols-1 gap-4 py-2 md:grid-cols-2 lg:grid-cols-4">
                    <div className={Container}>
                        <img src={LBC} className="h-10" alt="LBC"/>
                    </div>
                    <Link to="/cashout/otc/cebuana" className={Container}>
                        <img src={Cebuana} className="h-10" alt="Cebuana"/>
                    </Link>
                    <div className={Container}>
                        <img src={SevenEleven} className="h-10" alt="Seven Eleven"/>
                    </div>
                    <div className={Container}>
                        <img src={FamilyMart} className="h-10" alt="Family Mart"/>
                    </div>
                </div>
                <div className="flex flex-row justify-end gap-4 my-6">
                    <Link
                        to="/cashout"
                        className="px-8 py-2 text-xs border rounded bg-container text-primary hover:opacity-90 border-secondary"
                    >
                        Go back
                    </Link>
                </div>
            </div>
        </div>
    );
}

const Container = "gap-4 flex flex-col place-items-center w-full container border hover:border-primary hover:shadow-lg p-8 transition ease-in delay-200 hover:text-white cursor-pointer rounded-lg"

export default OTC;
