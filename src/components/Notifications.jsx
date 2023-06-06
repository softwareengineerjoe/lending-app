/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BellIcon, CreditCardIcon } from "@heroicons/react/24/outline";

export default function Notifications() {
    const card = () => {
        return (
            <div className="break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm px-4 py-3 bg-white text-neutral cursor-pointer hover:bg-gray-50">
                <div className="flex items-center justify-between font-medium">
                    <span className="uppercase text-xs text-secondary">
                        Salary Loan
                    </span>
                    <span className="text-xs text-secondary">
                        January 1, 2022
                    </span>
                </div>
                <div className="flex flex-row items-center space-x-3">
                    <div className="flex flex-none items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-primary text-white p-2">
                        <CreditCardIcon />
                    </div>
                    <span className="text-base font-medium">
                        Loan Payment successfull
                    </span>
                </div>
                <div>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elitsed
                    do eiusmod.
                </div>
            </div>
        );
    };
    const card2 = () => {
        return (
            <div className="break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm px-4 py-3 bg-white text-neutral cursor-pointer hover:bg-gray-50">
                <div className="flex items-center justify-between font-medium">
                    <span className="uppercase text-xs text-secondary">
                        Allotment Loan
                    </span>
                    <span className="text-xs text-secondary">
                        January 1, 2022
                    </span>
                </div>
                <div className="flex flex-row items-center space-x-3">
                    <div className="flex flex-none items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-primary text-white p-2">
                        <CreditCardIcon />
                    </div>
                    <span className="text-base font-medium">
                        Loan Payment pending
                    </span>
                </div>
                <div>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elitsed
                    do eiusmod.
                </div>
            </div>
        );
    };
    const card3 = () => {
        return (
            <div className="break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm px-4 py-3 bg-white text-neutral cursor-pointer hover:bg-gray-50">
                <div className="flex items-center justify-between font-medium">
                    <span className="uppercase text-xs text-secondary">
                        Regular Loan
                    </span>
                    <span className="text-xs text-secondary">
                        January 1, 2022
                    </span>
                </div>
                <div className="flex flex-row items-center space-x-3">
                    <div className="flex flex-none items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-primary text-white p-2">
                        <CreditCardIcon />
                    </div>
                    <span className="text-base font-medium">
                        Loan Payment declined
                    </span>
                </div>
                <div>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elitsed
                    do eiusmod.
                </div>
            </div>
        );
    };

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div className="flex justify-center">
                <Menu.Button className="p-1 text-white rounded-full hover:text-white focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="w-6 h-6" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-96 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>{({ active }) => card()}</Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>{({ active }) => card2()}</Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>{({ active }) => card3()}</Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
