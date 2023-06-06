import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function LoanApplications() {
    let [categories] = useState({
        Current: [],
        History: [],
    });

    return (
        <>
            
            <div className="pb-2 text-2xl font-semibold text-secondary">
                <p>Loan Applications</p>
            </div>
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-md bg-primary">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    "w-full rounded-md py-2 text-sm font-medium leading-5 text-white",
                                    selected
                                        ? "bg-secondary"
                                        : "text-white hover:bg-secondary hover:text-white"
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-4">
                    <Tab.Panel className={classNames("rounded-xl bg-white")}>
                        <div className="flex flex-row items-center justify-between p-3 hover:shadow-xl">
                            <div>
                                Your loan amounting{" "}
                                <span className="font-semibold">₱ 10,000 </span>
                                has been approved.
                                <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-gray-500">
                                    <li>Jan 29, 2023</li>
                                    <li>&middot;</li>
                                    <li>10:43 pm</li>
                                </ul>
                            </div>
                            <Link
                                to="/cashout"
                                className="px-8 py-2 text-xs text-white border rounded-lg bg-primary border-primary hover:opacity-90"
                            >
                                Cash Out
                            </Link>
                        </div>
                        <div className="flex flex-row items-center justify-between p-3 hover:shadow-xl">
                            <div>
                                Your loan amounting{" "}
                                <span className="font-semibold">₱ 20,000 </span>
                                is waiting for approval.
                                <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-gray-500">
                                    <li>
                                        Our team is now reviewing your documents
                                        to assess your eligibility.
                                    </li>
                                    {/* <li>&middot;</li>
                                <li>10:43 pm</li> */}
                                </ul>
                            </div>
                            <button
                                href="/cashout"
                                className="px-8 py-2 text-xs border rounded-lg cursor-not-allowed bg-container border-primary text-primary"
                                disabled
                            >
                                Cash Out
                            </button>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel className={classNames("rounded-xl bg-white")}>
                        <div className="flex flex-row items-center justify-between p-3 hover:shadow-xl">
                            <div>
                                Your loan amounting{" "}
                                <span className="font-semibold">₱ 10,000 </span>
                                has been declined.
                                <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-gray-500">
                                    <li>Jan 29, 2023</li>
                                    <li>&middot;</li>
                                    <li>10:43 pm</li>
                                </ul>
                            </div>
                            <button
                                className="px-8 py-2 text-xs text-white border rounded-lg bg-primary border-primary hover:opacity-90"
                            >
                                View Details
                            </button>
                        </div>
                        <div className="border-t-2"></div>
                        <div className="flex flex-row items-center justify-between p-3 hover:shadow-xl">
                            <div>
                                Your loan amounting{" "}
                                <span className="font-semibold">₱ 15,000 </span>
                                has been approved.
                                <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-gray-500">
                                    <li>Jan 28, 2023</li>
                                    <li>&middot;</li>
                                    <li>01:40 pm</li>
                                </ul>
                            </div>
                            <button className="px-8 py-2 text-xs text-white border rounded-lg bg-primary border-primary hover:opacity-90">
                                View Details
                            </button>
                        </div>
                        <div className="border-t-2"></div>
                        <div className="flex flex-row items-center justify-between p-3 hover:shadow-xl">
                            <div>
                                Your loan amounting{" "}
                                <span className="font-semibold">₱ 10,000 </span>
                                has been approved.
                                <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-gray-500">
                                    <li>Jan 27, 2023</li>
                                    <li>&middot;</li>
                                    <li>12:43 am</li>
                                </ul>
                            </div>
                            <button className="px-8 py-2 text-xs text-white border rounded-lg bg-primary border-primary hover:opacity-90">
                                View Details
                            </button>
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </>
    );
}
