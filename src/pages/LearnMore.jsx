import React from "react";

function LearnMore() {
    return (
        <>
        <div>

            <h2 className={Title}>About Our Lending Application</h2>
            <p className={Details}>
                Our lending application is designed to provide easy and
                convenient access to financial services for individuals in the
                Philippines. Our mission is to help you meet your financial
                goals by providing you with the tools and resources you need to
                take control of your finances.
            </p>

            <h2 className={Title}>How It Works</h2>
            <p className={Details}>
                Our lending application is simple and straightforward to use.
                Simply download the app, create an account, and submit your loan
                application. Our team of experts will review your application
                and provide you with a loan decision within minutes. Once
                approved, you can receive your loan directly to your bank
                account.
            </p>

            <h2 className={Title}>Features</h2>
            <ul>
                <li className={Details}>
                &middot; Easy application process: Our online application process is
                    quick and easy, allowing you to apply for a loan from the
                    comfort of your own home.
                </li>
                <li className={Details}>
                &middot; Fast loan decisions: Our team of experts will review your
                    application and provide you with a loan decision within
                    minutes.
                </li>
                <li className={Details}>
                &middot; Convenient repayment options: We offer flexible repayment
                    options to fit your schedule and budget.
                </li>
                <li className={Details}>
                &middot; 24/7 customer support: Our customer support team is
                    available 24/7 to answer any questions or concerns you may
                    have.
                </li>
            </ul>

            <h2 className={Title}>Eligibility</h2>
            <p className={Details}>
                To be eligible for a loan from our lending application, you must
                be a resident of the Philippines and at least 21 years of age.
                You will also need to provide proof of income and a valid
                government-issued ID.
            </p>

            <h2 className={Title}>Why Choose Us</h2>
            <p className={Details}>
                At our lending application, we are committed to providing our
                customers with the best possible experience. Our team of experts
                is dedicated to helping you achieve your financial goals, and we
                are here to support you every step of the way.
            </p>

            <h2 className={Title}>Contact Us</h2>
            <p className={Details}>
                If you have any questions or concerns, please feel free to
                contact us at [insert contact information]. Our customer support
                team is available 24/7 to assist you.
            </p>
        </div>

        </>
    );
}


const Title = "text-secondary text-2xl font-semibold"
const Details = "text-sm text-gray-700 py-2 text-justify"

export default LearnMore;
