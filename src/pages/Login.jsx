import { LockClosedIcon } from "@heroicons/react/20/solid";
import logo from "../images/logo-wide-blue.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault()
    setLoading(true);
    await delay(1000);
    navigate("/");
    // setLoading(true);
  }
  return (
    <div className="w-full mx-auto my-auto">
      <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="container w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow">
          <div>
            <Link to="/landing-page">
              <img className="w-auto mx-auto" src={logo} alt="Your Company" />
            </Link>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-center text-gray-600">
              Or{" "}
              <Link
                to="/register"
                className="font-medium text-primary hover:opacity-90"
              >
                Register a new account
              </Link>
            </p>
          </div>
          {/* <form className="mt-8 space-y-6" action="#" method="POST"> */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded text-primary focus:primary"
                />
                <label
                  htmlFor="remember-me"
                  className="block ml-2 text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <button
                  type="button"
                  className="font-medium text-primary hover:opacity-90"
                >
                  Forgot your password?
                </button>
              </div>
            </div>

            <button
              // to="/"
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md disabled:from-gray-400 disabled:to-gray-500 group bg-gradient-to-l from-primary to-secondary hover:hover:opacity-90 focus:outline-none focus:ring-2 focus:primary focus:ring-offset-2"
              disabled={loading}
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="w-5 h-5 text-white group-hover:opacity-90"
                  aria-hidden="true"
                />
              </span>
              {loading === true && (
                <svg
                  className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
