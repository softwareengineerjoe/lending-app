import React from "react";
import CebuanaLogo from "../../../../images/cebuana.png"
import Step1 from "../../../../images/Step1.svg"
import Step2 from "../../../../images/Step2.svg"
import Step3 from "../../../../images/Step3.svg"
import Step4 from "../../../../images/Step4.svg"
import { Link } from "react-router-dom";

function Cebuana() {
    
    function done() {
        alert("You have successfully cashed out via Cebuana Lhuillhier!")
    }

    return (
        <div className="flex flex-col max-w-2xl mx-auto">
            <div className="container w-full h-auto p-8 pb-4 my-6 bg-white shadow">
                <div className="flex flex-col justify-center gap-1 mb-6 text-center">
                    <div className="self-center my-6 h-18">
                        <img src={CebuanaLogo} alt="Cebuana logo"/>
                    </div>
                    <p>
                        Account No:{" "}
                        <span className="font-bold">534213039198</span>
                    </p>
                    <p>
                        Reference No:{" "}
                        <span className="font-bold">534213039198</span>
                    </p>
                    <div className="w-full my-8 border"></div>
                    <h2 className="text-xl font-bold uppercase">
                        how to cashout via cebuana lhuillier
                    </h2>
                    <p>( At any branch of these official partners )</p>
                </div>
                <div className="grid grid-flow-row gap-4 py-2 grir-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="container flex flex-col justify-center h-full gap-4 mb-auto font-semibold text-center border shadow bg-container">
                        <h3 className="px-8 pt-4 pb-2">
                            Step{" "}
                            <span className="inline-flex justify-center w-6 text-white rounded-full bg-primary">
                                1
                            </span>
                        </h3>
                        <img src={Step1} className="mx-auto my-auto w-18 h-18" alt="step 1"/>
                        <p className="w-10/12 pb-4 mx-auto font-normal">
                            Inform the cashier that you would like to Cash Out
                            your loan.
                        </p>
                    </div>
                    <div className="container flex flex-col justify-center h-full gap-4 mb-auto font-semibold text-center border shadow bg-container">
                        <h3 className="px-8 pt-4 pb-2">
                            Step{" "}
                            <span className="inline-flex justify-center w-6 text-white rounded-full bg-primary">
                                2
                            </span>
                        </h3>
                        <img src={Step2} className="mx-auto my-auto w-18 h-18" alt="step 2"/>
                        <p className="w-10/12 pb-4 mx-auto font-normal">
                            Inform the cashier that you would like to Cash Out
                            your loan.
                        </p>
                    </div>
                    <div className="container flex flex-col justify-center h-full gap-4 mb-auto font-semibold text-center border shadow bg-container">
                        <h3 className="px-8 pt-4 pb-2">
                            Step{" "}
                            <span className="inline-flex justify-center w-6 text-white rounded-full bg-primary">
                                3
                            </span>
                        </h3>
                        <img src={Step3} className="mx-auto my-auto w-18 h-18" alt="step 3"/>
                        <p className="w-10/12 pb-4 mx-auto font-normal">
                            Inform the cashier that you would like to Cash Out
                            your loan.
                        </p>
                    </div>
                    <div className="container flex flex-col justify-center h-full gap-4 mb-auto font-semibold text-center border shadow bg-container">
                        <h3 className="px-8 pt-4 pb-2">
                            Step{" "}
                            <span className="inline-flex justify-center w-6 text-white rounded-full bg-primary">
                                4
                            </span>
                        </h3>
                        <img src={Step4} className="mx-auto my-auto w-18 h-18" alt="step 4"/>
                        <p className="w-10/12 pb-4 mx-auto font-normal">
                            Inform the cashier that you would like to Cash Out
                            your loan.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row justify-end gap-4 my-6">
                    <Link
                        to="/"
                        onClick={done}
                        className="px-8 py-2 text-xs text-white border rounded bg-primary hover:opacity-90 border-primary"
                    >
                        Done
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cebuana;
