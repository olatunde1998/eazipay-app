"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Image from "next/image";
import { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { ComplianceIcon, DashboardIcon, EmployeeIcon, OpenBookIcon, PayrollIcon, QuickLoanIcon, SettingsIcon, SupportIcon, WalletIcon } from "../../../../assets/icons";


export const AuthSidebar = () => {
  const pathname = usePathname();
   const [showReportsDropdown, setShowReportsDropdown] = useState(true); 

  const tabs = [
    {
      name: "Workspace",
      href: "/workspace",
      icon: <DashboardIcon width={24}/>,
    },
    {
      name: "Client",
      href: "/client",
      icon: <WalletIcon   width={24}/>,
    },
    {
      name: "Schedule Appointment",
      href: "/schedule-appointment",
      icon: <EmployeeIcon width={24} />,
    },
    {
      name: "Payment",
      href: "/payment",
      icon: <PayrollIcon width={24} />,
    },
    {
      name: "Task",
      href: "/task",
      icon: <ComplianceIcon width={24} />,
    },
    {
      name: "Message",
      href: "/message",
      icon: <QuickLoanIcon  width={24}  />,
    },
    {
      name: "Reports",
      href: "/reports",
      icon: <OpenBookIcon width={24} />,
    },
    {
      name: "Reports",
      href: "/reports",
      icon: <SupportIcon width={24} />,
    },
    {
      name: "Reports",
      href: "/reports",
      icon: <SettingsIcon width={24} />,
    },
  ];

  return (
    <nav className="fixed top-0 z-30 bg-white h-full md:top-[70px] left-0  w-[200px]  md:w-[300px] lg:top-[70px] lg:w-[280px]">
      <div className=" mt-20 relative w-[100px] h-[90px] md:mt-0 mx-auto">
        <Image
          src="/images/brandLogo-removebg-preview.png"
          alt="company brand logo"
          fill
          className=" w-full"
        />
   
      </div>
      {tabs.map((tab) => (
        <div key={tab.href}>
          {tab.name === "Reports" || tab.name ==="Schedule Appointment" ? ( // Check if it's the "Reports" tab
            <div
              className={`flex px-5 items-center gap-x-5 cursor-pointer p-5 ${
                showReportsDropdown ? "bg-white" : ""
              }`}
              onClick={() => setShowReportsDropdown(!showReportsDropdown)}
            >
              {tab.icon}
              <span className="flex items-center">
                {tab.name}
                <BiSolidDownArrow size={12} className="text-gray-400 ml-8" />
              </span>
            </div>
          ) : (
            <Link
              href={tab.href}
              className={`flex px-5 items-center gap-x-5 cursor-pointer p-5 ${
                pathname === tab.href
                  ? "border-l-4 border-yellow-500 text-yellow-500"
                  : "bg-white"
              }`}
            >
              {tab.icon}
              {tab.name}
            </Link>
          )}

          {tab.name === "Reports" && showReportsDropdown && (
            <div className="pl-14">
              <Link href="/reports/activity-report" className="block p-3 ">
                Activity Report
              </Link>
              <Link href="/reports/task-report" className="block p-3">
                Task Report
              </Link>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default AuthSidebar;
