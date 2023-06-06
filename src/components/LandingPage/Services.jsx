import React, { useState } from "react";
import Pension from "../../images/pension.png"
import PensionGold from "../../images/pensionGold.png"
import Emergency from "../../images/emergency.png"
import EmergencyGold from "../../images/emergencyGold.png"
import RCL from "../../images/rcl.png"
import RCLGold from "../../images/rclGold.png"
import RegularLoan from "../../images/regular.png"
import RegularLoanGold from "../../images/regularGold.png"
import Capitalization from "../../images/capitalization.png"
import CapitalizationGold from "../../images/capitalizationGold.png"
import HoldOut from "../../images/holdout.png"
import HoldOutGold from "../../images/holdoutGold.png"

function Services() {
    const [imgPension, setImgPension] = useState(Pension);
    const [imgCapitalization, setImgCapitalization] = useState(Capitalization);
    const [imgEmergency, setImgEmergency] = useState(Emergency);
    const [imgHoldOut, setImgHoldOut] = useState(HoldOut);
    const [imgRCL, setImgRCL] = useState(RCL);
    const [imgRegularLoan, setImgRegularLoan] = useState(RegularLoan);

    return (
        <>
            <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div
                        data-aos="fade-out"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-sine"
                        className="flex flex-col justify-center gap-6 mx-auto text-center"
                    >
                        <h2 className="text-3xl font-bold text-primary">
                            Services offered
                        </h2>
                        <h2 className="text-lg font-semibold text-secondary">
                            Which type of loan product would you like to avail?
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-rows-1 w-full gap-8 my-6 h-auto text-center text-slate=600 mb-4">
                        <div
                            data-aos="fade-right"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-sine"
                            onMouseOver={() => setImgPension(PensionGold)}
                            onMouseOut={() => setImgPension(Pension)}
                            className="container relative flex flex-col w-full h-auto px-12 py-0 transition ease-in delay-75 shadow-lg cursor-auto hover:bg-gradient-to-t from-secondary to-primary hover:text-white text-primary place-items-center"
                        >
                            <img src={imgPension} className="h-24 pt-8" alt="Pension"/>

                            <h2 className="py-4 text-2xl font-medium">
                                GSIS/Pension Loan
                            </h2>
                            <p className="pb-8">
                                Available to associate members who are SSS/GSIS
                                pensioners are offered with a maximum of
                                thirty-six (36) months and a competitive
                                interest rate per annum.
                            </p>
                        </div>
                        <div
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-sine"
                            onMouseOver={() => setImgEmergency(EmergencyGold)}
                            onMouseOut={() => setImgEmergency(Emergency)}
                            className="container relative flex flex-col w-full h-auto px-12 py-0 transition ease-in delay-75 shadow-lg cursor-auto hover:bg-gradient-to-t from-secondary to-primary hover:text-white text-primary place-items-center"
                        >
                            <img src={imgEmergency} className="h-24 pt-8" alt="Emergency"/>

                            <h2 className="py-4 text-2xl font-medium">
                                Emergency Loan
                            </h2>
                            <p className="pb-8">
                                Available to regular or associate members with a
                                maximum term of twelve (12) months only and a
                                competitive interest rate per annum.
                            </p>
                        </div>
                        <div
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-sine"
                            onMouseOver={() => setImgRCL(RCLGold)}
                            onMouseOut={() => setImgRCL(RCL)}
                            className="container relative flex flex-col w-full h-auto px-12 py-0 transition ease-in delay-75 shadow-lg cursor-auto hover:bg-gradient-to-t from-secondary to-primary hover:text-white text-primary place-items-center"
                        >
                            <img src={imgRCL} className="h-24 pt-8" alt="RCL"/>

                            <h2 className="py-4 text-2xl font-medium">
                                RCL Loan
                            </h2>
                            <p className="pb-8">
                                Used as flexible source of capital which is
                                available to regular or associate members with a
                                maximum term of twenty-four (24) months with a
                                competitive interest rate per annum.
                            </p>
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-sine"
                            onMouseOver={() =>
                                setImgRegularLoan(RegularLoanGold)
                            }
                            onMouseOut={() => setImgRegularLoan(RegularLoan)}
                            className="container relative flex flex-col w-full h-auto px-12 py-0 transition ease-in delay-75 shadow-lg cursor-auto hover:bg-gradient-to-t from-secondary to-primary hover:text-white text-primary place-items-center"
                        >
                            <img src={imgRegularLoan} className="h-24 pt-8" alt="Regular Loan"/>

                            <h2 className="py-4 text-2xl font-medium">
                                Regular Loan
                            </h2>
                            <p className="pb-8">
                                Available to regular or associate members with a
                                maximum term of fourty-eight (48) months and a
                                competitive interest rate per annum.
                            </p>
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-sine"
                            onMouseOver={() =>
                                setImgCapitalization(CapitalizationGold)
                            }
                            onMouseOut={() =>
                                setImgCapitalization(Capitalization)
                            }
                            className="container relative flex flex-col w-full h-auto px-12 py-0 transition ease-in delay-75 shadow-lg cursor-auto hover:bg-gradient-to-t from-secondary to-primary hover:text-white text-primary place-items-center"
                        >
                            <img
                                src={imgCapitalization}
                                className="h-24 pt-8"
                            alt="Capitalization"/>

                            <h2 className="py-4 text-2xl font-medium">
                                Capitalization Loan
                            </h2>
                            <p className="pb-8">
                                Available to associate members who are business
                                owners, OFW recipients or regular employees with
                                competitive interest rates and competitive
                                maximum terms.
                            </p>
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-sine"
                            onMouseOver={() => setImgHoldOut(HoldOutGold)}
                            onMouseOut={() => setImgHoldOut(HoldOut)}
                            className="container relative flex flex-col w-full h-auto px-12 py-0 transition ease-in delay-75 shadow-lg cursor-auto hover:bg-gradient-to-t from-secondary to-primary hover:text-white text-primary place-items-center"
                        >
                            <img src={imgHoldOut} className="h-24 pt-8" alt="HoldOut"/>

                            <h2 className="py-4 text-2xl font-medium">
                                Hold-out Loan
                            </h2>
                            <p className="pb-8">
                                Available to associate members who are time
                                depositors and can loan up to 80% of the total
                                deposit with reasonable additional interest
                                rate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
