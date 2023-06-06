import React from "react";

// Bank Partners
import aub from "../../images/bank-partners/aub-logo.png"
import bdo from "../../images/bank-partners/bdo-logo.png"
import bpi from "../../images/bank-partners/bpi-logo.png"
import chinabank from "../../images/bank-partners/chinabank-logo.png"
import dbp from "../../images/bank-partners/dbp-logo.png"
import landbank from "../../images/bank-partners/landbank-logo.png"
import mscb from "../../images/bank-partners/mscb-logo.png"
import nccb from "../../images/bank-partners/nccb-logo.png"
import pnb from "../../images/bank-partners/pnb-logo.png"
import securityBank from "../../images/bank-partners/security-bank-logo.png"

// Partners
import als from "../../images/partners/als-logo.png"
import business from "../../images/partners/business-logo.png"
import cda from "../../images/partners/cda-logo.png"
import dti from "../../images/partners/dti-logo.png"
import redCross from "../../images/partners/red-cross-logo.png"
import sikap from "../../images/partners/sikap-logo.png"

// Affiliates
import cisp from "../../images/affiliates/cisp-logo.png"
import natcco from "../../images/affiliates/natcco-logo.png"
import pcci from "../../images/affiliates/pcci-logo.png"

// Footer
import logo from "../../images/logo-wide-blue.png"

