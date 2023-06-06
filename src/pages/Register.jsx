import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo-wide-blue.png";

export default function Register() {
const navigate = useNavigate()
  function handleSubmit() {
    navigate('/login')
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
              Registration Form
            </h2>
            <p className="mt-2 text-sm text-center text-gray-600">
              Already a member?{" "}
              <Link
                to="/login"
                className="font-medium text-primary hover:opacity-90"
              >
                Login to your account
              </Link>
            </p>
          </div>
          {/* <form className="mt-8 space-y-6" action="#" method="POST"> */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div className="flex flex-row gap-2">
                <div>
                  <label htmlFor="first-name" className="sr-only">
                    First Name
                  </label>
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="text"
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="sr-only">
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="text"
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="flex flex-row gap-2 pt-2">
                <div className="w-2/3">
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <label htmlFor="number" className="sr-only">
                    Mobile Number
                  </label>
                  <input
                    id="number"
                    name="number"
                    type="number"
                    autoComplete="number"
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Mobile Number"
                  />
                </div>
              </div>

              <div className="pt-2">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div className="pt-2">
                <label htmlFor="password" className="sr-only">
                  Verify Password
                </label>
                <input
                  id="verify-password"
                  name="verify-password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Verify Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="agreement"
                  name="agreement"
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded text-primary focus:primary"
                />
                <label
                  htmlFor="agreement"
                  className="block ml-2 text-sm text-gray-900"
                >
                  I agree to the{" "}
                  <button
                    type="button"
                    className="text-primary hover:opacity-90"
                  >
                    terms and conditions.
                  </button>
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md group bg-gradient-to-l from-primary to-secondary hover:hover:opacity-90 focus:outline-none focus:ring-2 focus:primary focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-white group-hover:opacity-90"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Register now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
