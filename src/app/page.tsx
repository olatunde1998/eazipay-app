"use client";
import { Button, Input } from "@/app/components/index";
import AuthNav from "@/app/components/layouts/AuthNav";
import { useState } from "react";
import { AppleIcon, GooglePlayIcon, HeroImage } from "../../assets/icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  };
  return (
    <>
      <AuthNav
        onNavToggle={handleNavToggle}
        setOpenMobileSidebar={setOpenMobileSidebar}
        openMobileSidebar={openMobileSidebar}
      />
      <main className="min-h-screen max-w-[1300px] mx-auto bg-white  text-gray-600  p-4 px-6 md:p-8">
        {/* Hero section */}
        <section className="flex justify-between py-20 px-10">
          <div className="flex flex-col justify-center w-1/3">
            <div className="text-[#11453B]">
              <h3 className="text-[42px] font-bold mb-6">
                Run your payroll <span className="text-[#B4A572]">easily </span>
                in <span className="text-[#EA4E4B]">seconds</span>{" "}
              </h3>
              <p className="text-[#515251] text-[14px] font-normal">
                We&apos;ve built an all-inclusive simple solution for individual
                and businesses to manage staff, pay salaries, bills, and
                relevant taxes all at once.
              </p>
              <Link href="/dashboard">
              <Button
             
                className="mt-6 bg-[#11453B] text-white text-[12px] font-normal w-[250px] p-4 rounded-full"
                btnText="Start Using Free, Forever"
              />
              </Link>
            </div>
            <div className="mt-16">
              <p>Download the Eazipay App</p>
              <div className="flex gap-2">
                <div className="bg-white shadow-md flex gap-2 p-3 w-[200px] rounded-lg">
                  <div className="bg-gray-400 rounded-full w-fit h-fit p-2">
                    <AppleIcon width={24} height={24} />
                  </div>
                  <div>
                    <p className="text-[12px]">Download on the</p>
                    <p className="font-semibold">Appstore</p>
                  </div>
                </div>
                {/* Google Play store */}
                <div className="bg-white shadow-md flex gap-2 p-3 w-[180px] rounded-lg">
                  <div className="bg-gray-400 rounded-full w-fit h-fit p-2">
                    <GooglePlayIcon width={24} height={24} />
                  </div>
                  <div>
                    <p className="text-[12px]">Get On</p>
                    <p className="font-semibold">Google Play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <HeroImage
              width={300}
              height={200}
              className="w-full h-full"
            />
          </div>
        </section>

        {/* Individual business section */}
        <section
          className="bg-[url(/images/individual_bg.png)] 
bg-no-repeat bg-cover h-[750px] flex flex-col justify-center text-center"
        >
          <div>
            <p className="font-bold text-[#11453B] text-[38px]">
              For Individuals and Businesses
            </p>
            <p className="text-[16px]">
              Join 200+ businesses using Eazipay&apos;s easy solution.
            </p>
            <div className="flex justify-center mt-16">
              {/* card one */}
              <div className="bg-[#11453B] text-white w-[400px] p-4 rounded-lg text-left ">
                <p className="font-bold text-center mb-4">
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
              <div className="bg-[#11453B] text-white w-[400px] p-4 rounded-lg text-left ">
                <p className="font-bold text-center mb-4">
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
              <div className="bg-[#11453B] text-white w-[400px] p-4 rounded-lg text-left ">
                <p className="font-bold text-center mb-4">
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
            <p className="text-[16px] mt-20  mx-auto max-w-[500px]">
              We are happy to answer your queries. Please, reach us at{" "}
              <span className="text-[#EA4E4B]">hello@myeazipay.com</span> and
              expect our response shortly after.
            </p>
          </div>
        </section>

        {/* How Eazipay Work */}
        <section className="bg-white py-20 flex flex-col justify-center text-center">
          <div>
            <p className="font-bold text-[#11453B] text-[38px]">
              How Eazipay Works
            </p>
            <p className="text-[16px]">Get started in 3 simple steps.</p>
          </div>
          <div className="flex justify-between  w-[800px] mx-auto mt-16">
            <div className="relative w-[400px] h-[480px]">
              <Image
                src="/images/how_eazipay_work_bg.png"
                fill
                className="w-[400px] h-[600px]"
                alt="how it eazipay works"
              />
            </div>
            <div>
              <div className="text-left mb-6">
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
        <section
          className="bg-[url(/images/payment_bg.png)] 
bg-no-repeat bg-cover h-[750px] flex justify-center "
        >
          <div className="flex justify-between items-center w-[800px] mx-auto">
            <div className="flex flex-col justify-center w-1/2 ">
              <div className="text-[#11453B]">
                <h3 className="text-[42px] font-bold mb-6">
                  Free forever for your
                  <span className="text-[#EA4E4B] ml-2">salary payment</span>{" "}
                </h3>
              </div>
              <div className="mt-8">
                <p>Subscribe to the Eazilife today</p>
                <div className="flex gap-2">
                  <div className="bg-white flex gap-2 p-3 w-[200px] rounded-lg">
                    <div className="bg-gray-400 rounded-full w-fit h-fit p-2">
                      <AppleIcon width={24} height={24} />
                    </div>
                    <div>
                      <p className="text-[12px]">Download on the</p>
                      <p className="font-semibold">Appstore</p>
                    </div>
                  </div>
                  {/* Google Play store */}
                  <div className="bg-white flex gap-2 p-3 w-[180px] rounded-lg">
                    <div className="bg-gray-400 rounded-full w-fit h-fit p-2">
                      <GooglePlayIcon width={24} height={24} />
                    </div>
                    <div>
                      <p className="text-[12px]">Get On</p>
                      <p className="font-semibold">Google Play</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-1/2 h-[400px]">
              <Image src="/images/payment_image.png" fill alt="payment" />
            </div>
          </div>
        </section>

        {/* Exclusive section */}
        <section
          className="bg-[url(/images/exclusive_bg.png)] 
bg-no-repeat bg-cover h-[750px] flex justify-center"
        >
          <div className="flex justify-between items-center w-[800px] mx-auto">
            <div className="flex flex-col justify-center w-1/2 ">
              <div className="text-[#11453B]">
                <h3 className="text-[42px] font-bold mb-6">
                  Get an Exclusive Demo of Eazipay
                </h3>
              </div>
              <p className="text-[#515251] text-[14px] font-normal">
                Our greatest priority is to put you and your business first.
                Let&apos;s show you how we can help.
              </p>
            </div>

            <div className="relative w-1/2 h-fit shadow-lg p-6 bg-white">
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
      </main>
    </>
  );
}
