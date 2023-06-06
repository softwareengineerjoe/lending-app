import React from "react";
import { useFormik } from "formik";

export default function RegularStep1() {
    
    const formik = useFormik({
        initialValues:{
            first_name: '',
            middlle_name: '',
            last_name: '',
            suffix: '',
            birthdate: '',
            email_address: '',
            mobile_number: '',
        },
        onSubmit: values => {
            console.log('Form data', values)
        }
    })
    
    return (
        <>
            <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 mb-8">
                <div>
                    <label
                        htmlFor="first_name"
                        className="block text-xs font-medium text-secondary"
                    >
                        First Name
                    </label>

                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        onChange={formik.handleChange}
                        value={formik.values.first_name}
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="middle_name"
                        className="block text-xs font-medium text-secondary"
                    >
                        Middle Name
                    </label>

                    <input
                        type="text"
                        id="middle_name"
                        name="middle_name"
                        onChange={formik.handleChange}
                        value={formik.values.middle_name}
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="last_name"
                        className="block text-xs font-medium text-secondary"
                    >
                        Last Name
                    </label>

                    <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        onChange={formik.handleChange}
                        value={formik.values.last_name}
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="suffix"
                        className="block text-xs font-medium text-secondary"
                    >
                        Suffix
                    </label>

                    <input
                        type="text"
                        id="suffix"
                        name="suffix"
                        onChange={formik.handleChange}
                        value={formik.values.suffix}
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
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
                        onChange={formik.handleChange}
                        value={formik.values.birthdate}
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="gender"
                        className="block text-xs font-medium text-secondary"
                    >
                        Gender
                    </label>
                    <select className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="email_address"
                        className="block text-xs font-medium text-secondary"
                    >
                        Email Address
                    </label>

                    <input
                        type="email"
                        id="email_address"
                        name="email_address"
                        onChange={formik.handleChange}
                        value={formik.values.email_address}
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
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
                        onChange={formik.handleChange}
                        value={formik.values.mobile_number}
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>
            </form>
        </>
    );
}
