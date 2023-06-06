import React from "react";

export default function SidePanelR() {
  return (
    <>
      <div className="w-60 lg:flex flex-col gap-4 hidden ml-10">
        <div
          className="px-4 text-transparent bg-clip-text bg-gradient-to-t from-sun
                     to-secondary text-2xl text-center"
        >
          <p>Your Maximum credit amount is</p>
          <p className="4xl font-bold"> ₱ 20,000</p>
        </div>
        <div className="container bg-slate-200 shadow px-4 py-2">
          <h2 className="text-xl font-semibold text-center pb-2">
            What's new?
          </h2>
          <details>
            <summary className="cursor-pointer pb-2 text-3xs xs:text-2xs sm:text-sm font-base">
              Version 1.1.0
            </summary>
            <h2 className="text-lg font-semibold">New Features</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-3xs xs:text-2xs sm:text-sm font-base text-justify">
                &middot; Added support for co-signers in loan applications
              </li>
              <li className="text-3xs xs:text-2xs sm:text-sm font-base text-justify">
                &middot; Implemented automatic loan repayment reminders for
                borrowers
              </li>
            </ul>
            <h2 className="text-lg font-semibold">Bug Fixes</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-3xs xs:text-2xs sm:text-sm font-base text-justify">
                &middot; Fixed an issue where loan interest calculation was
                incorrect for certain loan terms
              </li>
              <li className="text-3xs xs:text-2xs sm:text-sm font-base text-justify">
                &middot; Resolved a problem with incorrect loan disbursement
                dates on borrower's account page
              </li>
            </ul>
            <h2 className="text-lg font-semibold">Improvements</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-3xs xs:text-2xs sm:text-sm font-base text-justify">
                &middot; Improved the user interface of the loan application
                process
              </li>
              <li className="text-3xs xs:text-2xs sm:text-sm font-base text-justify">
                &middot; Enhanced loan application security measures
              </li>
            </ul>
            <h2 className="text-lg font-semibold">Known Issues</h2>
            <ul className="flex flex-col gap-2 pb-2">
              <li className="text-3xs xs:text-2xs sm:text-sm font-base text-justify">
                &middot; Loan repayment reminders may not work correctly for
                certain time zones
              </li>
            </ul>
          </details>
          <details>
            <summary className="cursor-pointer pb-2 text-3xs xs:text-2xs sm:text-sm font-base">
              Version 1.2.0
            </summary>
            <h2 className="text-lg font-semibold">New Features</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-3xs xs:text-2xs sm:text-sm font-base text-justify">
                &middot; Introduced a new loan product for small businesses
              </li>
              <li className="text-3xs xs:text-2xs sm:text-sm font-base text-justify">
                &middot; Added a feature for borrowers to view their loan
                history and payment status
              </li>
            </ul>
            <h2 className="text-lg font-semibold">Bug Fixes</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-3xs xs:text-2xs sm:text-sm font-base text-justify">
                &middot; Fixed an issue where loan applications were getting
                stuck in the review process
              </li>
              <li className="text-3xs xs:text-2xs sm:text-sm font-base text-justify">
                &middot; Resolved a problem with incorrect loan amount being
                displayed on borrower's account page
              </li>
            </ul>
            <h2 className="text-lg font-semibold">Improvements</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-3xs xs:text-2xs sm:text-sm font-base text-justify">
                &middot; Improved the performance of the loan application
                process
              </li>
              <li className="text-3xs xs:text-2xs sm:text-sm font-base text-justify">
                &middot; Enhanced the user experience of the loan history and
                payment status feature
              </li>
            </ul>
            <h2 className="text-lg font-semibold">Known Issues</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-3xs xs:text-2xs sm:text-sm font-base pb-2 text-justify">
                &middot; The new loan product for small businesses may not be
                available in certain regions
              </li>
            </ul>
          </details>
          <details>
            <summary className="cursor-pointer pb-2 text-3xs xs:text-2xs sm:text-sm font-base">
              Version 1.3.0
            </summary>
            <h2 className="text-lg font-semibold">New Features</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-3xs xs:text-2xs sm:text-sm font-base text-justify">
                &middot; Implemented a credit score calculation system to assess
                loan applicants
              </li>
              <li className="text-3xs xs:text-2xs sm:text-sm font-base text-justify">
                &middot; Added a feature for lenders to manage and monitor their
                loan portfolio
              </li>
            </ul>
            <h2 className="text-lg font-semibold">Bug Fixes</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-3xs xs:text-2xs sm:text-sm font-base text-justify">
                &middot; Fixed an issue where loan applications were getting
                rejected due to missing information
              </li>
              <li className="text-3xs xs:text-2xs sm:text-sm font-base text-justify">
                &middot; Resolved a problem with loan repayment dates not being
                correctly displayed on borrower's account page
              </li>
            </ul>
            <h2 className="text-lg font-semibold">Improvements</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-3xs xs:text-2xs sm:text-sm font-base text-justify">
                &middot; Improved the accuracy of the credit score calculation
                system
              </li>
              <li className="text-3xs xs:text-2xs sm:text-sm font-base text-justify">
                &middot; Enhanced the user interface of the loan portfolio
                management feature for lenders
              </li>
            </ul>
            <h2 className="text-lg font-semibold">Known Issues</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-3xs xs:text-2xs sm:text-sm font-base pb-2 text-justify">
                &middot; The credit score calculation system may not accurately
                reflect the creditworthiness of some borrowers.
              </li>
            </ul>
          </details>
        </div>

        <div className="container bg-slate-200 shadow px-4 py-2">
          <h2 className="text-xl font-semibold text-center pb-2">FAQs</h2>
          <details>
            <summary className="cursor-pointer pb-2 text-justify text-3xs xs:text-2xs sm:text-sm font-base">
              How do I apply for a loan through the lending app?
            </summary>
            <p className="text-3xs xs:text-2xs sm:text-sm font-base pb-2 text-justify">
              &middot; To apply for a loan, you need to download the lending
              app, create an account, and fill out the loan application form.
              The app will guide you through the process.
            </p>
          </details>
          <details>
            <summary className="cursor-pointer pb-2 text-justify text-3xs xs:text-2xs sm:text-sm font-base">
              What types of loans are available through the lending app?
            </summary>
            <p className="text-3xs xs:text-2xs sm:text-sm font-base pb-2 text-justify">
              &middot; The types of loans available through the lending app vary
              depending on the region and other factors. Some common loan
              products include personal loans, small business loans, and auto
              loans.
            </p>
          </details>
          <details>
            <summary className="cursor-pointer pb-2 text-justify text-3xs xs:text-2xs sm:text-sm font-base">
              What is the interest rate for loans offered through the lending
              app?
            </summary>
            <p className="text-3xs xs:text-2xs sm:text-sm font-base pb-2 text-justify">
              &middot; The interest rate for loans offered through the lending
              app depends on several factors, including the type of loan, the
              loan amount, and the borrower's creditworthiness. You can find
              more information on the interest rates for each loan product
              within the lending app.
            </p>
          </details>
          <details>
            <summary className="cursor-pointer pb-2 text-justify text-3xs xs:text-2xs sm:text-sm font-base">
              How is my credit score calculated through the lending app?
            </summary>
            <p className="text-3xs xs:text-2xs sm:text-sm font-base pb-2 text-justify">
              &middot; Your credit score is calculated based on information in
              your credit report, including your payment history, credit
              utilization, and length of credit history. The lending app uses
              this information, along with other factors, to determine your
              credit score.
            </p>
          </details>
          <details>
            <summary className="cursor-pointer pb-2 text-justify text-3xs xs:text-2xs sm:text-sm font-base">
              How do I make loan payments through the lending app?
            </summary>
            <p className="text-3xs xs:text-2xs sm:text-sm font-base pb-2 text-justify">
              &middot; You can make loan payments through the lending app by
              linking your bank account or using a debit card. Loan payments can
              be scheduled or made manually, and reminders can be set up to
              ensure timely payments.
            </p>
          </details>
        </div>
      </div>
    </>
  );
}
