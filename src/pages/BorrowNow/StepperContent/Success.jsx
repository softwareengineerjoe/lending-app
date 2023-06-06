import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import successlogo from "../../../images/success.gif"
import { Link } from "react-router-dom";

export default function Success({ open, setOpen }) {
    // const [open, setOpen] = useState(true)

    const cancelButtonRef = useRef(null);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={setOpen}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-full p-4 text-center -translate-y-32 sm:items-center sm:p-0 md:translate-y-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg min-w-fit">
                                <div className="flex flex-row-reverse px-4 py-3 bg-white">
                                    <svg
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-8 h-8 cursor-pointer hover:text-secondary"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div className="flex flex-col items-center gap-2 px-8 text-center bg-white">
                                    <img src={successlogo} className="h-20 mb-6" alt="success"/>
                                    <h2 className="text-xl font-bold text-secondary">
                                        Submitted Successfully
                                    </h2>
                                    <p>
                                        Your loan application will now be processed by our team to assess your eligibility.
                                    </p>
                                    <div className="flex flex-col justify-center gap-2 pb-8 text-center">
                                        <Link to="/transactions" className="px-8 py-2 mt-8 text-xs text-white border rounded-lg hover:opacity-90 border-primary bg-primary">
                                            View Application
                                        </Link>
                                        <Link to="/" className="px-8 py-2 text-xs border rounded-lg hover:opacity-90 border-container bg-container text-primary">
                                            Apply Another Loan
                                        </Link>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
