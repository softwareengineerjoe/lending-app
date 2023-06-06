import { Link } from "react-router-dom";

export default function ActiveLoans() {

    return (
        <div className="pb-4">
            <div className="pb-2 text-2xl font-semibold bg-clip-text text-secondary">
                <p>Active Loans</p>
            </div>
            <div className="flex flex-col max-w-2xl gap-4 mt-4 h-fit ">

                                <div className="w-full p-6 bg-white rounded-lg shadow container-sm min-w-fit">
                                    <div className="flex justify-between font-medium">
                                        <p className="text-sm text-gray-500">
                                            Allotment Loan
                                        </p>
                                        <p className="flex-row items-center hidden md:flex text-secondary">
                                            12 months
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-6 h-6 pl-1"
                                            >
                                                <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                                                    clipRule="evenodd"
                                                />
                                                <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                                            </svg>
                                        </p>
                                    </div>
                                    <p className="text-xl font-semibold">
                                        ₱ 1,115.08{" "}
                                        <span className="font-normal text-gray-300">
                                            / ₱ 10,000.00
                                        </span>
                                    </p>
                                    {/* Progress */}
                                    <div className="w-full bg-gray-200 rounded-full mt-2.5 block relative">
                                        <span className="absolute text-xs font-medium text-gray-500 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                            89%
                                        </span>
                                        <div
                                            className="p-1 text-xs font-medium leading-none text-center text-blue-100 rounded-full bg-primary hover:opacity-90 "
                                            style={{ width: "11%" }}
                                        >
                                            {" "}
                                            11%
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-around gap-2 mt-6 lg:flex-row">
                                        <button
                                            className={GrayButton}
                                        >
                                            View Details
                                        </button>
                                        <Link
                                            to="/payment"
                                            className={BlueButton}
                                        >
                                            Pay now
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-full p-6 bg-white rounded-lg shadow container-sm min-w-fit">
                                    <div className="flex justify-between font-medium">
                                        <p className="text-sm text-gray-500">
                                            Salary Loan
                                        </p>
                                        <p className="flex-row items-center hidden md:flex text-secondary">
                                            36 months
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-6 h-6 pl-1"
                                            >
                                                <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                                                    clipRule="evenodd"
                                                />
                                                <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                                            </svg>
                                        </p>
                                    </div>
                                    <p className="text-xl font-semibold">
                                        ₱ 8,000.00{" "}
                                        <span className="font-normal text-gray-300">
                                            / ₱ 20,000.00
                                        </span>
                                    </p>
                                    {/* Progress */}
                                    <div className="w-full bg-gray-200 rounded-full mt-2.5 block relative">
                                        <span className="absolute text-xs font-medium text-gray-500 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                            60%
                                        </span>
                                        <div
                                            className="p-1 text-xs font-medium leading-none text-center text-blue-100 rounded-full bg-primary hover:opacity-90"
                                            style={{ width: "40%" }}
                                        >
                                            {" "}
                                            40%
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-around gap-2 mt-6 lg:flex-row">
                                        <button
                                            className={GrayButton}
                                        >
                                            View Details
                                        </button>
                                        <button
                                            href="/payment"
                                            className={BlueButton}
                                        >
                                            Pay now
                                        </button>
                                    </div>
                                </div>
                            </div>
        </div>
    );
}


const GrayButton = "lg:w-1/2 px-8 py-2 border-container border rounded-lg bg-gray-300 text-primary  hover:opacity-90 w-full text-xs lg:text-sm"

const BlueButton = "lg:w-1/2 text-center px-8 py-2 border-primary border rounded-lg bg-primary text-white hover:opacity-90 w-full text-xs lg:text-sm"