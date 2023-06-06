import Vector1 from "../../images/Vector1.png"
import Vector2 from "../../images/Vector2.png"
import Vector3 from "../../images/Vector3.png"
import Vector4 from "../../images/Vector4.png"
import Vector1Gold from "../../images/Vector1Gold.png"
import Vector2Gold from "../../images/Vector2Gold.png"
import Vector3Gold from "../../images/Vector3Gold.png"
import Vector4Gold from "../../images/Vector4Gold.png"


import { useState } from "react";
import { Link } from "react-router-dom"

const Payment = () => {
    const [imgVector1, setImgVector1] = useState(Vector1);
    const [imgVector2, setImgVector2] = useState(Vector2);
    const [imgVector3, setImgVector3] = useState(Vector3);
    const [imgVector4, setImgVector4] = useState(Vector4);

    return (
        <>
            <div className="flex flex-col max-w-2xl mx-auto">
                <div className="text-sm font-medium text-gray-600">
                    {/* Apply for loan /{" "} */}
                    <span className="text-gray-800">Payment</span>{" "}
                </div>
                <div className="container w-full h-auto p-8 pb-4 my-6 bg-white rounded-lg shadow">
                    <div className="pb-6 text-xl font-bold">
                        Select Payment Method
                    </div>
                    <div className="grid grid-flow-row grid-cols-1 gap-4 py-2 lg:grid-cols-2">
                        <Link
                            onMouseOver={() => setImgVector1(Vector1Gold)}
                            onMouseOut={() => setImgVector1(Vector1)}
                            to="/payment/card"
                            className={Container}
                        >
                            <img src={imgVector1} className="w-10 h-10 mx-8" alt="option-1"/>
                            <div className="flex flex-col justify-center w-2/3">
                                <h2 className="text-sm font-semibold">
                                    Credit/Debit Card
                                </h2>
                            </div>
                        </Link>
                        <div
                            onMouseOver={() => setImgVector4(Vector4Gold)}
                            onMouseOut={() => setImgVector4(Vector4)}
                            className={Container}
                        >
                            <img src={imgVector4} className="w-10 h-10 mx-8" alt="option-2"/>
                            <div className="flex flex-col justify-center w-2/3">
                                <h2 className="text-sm font-semibold">
                                    eMoney / Mobile Wallet
                                </h2>
                                {/* <p className="hidden sm:block">
                                    Pay using your eMoney account such as Gcash,
                                    Paymaya and many more!
                                </p> */}
                            </div>
                        </div>
                        <div
                            onMouseOver={() => setImgVector2(Vector2Gold)}
                            onMouseOut={() => setImgVector2(Vector2)}
                            className={Container}
                        >
                            <img src={imgVector2} className="w-10 h-10 mx-8" alt="option-3"/>
                            <div className="flex flex-col justify-center w-2/3">
                                <h2 className="text-sm font-semibold">Cash</h2>
                                {/* <p className="hidden sm:block">
                                    Pay in cash to any of our partners
                                    nationwide.
                                </p> */}
                            </div>
                        </div>
                        <div
                            onMouseOver={() => setImgVector3(Vector3Gold)}
                            onMouseOut={() => setImgVector3(Vector3)}
                            className={Container}
                        >
                            <img src={imgVector3} className="w-10 h-10 mx-8" alt="option-4"/>
                            <div className="flex flex-col justify-center w-2/3">
                                <h2 className="text-sm font-semibold">
                                    Online Banking
                                </h2>
                                {/* <p className="hidden sm:block">
                                    Pay using your Bancnet ATM card via Bancnet
                                    online payment system.
                                </p> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-end gap-4 my-6">
                        <Link
                            to="/"
                            className="px-8 py-2 text-xs text-white border rounded-lg border-primary hover:opacity-90 bg-primary"
                        >
                            Cancel
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

const Container = "w-full container border border-primary p-8 flex flex-col items-center gap-4 md:flex-row hover:bg-gradient-to-t from-secondary to-primary transition ease-in delay-75 hover:text-white cursor-pointer text-center md:text-left md:gap-0 rounded-lg"

export default Payment;
