import React from "react";
import image from "../../images/how-to-apply.png"
import step1 from "../../images/Step1.svg"
import step2 from "../../images/Step2.svg"

export default function HowToApply() {
    return (
        <div className="py-6 my-auto mx-auto max-w-7xl sm:px-6 lg:px-8 h-fit">
            <div className="px-4 py-6 sm:px-0">
                <div
                    data-aos="fade-out"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-sine"
                    className="flex-col flex justify-center mx-auto text-center gap-6"
                >
                    <h2 className="text-3xl text-primary font-bold">
                        Easy and Quick Loans!
                    </h2>
                    <h2 className="text-lg text-secondary font-semibold">
                        Lorem ipsum dolor sit amet consectetur. Ultrices amet
                        tellus ac turpis nunc eget commodo odio turpis. Turpis
                        ullamcorper nunc nulla vitae. Et odio id sed dignissim
                        blandit cursus tellus velit.
                    </h2>
                </div>
                <div
                    data-aos="fade-out"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-sine"
                    className="flex flex-col lg:flex-row items-center my-28 gap-8 lg:gap-4 relative"
                >
                    <div className="absolute xl:left-6 xl:-top-14 xl:h-44 xl:w-44  lg:left-4 lg:h-36 lg:w-36 md:-top-12 md:h-38 md:w-38 sm:left-6 sm:h-32 sm:w-32 sm:-top-10 xs:left-5 xs:-top-8 xs:h-28 xs:w-28 2xs:-top-7 2xs:h-28 2xs:w-28 3xs:left-3 3xs:-top-8 3xs:h-22 3xs:w-22 4xs:left-3 4xs:-top-5 4xs:h-18 4xs:w-18  left-1 -top-6 h-16 w-16 bg-gradient-to-tl md:left-6 from-secondary to-primary rounded-full">
                        <p className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute font-bold -rotate-12  bg-clip-text bg-gradient-to-r from-sun to-white text-transparent text-3xs 3xs:text-2xs xs:text-sm sm:text-sm md:text-base xl:text-lg">
                            Convenient and easy to access
                        </p>
                    </div>

                    <div className="absolute left-1.5 sm:left-6 3xs:left-3 4xs:left-4 md:left-7 lg:left-4 xl:left-8 -top-5 4xs:-top-4 3xs:-top-7 sm:-top-8 md:-top-12 lg:-top-10 xl:-top-14 h-2.5 w-2.5 4xs:h-3 4xs:w-3 3xs:h-4 3xs:w-4 xs:h-6 xs:w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-8 lg:w-8 xl:h-11 xl:w-11 bg-gradient-to-tl from-secondary to-primary rounded-full"></div>

                    <div className="absolute left-0.5 sm:left-1.5 4xs:left-1 top-7 4xs:top-8 3xs:top-10 xs:top-12 sm:top-14 md:top-16 xl:left-1 xl:top-20 h-2.5 w-2.5 4xs:h-3 4xs:w-3 3xs:h-4 3xs:w-4 xs:h-6 xs:w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-6 lg:w-6 xl:h-9 xl:w-9  bg-gradient-to-tl from-secondary to-primary rounded-full"></div>

                    <div className="absolute left-0.5 4xs:left-2.5 3xs:left-2 sm:left-3.5 md:left-4 lg:left-2 xl:left-5 -top-2 xs:top-1.5 md:-top-5 lg:-top-3 xl:-top-6 sm:-top-1.5 h-1.5 w-1.5 4xs:h-2 4xs:w-2 xs:h-3 xs:w-3 sm:h-3 sm:w-3 md:w-4 md:h-4 lg:h-3 lg:w-3 xl:h-4 xl:w-4 bg-gradient-to-tl from-secondary to-primary rounded-full"></div>

                    <div className="absolute left-3 4xs:left-4 3xs:left-5 xs:left-7 sm:left-8 md:left-9 lg:left-7 top-8 4xs:top-10 3xs:top-12 xs:top-16 sm:top-18 md:top-22 lg:top-20 xl:left-10 xl:top-24 3xs:h-2 3xs:w-2 h-1.5 w-1.5 xs:h-3 xs:w-3 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-3 lg:w-3 xl:h-4 xl:w-4 bg-gradient-to-tl from-secondary to-primary rounded-full"></div>

                    <div className="absolute lg:left-42 xs:left-34 sm:left-40 3xs:left-26 4xs:left-22 left-18 top-0.5 4xs:top-1 sm:-top-0.5 xs:-top-0.5 3xs:-top-0 lg:top-1 md:left-48 md:-top-0.5 xl:left-52 xl:top-0 h-2.5 w-2.5 4xs:h-3 4xs:w-3 3xs:h-4 3xs:w-4 xs:h-6 xs:w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-6 lg:w-6 xl:h-9 xl:w-9 bg-gradient-to-tl from-secondary to-primary rounded-full"></div>
                    
                    <div className="w-full lg:w-2/3">
                        <img src={image} alt="ad"/>
                    </div>
                    <div className="flex flex-col gap-8 w-10/12 justify-center lg:w-1/4 lg:mx-auto">
                        <h2 className="text-2xl font-semibold text-secondary">
                            How to Apply
                        </h2>
                        <p className="flex flex-row place-items-center relative">
                            <span className="absolute font-bold rounded-full bg-slate-200 w-4 text-primary text-xs text-center -top-0 4xs:-top-1 -left-1">
                                1
                            </span>
                            <img src={step1} className="mr-2 w-12" alt="step1"/> Fill out
                            form and put all necessary information.
                        </p>
                        <p className="flex flex-row place-items-center relative">
                            <span className="absolute font-bold rounded-full bg-slate-200 w-4 text-primary text-xs text-center -top-1 -left-1">
                                2
                            </span>
                            <img src={step2} className="mr-2 w-12"  alt="step2"/> Submit the
                            form.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
