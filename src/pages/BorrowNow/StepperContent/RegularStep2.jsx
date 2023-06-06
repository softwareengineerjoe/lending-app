import React from "react";

export default function RegularStep2() {
    return (
        <>
            <form className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 py-2 mb-8">
                <div>
                    <label
                        htmlFor="house_number"
                        className="block text-xs font-medium text-secondary"
                    >
                        House No./ Building/ Unit
                    </label>

                    <input
                        type="text"
                        id="house_number"
                        name="house_number"
                        placeholder="House No./ Building/ Unit"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="street_and_barangay_address"
                        className="block text-xs font-medium text-secondary"
                    >
                        Street & Barangay
                    </label>

                    <input
                        type="text"
                        id="street_and_barangay_address"
                        name="street_and_barangay_address"
                        placeholder="Street & Barangay"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="city"
                        className="block text-xs font-medium text-secondary"
                    >
                        City
                    </label>

                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="province_or_region"
                        className="block text-xs font-medium text-secondary"
                    >
                        Province / Region
                    </label>

                    <input
                        type="text"
                        id="province_or_region"
                        name="province_or_region"
                        placeholder="Province / Region"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="source_of_income"
                        className="block text-xs font-medium text-secondary"
                    >
                        Source of Income
                    </label>

                    <select className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm">
                        <option value="employment">Employment</option>
                        <option value="self-employment">Self-Employment</option>
                        <option value="property">
                            Property (dividends, interest, and rents)
                        </option>
                        <option value="transfer">
                            Transfer (child-support, education, financial
                            assistance, public assistance, etc.)
                        </option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="company_or_business_name"
                        className="block text-xs font-medium text-secondary"
                    >
                        Company / Business Name
                    </label>

                    <input
                        type="text"
                        id="company_or_business_name"
                        name="company_or_business_name"
                        placeholder="Company / Business Name"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="average-monthly-income"
                        className="block text-xs font-medium text-secondary"
                    >
                        Average Monthly Income
                    </label>

                    <input
                        type="text"
                        id="average-monthly-income"
                        name="average-monthly-income"
                        placeholder="Average Monthly Income"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="income-frequency"
                        className="block text-xs font-medium text-secondary"
                    >
                        How frequently do you earn money?
                    </label>
                    <select className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm">
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="bi-weekly">Bi-weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="others">Others</option>
                    </select>
                </div>
            </form>
        </>
    );
}
