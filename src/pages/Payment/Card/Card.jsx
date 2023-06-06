import React, { useState } from "react";
import card from "../../../images/visa-mastercard.png"
import Success from "./Success";
import { Link } from "react-router-dom";

function Card() {
    const [openSuccess, setOpenSuccess] = useState(false);

    return (
        <div className="flex flex-col max-w-2xl mx-auto">
            <Success open={openSuccess} setOpen={setOpenSuccess} />
            <div className="text-sm font-medium text-gray-600">
                <Link to="/payment">Payment</Link> /{" "}
                <span className="text-gray-800">Credit/Debit Card</span>{" "}
            </div>
            <div className="container w-full p-8 pb-4 my-6 bg-white rounded-lg shadow">
                <div className="pb-6 text-xl font-bold">Supported Cards</div>
                <img src={card} className="h-22" alt="visa"/>
                <div className="w-full mb-8 border"></div>
                <form className="grid grid-flow-row grid-cols-1 gap-4 py-2 mb-8 md:grid-cols-2">
                    <div>
                        <label
                            htmlFor="card-holder-name"
                            className="block text-xs font-medium text-secondary"
                        >
                            Card Holder Name
                        </label>

                        <input
                            type="text"
                            id="card-holder-name"
                            name="card-holder-name"
                            placeholder="Card Holder Name"
                            className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="card-number"
                            className="block text-xs font-medium text-secondary"
                        >
                            Card Number
                        </label>

                        <input
                            type="text"
                            id="card-number"
                            name="card-number"
                            placeholder="Card Number"
                            className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="expiration-date"
                            className="block text-xs font-medium text-secondary"
                        >
                            Expiration Date
                        </label>

                        <input
                            type="date"
                            id="expiration-date"
                            name="expiration-date"
                            placeholder="Expiration Date"
                            className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="cvv"
                            className="block text-xs font-medium text-secondary"
                        >
                            CVV
                        </label>

                        <input
                            type="number"
                            id="cvv"
                            name="cvv"
                            placeholder="CVV"
                            className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                        />
                    </div>
                </form>
                <div className="p-8 my-6 text-sm text-center rounded-lg bg-slate-200">
                    <p className="text-gray-700">
                        Clicking the pay now button, signifies that you fully
                        understood and accepted
                    </p>
                    <Link to="/" className="text-primary">
                        Pera MPC Terms and Conditions
                    </Link>
                </div>
                <div className="flex flex-col justify-around gap-4 mb-6 text-center md:flex-row md:justify-end">
                    <Link
                        to="/payment"
                        className="px-8 py-2 text-xs border rounded bg-container text-primary hover:opacity-90 border-container"
                    >
                        Go back
                    </Link>
                    <button
                        onClick={() => {
                            setOpenSuccess(true);
                        }}
                        className="px-8 py-2 text-xs text-white border rounded bg-primary hover:opacity-90 border-primary"
                    >
                        Pay now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
