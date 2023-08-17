"use client";
import { Button, Input } from "@/app/components/index";
import AuthNav from "@/app/components/layouts/AuthNav";
import { useState } from "react";
import {
  AppleIcon,
  EazipayIcon,
  GooglePlayIcon,
  HeroImage,
} from "../../assets/icons";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Home() {
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [dropNav, setDropNav] = useState(false);

  const heroImage = <HeroImage width={500} height={500} />;

  const handleNavToggle = () => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  };
  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <EazipayIcon width={100} />
          </a>
          <div className="flex gap-2 md:order-2">
            <button
              type="button"
              className="text-[#11453B] bg-white border-[.35px] border-[#11453B] hover:bg-white font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-white dark:hover:bg-white dark:focus:ring-white hidden lg:block"
            >
              Login
            </button>
            <button
              type="button"
              className="text-white bg-[#11453B] hover:bg-[#11453B] font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#11453B] dark:hover:bg-[#11453B] dark:focus:ring-[#11453B] hidden lg:block"
            >
              Register
            </button>
            <div className="lg:hidden">
              {!dropNav && (
                <HiMenu
                  className="text-2xl transition"
                  onClick={() => {
                    setDropNav(true);
                  }}
                />
              )}
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-ful md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className=" p-4 md:p-0 mt-4 font-medium  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 hidden lg:flex flex-col ">
              {routes.map((route, index) => (
                <li key={index} className="block py-2 pl-3 pr-4 ">
                  <Link href={route.href}>{route.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:hidden text-black">
          {dropNav && (
            <div className="fixed top-0 right-0 w-[80%] h-full bg-white z-30">
              <div className="flex justify-between p-4">
                <a href="#" className="flex items-center ">
                  <EazipayIcon width={100} />
                </a>
                <HiX
                  className="text-2xl transition"
                  onClick={() => {
                    setDropNav(false);
                  }}
                />
              </div>
              <ul className="flex flex-col p-4 font-medium rounded-lg space-y-4">
                {routes.map((route, index) => (
                  <li key={index} className="block py-2 pl-3 pr-4">
                    <Link href={route.href}>{route.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* <main className="min-h-screen max-w-[1300px] mx-auto bg-white  text-gray-600  p-4 px-6 md:p-8"> */}
      <main className="bg-white text-gray-600 min-h-screen ">
        {/* Hero section */}
        <section className="py-32   lg:pl-16 lg:grid justify-items-end">
          <div className="max-w-[1300px] h-fit lg:grid grid-flow-col justify-between">
            <div className="flex flex-col justify-center lg:w-1/2">
              <div className="max-w-full md:max-w-[400px] mx-auto lg:max-w-none ">
                <div className="text-[#11453B] px-4 text-center justify-center flex flex-col items-center lg:text-left">
                  <h3 className="text-[32px] lg:text-[42px] font-normal font-heading  mb-6">
                    Run your payroll <br />{" "}
                    <span className="text-[#B4A572]">easily </span>
                    in <span className="text-[#EA4E4B]">seconds</span>{" "}
                  </h3>
                  <p className="text-[#515251] text-[14px] font-normal ">
                    We&apos;ve built an all-inclusive simple solution for
                    individual and businesses to manage staff, pay salaries,
                    bills, and relevant taxes all at once.
                  </p>
                  <Link href="/dashboard">
                    <Button
                      className="mt-6 bg-[#11453B] text-white text-[12px] font-normal w-[250px] p-4 rounded-full"
                      btnText="Start Using Free, Forever"
                    />
                  </Link>
                </div>
                <div className="mt-16 px-4 lg:px-2">
                  <p className="text-center">Download the Eazipay App</p>
                  <div className="flex gap-2">
                    <div className="bg-white shadow-md flex items-center gap-2 p-3 w-[200px] rounded-lg">
                      <div className="bg-gray-400 rounded-full w-fit h-fit p-2">
                        <AppleIcon
                          width={24}
                          height={24}
                          className="w-[18px] h-[18px]"
                        />
                      </div>
                      <div>
                        <p className="text-[10px] md:text-[12px]">
                          Download on the
                        </p>
                        <p className="font-semibold text-[12px]">Appstore</p>
                      </div>
                    </div>

                    <div className="bg-white shadow-md flex items-center gap-2 p-3 w-[180px] rounded-lg">
                      <div className="bg-gray-400 rounded-full w-fit h-fit p-2">
                        <GooglePlayIcon
                          width={24}
                          height={24}
                          className="w-[12px] h-[12px]"
                        />
                      </div>
                      <div>
                        <p className="text-[12px]">Get On</p>
                        <p className="font-semibold text-[12px]">Google Play</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:w-full lg:block grid place-items-center border ">
              <HeroImage
                width={300}
                height={200}
                className="w-[200%] h-[110%] object-cover overflow-clip"
              />
            </div>
          </div>
        </section>

        {/* Individual business section */}
        <section
          className="bg-[url(/images/individual_bg.png)] 
bg-no-repeat bg-cover h-full flex flex-col justify-center text-center p-6 md:p-24"
        >
          <div>
            <div>
              <p className="font-bold text-[#11453B] text-[32px] lg:text-[42px]">
                For Individuals and Businesses
              </p>
              <p className="text-[16px]">
                Join 200+ businesses using Eazipay&apos;s easy solution.
              </p>
            </div>
            <div className=" lg:flex justify-center mt-16">
              {/* card one */}
              <div className="bg-white text-[#11453B] my-4 lg:bg-[#11453B] lg:text-white lg:w-[400px] p-4 rounded-lg text-left ">
                <p className="font-bold text-center mb-4 md:text-left md:px-2">
                  Tamper-proof Payroll for LIfe
                </p>
                <p className="text-[12px] p-2">
                  Your staff payroll history is kept in one place forever.
                </p>
                <p className="text-[12px] p-2">
                  No more excel sheet or manual records.
                </p>
                <p className="text-[12px] p-2">
                  Download your payroll history anytime you need it.
                </p>
              </div>
              {/* card two */}
              <div className="bg-white text-[#11453B] my-4 lg:bg-[#11453B] lg:text-white lg:w-[400px] p-4 rounded-lg text-left ">
                <p className="font-bold text-center mb-4 md:text-left md:px-2">
                  Tamper-proof Payroll for LIfe
                </p>
                <p className="text-[12px] p-2">
                  Your staff payroll history is kept in one place forever.
                </p>
                <p className="text-[12px] p-2">
                  No more excel sheet or manual records.
                </p>
                <p className="text-[12px] p-2">
                  Download your payroll history anytime you need it.
                </p>
              </div>
              {/* card three */}
              <div className="bg-white text-[#11453B] my-4 lg:bg-[#11453B] lg:text-white lg:w-[400px] p-4 rounded-lg text-left ">
                <p className="font-bold text-center mb-4 md:text-left md:px-2">
                  Tamper-proof Payroll for LIfe
                </p>
                <p className="text-[12px] p-2">
                  Your staff payroll history is kept in one place forever.
                </p>
                <p className="text-[12px] p-2">
                  No more excel sheet or manual records.
                </p>
                <p className="text-[12px] p-2">
                  Download your payroll history anytime you need it.
                </p>
              </div>
            </div>
            <p className="text-[16px] my-14  md:mt-20   mx-auto max-w-[500px]">
              We are happy to answer your queries. Please, reach us at{" "}
              <span className="text-[#EA4E4B]">hello@myeazipay.com</span> and
              expect our response shortly after.
            </p>
          </div>
        </section>

        {/* How Eazipay Work */}
        <section className="bg-white py-20 flex flex-col justify-center text-center ">
          <div>
            <p className="font-bold text-[#11453B] text-[32px] px-4 lg:text-[42px]">
              How Eazipay Works
            </p>
            <p className="text-[16px]">Get started in 3 simple steps.</p>
          </div>
          <div className="lg:flex justify-between  lg:w-[800px] mx-auto mt-16">
            <div className="relative w-[200px] mx-auto h-[300px]  lg:w-[400px] lg:h-[480px]">
              <Image
                src="/images/how_eazipay_work_bg.png"
                fill
                alt="how it eazipay works"
              />
            </div>
            <div className="px-6">
              <div className="text-left mb-6 mt-12 lg:mt-0">
                <div className="bg-[#11453B] w-fit py-3 px-5 mb-4 text-white h-[50px] justify-center flex items-center text-[24px] font-bold rounded-xl">
                  1
                </div>
                <div className="gap-4 flex flex-col">
                  <p className="font-bold">Create your free account</p>
                  <p className="text-[14px] max-w-[300px]">
                    Click here to set up your Eazipay account.
                  </p>
                </div>
              </div>
              <div className="text-left mb-6">
                <div className="bg-[#F2F1F1] w-fit py-3 px-5 mb-4  h-[50px] justify-center flex items-center text-[24px] font-bold rounded-xl">
                  2
                </div>
                <div className="gap-4 flex flex-col">
                  <p className="font-bold">Add Employee Data</p>
                  <p className="text-[14px] max-w-[300px]">
                    Your employee information is 100 safe and secure
                  </p>
                </div>
              </div>
              <div className="text-left mb-6">
                <div className="bg-[#F2F1F1] w-fit py-3 px-5 mb-4  h-[50px] justify-center flex items-center text-[24px] font-bold rounded-xl">
                  3
                </div>
                <div className="gap-4 flex flex-col">
                  <p className="font-bold">Prepare your Transaction</p>
                  <p className="text-[14px] max-w-[300px]">
                    Run payroll Bulk Salaries and Compliance are done at once.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment section */}
        <section className="bg-[url(/images/payment_bg.png)] bg-no-repeat bg-cover h-[750px] flex justify-center w-full">
          <div className="justify-center flex flex-col md:justify-center  lg:flex lg:flex-row lg:justify-between  items-center lg:w-[800px] mx-auto">
            <div className="flex flex-col justify-center w-full md:pt-8 lg:pt-0 lg:w-1/2  ">
              <div className="text-[#11453B]">
                <h3 className="font-bold text-[#11453B] text-[32px] text-center px-2 mb-6 lg:text-left lg:text-[42px]">
                  Free forever for your
                  <span className="text-[#EA4E4B] ml-2">
                    salary payment
                  </span>{" "}
                </h3>
              </div>

              <div className="mt-4 hidden flex-col justify-center items-center lg:flex">
                <p className="text-center lg:text-left">
                  Subscribe to the Eazilife today.
                </p>
                <div className="gap-2 md:hidden lg:flex">
                  <div className="bg-white shadow-md flex items-center gap-2 p-3 w-[200px] rounded-lg">
                    <div className="bg-gray-400 rounded-full w-fit h-fit p-2">
                      <AppleIcon
                        width={24}
                        height={24}
                        className="w-[18px] h-[18px]"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-[12px]">
                        Download on the
                      </p>
                      <p className="font-semibold text-[12px]">Appstore</p>
                    </div>
                  </div>

                  <div className="bg-white shadow-md flex items-center gap-2 p-3 w-[180px] rounded-lg">
                    <div className="bg-gray-400 rounded-full w-fit h-fit p-2">
                      <GooglePlayIcon
                        width={24}
                        height={24}
                        className="w-[12px] h-[12px]"
                      />
                    </div>
                    <div>
                      <p className="text-[12px]">Get On</p>
                      <p className="font-semibold text-[12px]">Google Play</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-[284px] mx-auto h-[260.25px] border md:h-[400px] md:mt-6 md:w-2/3 lg:w-1/2 lg:h-[400px]">
              <Image
                src="/images/payment_image.png"
                fill
                alt="payment"
                className="h-full w-full"
              />
            </div>
            <div className="mt-4  flex flex-col  items-center lg:hidden">
              <p className="text-center lg:text-left">
                Subscribe to the Eazilife today.
              </p>
              <div className="gap-2 mt-2 flex md:flex">
                <div className="bg-white shadow-md flex items-center gap-2 p-3  rounded-lg">
                  <div className="bg-gray-400 rounded-full w-fit h-fit p-2">
                    <AppleIcon
                      width={24}
                      height={24}
                      className="w-[18px] h-[18px]"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-[12px]">
                      Download on the
                    </p>
                    <p className="font-semibold text-[12px]">Appstore</p>
                  </div>
                </div>

                <div className="bg-white shadow-md flex items-center gap-2 p-3  rounded-lg">
                  <div className="bg-gray-400 rounded-full w-fit h-fit p-2">
                    <GooglePlayIcon
                      width={24}
                      height={24}
                      className="w-[12px] h-[12px]"
                    />
                  </div>
                  <div>
                    <p className="text-[12px]">Get On</p>
                    <p className="font-semibold text-[12px]">Google Play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive section */}
        <section
          className="bg-[url(/images/exclusive_bg.png)] 
bg-no-repeat bg-cover h-[750px] flex justify-center py-10"
        >
          <div className="lg:flex justify-between items-center w-[800px] mx-4">
            <div className="flex flex-col justify-center w-full lg:w-1/2 ">
              <div className="text-[#11453B]">
                <h3 className="font-bold text-[#11453B] text-[32px] text-center px-4 mb-2 lg:text-left lg:text-[42px lg:px-0 lg:max-w-[300px]">
                  Get an Exclusive Demo of Eazipay
                </h3>
              </div>
              <p className="text-[#515251] text-[14px] md:max-w-[300px] mx-auto font-normal text-center mb-4 lg:text-left lg:mx-0">
                Our greatest priority is to put you and your business first.
                Let&apos;s show you how we can help.
              </p>
            </div>

            <div className="relative w-full md:w-2/3 md:mx-auto lg:w-1/2 h-fit shadow-lg p-6 bg-white">
              <div className="text-center">
                <h3 className="font-semibold text-[28px] mb-2">
                  First things first
                </h3>
                <p>
                  We want to serve you better. Tell us a bit about yourself or
                  company
                </p>
              </div>
              <div className="text-white text-center flex gap-2 border-[.38px] border-gray-300 mt-4  mb-8 rounded-xl p-2 ">
                <p className="p-2 bg-[#11453B] rounded-xl w-1/2">Individual</p>
                <p className="p-2 bg-[#F2F1F1] text-[#11453B] rounded-xl w-1/2">
                  Company
                </p>
              </div>
              <form>
                <Input
                  placeholder="First Name"
                  type="text"
                  className="rounded-full"
                  inputName="First Name"
                />
                <Input
                  placeholder="Last Name"
                  type="text"
                  className="rounded-full"
                  inputName="Last Name"
                />
                <Input
                  placeholder="Email"
                  type="email"
                  className="rounded-full"
                  inputName="First Name"
                />
                <Input
                  placeholder="Job Title"
                  type="text"
                  className="rounded-full"
                  inputName="Job Title"
                />
                <Input
                  placeholder="Company Size"
                  type="text"
                  className="rounded-full"
                  inputName="Company Size"
                />
                <Button
                  btnText="Request Demo"
                  className="bg-[#11453B] text-white rounded-full w-full"
                />
              </form>
            </div>
          </div>
        </section>

        {/* footer */}
        <section className="mt-64 shadow-lg bg-[#FEE9E7] p-4 md:p-12">
          <div className="grid md:flex  max-w-[960px] mx-auto">
            <div className="md:w-1/2  order-last md:order-first">
              <a href="#" className="flex items-center ">
                <EazipayIcon width={100} />
              </a>
              <p>Copyright © 2023 Eazipay.</p>
              <p>All rights reserved</p>
            </div>

            <div className="md:flex justify-between w-full md:w-2/3 ">
              <div>
                <p className="font-semibold">Product</p>
                <p>Indidual</p>
                <p>Businesses</p>
                <p>Request Demo</p>
                <p>Pricing</p>
              </div>
              <div>
                <p className="font-semibold">Product</p>
                <p>Indidual</p>
                <p>Businesses</p>
                <p>Request Demo</p>
                <p>Pricing</p>
              </div>{" "}
              <div>
                <p className="font-semibold">Product</p>
                <p>Indidual</p>
                <p>Businesses</p>
                <p>Request Demo</p>
                <p>Pricing</p>
              </div>{" "}
              <div>
                <p className="font-semibold">Product</p>
                <p>Indidual</p>
                <p>Businesses</p>
                <p>Request Demo</p>
                <p>Pricing</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
