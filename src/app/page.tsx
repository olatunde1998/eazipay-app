"use client";
import {
  Business,
  ExclusiveDemo,
  Footer,
  Hero,
  HowItWorks,
  SalaryPayment,
} from "@/app/components/index";
import { useState } from "react";
import {
  EazipayIcon,
  HeroImage,
} from "../../assets/icons";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

const routes = [
  {
    name: "Individual",
    href: "/dashboard",
  },
  {
    name: "Business",
    href: "/dashboard",
  },
  {
    name: "Pricing",
    href: "/dashboard",
  },
  {
    name: "Set your payroll",
    href: "/dashboard",
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
      <nav className="bg-white  fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-[1100px] mx-auto p-4 flex justify-between lg:flex lg:justify-between">
          <div className="flex gap-20">
            <a href="#" className="flex items-center">
              <EazipayIcon width={100} />
            </a>

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
          {/* buttons */}
          <div className="flex gap-2 md:order-2">
            <Link href="/dashboard">
              <button
                type="button"
                className="text-[#11453B] bg-white border-[.35px] border-[#11453B] hover:bg-white font-medium rounded-full text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-white dark:hover:bg-white dark:focus:ring-white hidden lg:block lg:w-[100px] xl:w-[180px]"
              >
                Login
              </button>
            </Link>
            <Link href="/dashboard">
              <button
                type="button"
                className="text-white bg-[#11453B] hover:bg-[#11453B] font-medium rounded-full text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#11453B] dark:hover:bg-[#11453B] dark:focus:ring-[#11453B] hidden lg:block  lg:w-[100px] xl:w-[180px]"
              >
                Register
              </button>
            </Link>
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

      <main className="bg-white text-gray-600 min-h-screen ">
        <Hero />
        <Business />
        <HowItWorks />
        <SalaryPayment />
        <ExclusiveDemo />
        <Footer />
      </main>
    </>
  );
}
