import React from "react";
import Background from "../../images/landing-bg.png"
import Accent from "../../images/landing-accent.png"
import { Link } from "react-router-dom";

function Index() {
    return (
        <>
            <div className="relative h-screen overflow-hidden w-fit">
                <img
                    src={Background}
                    className="object-cover w-screen h-screen bg-center bg-no-repeat mb-42 -z-10"
                alt="background"/>
                <img
                    src={Accent}
                    className="absolute left-0 w-screen h-48 overflow-hidden translate-y-10 -bottom-16 md:bottom-4 -translate-x-0 md:translate-y-36 md:h-60 lg:translate-y-44 lg:h-72 xl:h-90"
                alt="accent"/>
                <div className="absolute z-10 flex flex-col gap-2 6xs:gap-0 left-7 top-8 5xs:left-8 4xs:left-8 3xs:left-10 3xs:top-9 2xs:left-10 2xs:top-9 xs:left-10 xs:top-14 sm:left-10 sm:top-14 md:top-1/4 md:left-10 lg:top-1/4 lg:left-14 xl:top-1/4 xl:left-16 2xl:left-32">
                    <h1
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-sine"
                        className="text-3xl font-bold 3xs:text-3xl 2xs:text-3xl xs:text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-7xl text-primary"
                    >
                        Cash Loan
                    </h1>

                    <p
                        data-aos="fade-right"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-sine"
                        className="text-xs font-semibold text-primary 3xs:text-xs 2xs:text-xs xs:text-xs sm:text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
                    >
                        We assure lowest interest.
                    </p>

                    <Link
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-sine"
                        to="/register"
                        className="px-8 py-2 text-xs text-white rounded-full hover:text-sun bg-primary hover:opacity-90 3xs:text-xs 2xs:text-xs xs:text-xs sm:text-xs w-fit md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
                    >
                        Apply Now!
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Index;
