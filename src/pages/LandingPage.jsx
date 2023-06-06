import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import logo from "../images/logo-wide-blue.png";

import Index from "../components/LandingPage/Index";
import Services from "../components/LandingPage/Services";
import HowToApply from "../components/LandingPage/HowToApply";
import Footer from "../components/LandingPage/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

const navigation = [
  { name: "Services", href: "#services", current: false },
  { name: "How to Apply", href: "#how-to-apply", current: false },
  { name: "Our Partners", href: "#our-partners", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LandingPage() {
  return (
    <div className="relative h-full scroll-smooth">
      <Disclosure as="nav" className="bg-white p-0.5">
        {({ open }) => (
          <>
            <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16" id="top">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div
                  className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start"
                  data-aos="fade-in"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-sine"
                >
                  <div className="flex items-center flex-shrink-0">
                    <Link key="landing-page" to="/landing-page">
                      <img
                        key="/landing-page"
                        className="w-auto h-8"
                        src={logo}
                        alt="Your Company"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.href
                              ? "bg-white text-primary"
                              : "transition ease-in delay-75 bg-container text-gray-600 hover:bg-container hover:text-primary",
                            "px-6 py-6 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-primary text-white"
                        : "text-gray-primary hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <main>
        <div className="relative h-auto mx-auto min-w-screen">
          <Index />
          <section id="services">
            <Services />
          </section>
          <section id="how-to-apply">
            <HowToApply />
          </section>
          <section id="our-partners">
            <Footer />
          </section>
        </div>
      </main>
      <a href="#top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="fixed w-12 h-12 bottom-4 right-4 hover:opacity-90"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
}