export default function Footer() {
    return (
        <>
            <div className="bg-gradient-to-t from-secondary to-primary p-0 3xs:p-2 md:p-8 text-white flex flex-col gap-8 h-fit">
                <div className="flex flex-col lg:flex-row gap-4 my-4 mx-4 4xs:mx-10">
                    <div className="w-full lg:w-2/4">
                        <h2 className="pb-4 4xs:text-left text-center">
                            Bank Partners
                        </h2>
                        <div className="lg:border-r-2 h-full">
                            <div className="grid grid-cols-2 3xs:grid-cols-3 xs:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-2">
                                <a
                                    href="https://www.aub.com.ph/"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-aos="zoom-in"
                                    data-aos-duration="800"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <img
                                        src={aub}
                                        className="h-26 hover:opacity-90 4xs:mx-0 mx-auto"
                                    alt="aub"/>
                                </a>
                                <a
                                    href="https://www.bdo.com.ph/"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <img
                                        src={bdo}
                                        className="h-26 hover:opacity-90 4xs:mx-0 mx-auto"
                                    alt="bdo"/>
                                </a>
                                <a
                                    href="https://www.bpi.com.ph/"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-aos="zoom-in"
                                    data-aos-duration="1200"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <img
                                        src={bpi}
                                        className="h-26 hover:opacity-90 4xs:mx-0 mx-auto"
                                    alt="bpi"/>
                                </a>
                                <a
                                    href="https://www.chinabank.ph/"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-aos="zoom-in"
                                    data-aos-duration="1400"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <img
                                        src={chinabank}
                                        className="h-26 hover:opacity-90 4xs:mx-0 mx-auto"
                                    alt="chinabank"/>
                                </a>
                                <a
                                    href="https://www.dbp.ph/"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-aos="zoom-in"
                                    data-aos-duration="1600"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <img
                                        src={dbp}
                                        className="h-26 hover:opacity-90 4xs:mx-0 mx-auto"
                                    alt="dbp"/>
                                </a>
                                <a
                                    href="https://www.landbank.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-aos="zoom-in"
                                    data-aos-duration="1800"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <img
                                        src={landbank}
                                        className="h-26 hover:opacity-90 4xs:mx-0 mx-auto"
                                    alt="landbank"/>
                                </a>
                                <a
                                    href="https://www.mscb.com.ph/home"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-aos="zoom-in"
                                    data-aos-duration="2000"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <img
                                        src={mscb}
                                        className="h-26 hover:opacity-90 4xs:mx-0 mx-auto"
                                    alt="mscb"/>
                                </a>
                                <a
                                    href="https://www.icaap.coop/AboutUs/network-consolidated-cooperative-bank-nccb"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-aos="zoom-in"
                                    data-aos-duration="2200"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <img
                                        src={nccb}
                                        className="h-26 hover:opacity-90 4xs:mx-0 mx-auto"
                                    alt="nccb"/>
                                </a>
                                <a
                                    href="https://www.pnb.com.ph/"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-aos="zoom-in"
                                    data-aos-duration="2400"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <img
                                        src={pnb}
                                        className="h-26 hover:opacity-90 4xs:mx-0 mx-auto"
                                    alt="pnb"/>
                                </a>
                                <a
                                    href="https://www.securitybank.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-aos="zoom-in"
                                    data-aos-duration="2600"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <img
                                        src={securityBank}
                                        className="h-26 hover:opacity-90 4xs:mx-0 mx-auto"
                                    alt="security bank"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/4">
                        <h2 className="pb-4 4xs:text-left text-center">
                            Partners
                        </h2>
                        <div className="lg:border-r-2 h-full">
                            <div className="grid grid-cols-2 3xs:grid-cols-3 xs:grid-cols-4 md:grid-cols-5 lg:grid-cols-2 gap-2">
                                <a
                                    href="https://www.deped.gov.ph/als-programs/"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-aos="zoom-in"
                                    data-aos-duration="800"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <img
                                        src={als}
                                        className="h-26 hover:opacity-90 4xs:mx-0 mx-auto"
                                    alt="als"/>
                                </a>
                                <a
                                    href="https://sbcorp.gov.ph/"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <img
                                        src={business}
                                        className="h-26 hover:opacity-90 4xs:mx-0 mx-auto"
                                    alt="business"/>
                                </a>
                                <a
                                    href="https://cs.cda.gov.ph/"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-aos="zoom-in"
                                    data-aos-duration="1200"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <img
                                        src={cda}
                                        className="h-26 hover:opacity-90 4xs:mx-0 mx-auto"
                                    alt="cda"/>
                                </a>
                                <a
                                    href="https://www.dti.gov.ph/"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-aos="zoom-in"
                                    data-aos-duration="1400"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <img
                                        src={dti}
                                        className="h-26 hover:opacity-90 4xs:mx-0 mx-auto"
                                    alt="dti"/>
                                </a>
                                <a
                                    href="https://redcross.org.ph/"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-aos="zoom-in"
                                    data-aos-duration="1600"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <img
                                        src={redCross}
                                        className="h-26 hover:opacity-90 4xs:mx-0 mx-auto"
                                    alt="red cross"/>
                                </a>
                                <a
                                    href="https://sikap.ph/"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-aos="zoom-in"
                                    data-aos-duration="1800"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <img
                                        src={sikap}
                                        className="h-26 hover:opacity-90 4xs:mx-0 mx-auto"
                                    alt="sikap"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/4 ">
                        <h2 className="pb-4 4xs:text-left text-center">
                            Affiliates
                        </h2>
                        <div className="grid grid-cols-2 3xs:grid-cols-3 xs:grid-cols-4 md:grid-cols-5 lg:grid-cols-2 gap-2">
                            <a
                                href="https://1cisp.coop/"
                                target="_blank"
                                rel="noreferrer"
                                data-aos="zoom-in"
                                data-aos-duration="800"
                                data-aos-easing="ease-in-sine"
                            >
                                <img
                                    src={cisp}
                                    className="h-26 hover:opacity-90 4xs:mx-0 mx-auto"
                                alt="cisp"/>
                            </a>
                            <a
                                href="https://www.natcco.coop/"
                                target="_blank"
                                rel="noreferrer"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine"
                            >
                                <img
                                    src={natcco}
                                    className="h-26 hover:opacity-90 4xs:mx-0 mx-auto"
                                alt="natcco"/>
                            </a>
                            <a
                                href="https://www.pcci.org.ph/"
                                target="_blank"
                                rel="noreferrer"
                                data-aos="zoom-in"
                                data-aos-duration="1200"
                                data-aos-easing="ease-in-sine"
                            >
                                <img
                                    src={pcci}
                                    className="h-26 hover:opacity-90 4xs:mx-0 mx-auto"
                                alt="pcci"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 my-4 mx-4 4xs:mx-10">
                    <div className="w-full lg:w-2/4">
                        <div
                            data-aos="fade-right"
                            data-aos-duration="800"
                            data-aos-easing="ease-in-sine"
                            className="lg:w-28 border-t-2 lg:border-t-4 border-sun"
                        ></div>
                        <div className="lg:border-r-2 h-full">
                            <p
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine"
                                className="flex flex-row py-2 font-thin text-xs w-full items-center"
                            >
                                <span className="font-bold mr-2 text-sm">
                                    Email:{" "}
                                </span>
                                <a
                                    href="mailto:info@perampc.com.ph"
                                    className="hover:opacity-90"
                                >
                                    info@perampc.com.ph
                                </a>
                            </p>
                            <p
                                data-aos="fade-right"
                                data-aos-duration="1200"
                                data-aos-easing="ease-in-sine"
                                className="flex flex-row py-2 font-thin text-xs w-full items-center"
                            >
                                <span className="font-bold mr-2 text-sm">
                                    Head Office Address:{" "}
                                </span>
                                <a
                                    href="https://www.google.com/maps/place/Barangay+3,+San+Francisco,+Agusan+del+Sur/@8.5040148,125.9523292,15z/data=!3m1!4b1!4m10!1m2!2m1!1sPurok+3+Barangay+5,+San+Francisco,+Agusan+Del+Sur,+Phillipines!3m6!1s0x32fdfce8ab31e213:0x64b54d984f785779!8m2!3d8.5053806!4d125.9710266!15sCj5QdXJvayAzIEJhcmFuZ2F5IDUsIFNhbiBGcmFuY2lzY28sIEFndXNhbiBEZWwgU3VyLCBQaGlsbGlwaW5lc5IBDG5laWdoYm9yaG9vZOABAA!16s%2Fg%2F11b7ybq20d"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:opacity-90"
                                >
                                    Purok 3 Barangay 5, San Francisco, Agusan
                                    Del Sur, Phillipines
                                </a>
                            </p>
                            <p
                                data-aos="fade-right"
                                data-aos-duration="1400"
                                data-aos-easing="ease-in-sine"
                                className="flex flex-row py-2 font-thin text-xs w-full items-center"
                            >
                                <span className="font-bold mr-2 text-sm">
                                    Training Center:{" "}
                                </span>
                                <a
                                    href="https://www.google.com/maps/search/Handsome+Booulevard,+Barangay+2,+San+Francisco,+Agusan+Del+Sur,+Phillipines/@8.5063128,125.9734491,16z"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:opacity-90"
                                >
                                    Handsome Booulevard, Barangay 2, San
                                    Francisco, Agusan Del Sur, Phillipines
                                </a>
                            </p>
                            <p
                                data-aos="fade-right"
                                data-aos-duration="1600"
                                data-aos-easing="ease-in-sine"
                                className="flex flex-row py-2 font-thin text-xs w-full items-center"
                            >
                                <span className="font-bold mr-2 text-sm">
                                    Phone:{" "}
                                </span>
                                <a
                                    href="tel:839-5825"
                                    className="hover:opacity-90"
                                >
                                    (085) 839-5825
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/4">
                        <div
                            data-aos="fade-right"
                            data-aos-duration="800"
                            data-aos-easing="ease-in-sine"
                            className="w-full lg:w-28 border-t-2 lg:border-t-4 border-sun"
                        ></div>
                        <div className="lg:border-r-2 h-full">
                            <h2
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine"
                                className="pb-4 pt-2"
                            >
                                Looking for job opportunities?
                            </h2>
                            <p
                                data-aos="fade-right"
                                data-aos-duration="1200"
                                data-aos-easing="ease-in-sine"
                                className="text-xs"
                            >
                                Checkout our career vacancy!
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/4">
                        <div
                            data-aos="fade-right"
                            data-aos-duration="800"
                            data-aos-easing="ease-in-sine"
                            className="w-full lg:w-28 border-t-2 lg:border-t-4 border-sun"
                        ></div>
                        <h2
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-sine"
                            className="pb-4 pt-2"
                        >
                            Find us at
                        </h2>
                        <a
                            href="http://www.facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs hover:opacity-90"
                        >
                            <p
                                data-aos="fade-right"
                                data-aos-duration="1200"
                                data-aos-easing="ease-in-sine"
                            >
                                https://www.facebook.com/perampc.official/
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center text-center text-primary h-40">
                <div
                    data-aos="fade-out"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                    className="mx-auto my-auto"
                >
                    <a href="/landing-page">
                        <img
                            className="w-auto h-8 mx-auto"
                            src={logo}
                            alt="Pera MPC"
                        />
                    </a>
                    <p>PERA Multipurpose Cooperative (PERA MPC)</p>
                    <p>All Rights Reserved 2022&copy;</p>
                </div>
            </div>
        </>
    );
}
