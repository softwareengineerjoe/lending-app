import React from "react";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import Agreement1 from "../images/loan-agreement1.png";
import Agreement2 from "../images/loan-agreement2.png";
import Agreement3 from "../images/loan-agreement3.png";
import Modal1 from "../components/SettingsModal/Modal1";
import Modal2 from "../components/SettingsModal/Modal2";
import Modal3 from "../components/SettingsModal/Modal3";
import { Link } from "react-router-dom";

export default function Settings() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [enabled, setEnabled] = useState(false);
  const [openAgreement1, setOpenAgreement1] = useState(false);
  const [openAgreement2, setOpenAgreement2] = useState(false);
  const [openAgreement3, setOpenAgreement3] = useState(false);

  // function Download() {
  //   alert("Your file is now downloading.");
  // }

  function copy() {
    alert("copied");
  }

  function save() {
    alert("changes saved");
  }

  return (
    <>
      <Modal1 open={openAgreement1} setOpen={setOpenAgreement1} />
      <Modal2 open={openAgreement2} setOpen={setOpenAgreement2} />
      <Modal3 open={openAgreement3} setOpen={setOpenAgreement3} />
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <div className="flex flex-col h-full gap-4 md:flex-row min-h-fit">
          <Tab.List className="flex flex-col items-start py-8 bg-white rounded-lg shadow-md container-xs">
            <div className="text-sm font-medium text-center text-black place-self-center">
              <img
                className="w-32 mx-auto rounded-full shadow-lg md:w-24"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="pt-2">Tom Cook</div>
              <a
                href="mailto:tomcook@email.com"
                className="pb-2 text-sm font-normal underline lowercase text-primary"
              >
                tomcook@email.com
              </a>
              <p className="pt-2 text-base font-normal text-gray-700">
                ALC No.
              </p>
              <div className="flex flex-row justify-between px-4 mx-6 my-2 border rounded-full bg-container text-primary place-items-center">
                #534212039198{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 ml-6 cursor-pointer md:hidden lg:block"
                  onClick={copy}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                  />
                </svg>
              </div>
            </div>

            <Tab className="flex flex-row justify-start w-10/12 p-4 mx-auto transition ease-in delay-75 rounded-lg place-items-center justify-base hover:bg-container md:text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2 md:hidden lg:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                />
              </svg>
              <p className="text-sm text-left">Personal Information</p>
            </Tab>
            <Tab className="flex flex-row justify-start w-10/12 p-4 mx-auto transition ease-in delay-75 rounded-lg place-items-center justify-base hover:bg-container md:text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2 md:hidden lg:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <p className="text-sm text-left">Loan Agreement</p>
            </Tab>
            <Tab className="flex flex-row justify-start w-10/12 p-4 mx-auto transition ease-in delay-75 rounded-lg place-items-center justify-base hover:bg-container md:text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2 md:hidden lg:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
              <p className="text-sm text-left">Account</p>
            </Tab>
            <Tab className="flex flex-row justify-start w-10/12 p-4 mx-auto transition ease-in delay-75 rounded-lg place-items-center justify-base hover:bg-container md:text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2 md:hidden lg:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                />
              </svg>
              <p className="text-sm text-left">Notifications</p>
            </Tab>
            <Tab className="flex flex-row justify-start w-10/12 p-4 mx-auto transition ease-in delay-75 rounded-lg place-items-center justify-base hover:bg-container md:text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2 md:hidden lg:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
              <p className="text-sm text-left">Help</p>
            </Tab>
          </Tab.List>
          <Tab.Panels className="w-full bg-white rounded-lg shadow-md container-xs">
            <Tab.Panel>
              <div className="p-8 text-xl font-medium">
                Personal Information
              </div>
              {/* Line break */}
              <div className="w-full border"></div>
              <form
                className="p-8 text-sm text-gray-700"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 gap-4 py-2 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-xs font-medium text-secondary"
                    >
                      First Name
                    </label>

                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      placeholder="Tom"
                      className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-xs font-medium text-secondary"
                    >
                      Last Name
                    </label>

                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      placeholder="Cook"
                      className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 py-2 md:grid-cols-3">
                  <div>
                    <label
                      htmlFor="gender"
                      className="block text-xs font-medium text-secondary"
                    >
                      Last Name
                    </label>
                    <select className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="civil-status"
                      className="block text-xs font-medium text-secondary"
                    >
                      Civil Status
                    </label>
                    <select className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm">
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Separated">Separated</option>
                      <option value="Widowed">Widowed</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="birthdate"
                      className="block text-xs font-medium text-secondary"
                    >
                      Birthday
                    </label>

                    <input
                      type="date"
                      id="birthdate"
                      name="birthdate"
                      placeholder="Birthday"
                      className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 py-2">
                  <div>
                    <label
                      htmlFor="birthplace"
                      className="block text-xs font-medium text-secondary"
                    >
                      Place of Birth
                    </label>

                    <input
                      type="text"
                      id="birthplace"
                      name="birthplace"
                      placeholder="Los Fernandos, PaperTown, Texas"
                      className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 py-2 md:grid-cols-4">
                  <div>
                    <label
                      htmlFor="height"
                      className="block text-xs font-medium text-secondary"
                    >
                      Height
                    </label>

                    <input
                      type="text"
                      id="height"
                      name="height"
                      placeholder="169cm"
                      className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="weight"
                      className="block text-xs font-medium text-secondary"
                    >
                      Weight
                    </label>

                    <input
                      type="text"
                      id="weight"
                      name="weight"
                      placeholder="65kg"
                      className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="eye-color"
                      className="block text-xs font-medium text-secondary"
                    >
                      Eye Color
                    </label>

                    <input
                      type="text"
                      id="eye-color"
                      name="eye-color"
                      placeholder="Brown"
                      className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hair-color"
                      className="block text-xs font-medium text-secondary"
                    >
                      Hair Color
                    </label>

                    <input
                      type="text"
                      id="hair-color"
                      name="hair-color"
                      placeholder="Black"
                      className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4 md:flex-row">
                  <div>
                    <label
                      htmlFor="distinguishing-mark"
                      className="block text-xs font-medium text-secondary"
                    >
                      Distinguishing Mark
                    </label>

                    <input
                      type="text"
                      id="distinguishing-mark"
                      name="distinguishing-mark"
                      placeholder="Mole in left cheek"
                      className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    />
                  </div>
                  <button className="w-1/2 px-8 py-2 ml-auto text-xs text-center text-white border rounded bg-primary border-primary h-fit place-self-end hover:opacity-90">
                    Edit Profile
                  </button>
                </div>
              </form>
            </Tab.Panel>
            <Tab.Panel>
              <div className="p-8 text-xl font-medium">Loan Agreement</div>
              {/* Line break */}
              <div className="w-full border"></div>
              <div className="p-8">
                <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                  <ul className="flex flex-col w-1/3 place-items-center">
                    <div className="h-auto shadow">
                      <img
                        onClick={() => {
                          setOpenAgreement1(true);
                        }}
                        src={Agreement1}
                        className="shadow cursor-pointer lg:h-auto"
                        alt="agreement 1"
                      />
                    </div>

                    <li className="flex flex-row mt-2 text-xs font-medium text-secondary">
                      Page 1
                      <a href={Agreement1} download="Page 1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4 ml-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <ul className="flex flex-col w-1/3 place-items-center">
                    <div className="h-auto shadow">
                      <img
                        onClick={() => {
                          setOpenAgreement2(true);
                        }}
                        src={Agreement2}
                        className="shadow cursor-pointer lg:h-auto"
                        alt="agreement 2"
                      />
                    </div>

                    <li className="flex flex-row mt-2 text-xs font-medium text-secondary">
                      Page 2
                      <a href={Agreement2} download="Page 2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4 ml-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <ul className="flex flex-col w-1/3 place-items-center">
                    <div className="h-auto shadow">
                      <img
                        onClick={() => {
                          setOpenAgreement3(true);
                        }}
                        src={Agreement3}
                        className="shadow cursor-pointer lg:h-auto"
                        alt="agreement 3"
                      />
                    </div>

                    <li className="flex flex-row mt-2 text-xs font-medium text-secondary">
                      Page 3
                      <a href={Agreement3} download="Page 3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4 ml-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <div className="flex flex-row justify-end w-full mt-6">
                  <a
                    href={Agreement1}
                    download="page 3"
                    className="flex flex-row items-center justify-center w-full px-8 py-2 text-xs text-white border rounded bg-primary h-fit md:mr-6 hover:bg-opacity-90 border-primary md:w-auto"
                  >
                    Download
                  </a>
                </div> */}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="p-8 text-xl font-medium">Account Settings</div>
              {/* Line break */}
              <div className="w-full border"></div>
              <div className="p-8 text-sm text-gray-700">
                <form className="grid grid-cols-1 gap-4 py-2 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email_address"
                      className="block text-xs font-medium text-secondary"
                    >
                      Email Address
                    </label>

                    <input
                      type="text"
                      id="email_address"
                      name="email_address"
                      placeholder="Email Address"
                      className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mobile_number"
                      className="block text-xs font-medium text-secondary"
                    >
                      Mobile Number
                    </label>

                    <input
                      type="number"
                      id="mobile_number"
                      name="mobile_number"
                      placeholder="Mobile Number"
                      className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    />
                  </div>
                </form>
              </div>
              <div className="p-8 text-xl font-medium">Change Password</div>
              {/* Line break */}
              <div className="w-full border"></div>
              <div className="p-8 text-sm text-gray-700">
                <form
                  className="grid grid-cols-1 gap-4 py-2 md:grid-cols-2"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <label
                      htmlFor="old_password"
                      className="block text-xs font-medium text-secondary"
                    >
                      Old Password
                    </label>

                    <input
                      type="text"
                      id="old_password"
                      name="old_password"
                      placeholder="Old Password"
                      className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="new_password"
                      className="block text-xs font-medium text-secondary"
                    >
                      New Password
                    </label>

                    <input
                      type="text"
                      id="new_password"
                      name="new_password"
                      placeholder="New Password"
                      className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                    />
                  </div>
                </form>
              </div>
              <div className="flex flex-col justify-end gap-4 p-8 text-xs text-center md:flex-row">
                <Link
                  to="/"
                  className="w-full px-8 py-2 text-xs font-medium border rounded hover:opacity-90 h-fit text-primary bg-container border-container md:w-28"
                >
                  Cancel
                </Link>
                <button
                  className="w-full px-8 py-2 text-xs font-medium text-white border rounded hover:opacity-90 h-fit bg-primary border-primary md:w-28"
                  onClick={save}
                >
                  Save
                </button>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="p-8 text-xl font-medium">
                Notification Settings
              </div>
              {/* Line break */}
              <div className="w-full border"></div>

              <Switch.Group>
                <div className="flex flex-row justify-between p-8 text-sm text-gray-700">
                  <Switch.Label>Push Notifications</Switch.Label>
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${
                      enabled ? "bg-primary" : "bg-container"
                    } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                  >
                    <span
                      className={`${
                        enabled ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                    />
                  </Switch>
                </div>
              </Switch.Group>
            </Tab.Panel>
            <Tab.Panel>
              <div className="p-8 text-xl font-medium">Help</div>
              {/* Line break */}
              <div className="w-full border"></div>
              <div className="p-8 text-sm text-gray-700">
                To get more help contact our{" "}
                <Link
                  to="/settings"
                  className="underline text-primary hover:opacity-90"
                >
                  Customer Support.
                </Link>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </>
  );
}
