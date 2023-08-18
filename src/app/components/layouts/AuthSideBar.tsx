"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ComplianceIcon,
  DashboardIcon,
  DropDownIcon,
  EmployeeIcon,
  OpenBookIcon,
  PayrollIcon,
  QuickLoanIcon,
  SettingsIcon,
  SupportIcon,
  WalletIcon,
} from "../../../../assets/icons";

export const AuthSidebar = () => {
  const pathname = usePathname();
  const [showEmployeeDropdown, setShowEmployeeDropdown] = useState(false);
  const [showPayrollDropdown, setShowPayrollDropdown] = useState(false);
  const [showComplianceDropdown, setShowComplianceDropdown] = useState(false);
  const [showQuickLoanDropdown, setShowQuickLoanDropdown] = useState(false);
  const [showBookKeepingDropdown, setShowBookKeepingDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

  const tabs = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <DashboardIcon width={24} />,
    },
    {
      name: "Wallet",
      href: "/wallet",
      icon: <WalletIcon width={24} />,
    },
    {
      name: "Employee Management",
      href: "/employee-management",
      icon: <EmployeeIcon color="#515251" width={36} />,
    },
    {
      name: "Payroll",
      href: "/payroll",
      icon: <PayrollIcon width={28} />,
    },
    {
      name: "Compliance",
      href: "/compliance",
      icon: <ComplianceIcon width={28} />,
    },
    {
      name: "Quick Loan",
      href: "/quick-loan",
      icon: <QuickLoanIcon width={28} color="#515251" />,
    },
    {
      name: "Book Keeping",
      href: "/book-keeping",
      icon: <OpenBookIcon width={28} />,
    },
    {
      name: "Support",
      href: "/support",
      icon: <SupportIcon width={24} />,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <SettingsIcon width={28} />,
    },
  ];

  return (
    <nav className="fixed top-0 z-40 h-full md:top-[70px] left-0  w-[200px]  md:w-[300px] lg:top-[70px] lg:w-[260px]">
      <div className="relative w-[262px] right-[9px] top-[-70px]  h-[150px]">
        <Image
          src="/images/sidebar_img.png"
          alt="company brand logo"
          fill
          className=" w-fit h-fit"
        />
      </div>
      {tabs.map((tab) => (
        <div key={tab.href}>
          {tab.name === "Dashboard" ||
          tab.name === "Support" ||
          tab.name == "Wallet" ? ( // Check if it's the "Reports" tab
            <Link
              href={tab.href}
              className={`flex border-b-[.08px] border-gray-300 px-5 items-center gap-x-5 cursor-pointer p-5 text-[#11453B] ${
                pathname === tab.href
                  ? "border-l-4 border-[#11453B] text-[#11453B] bg-[#F0F7EB]"
                  : "bg-white"
              }`}
            >
              {tab.icon}
              {tab.name}
            </Link>
          ) : (
            <div
              className={`flex border-b-[.08px] border-gray-300 px-5 items-center gap-x-5 cursor-pointer p-5 ${
                // Use the appropriate dropdown state
                (tab.name === "Employee Management" && showEmployeeDropdown) ||
                (tab.name === "Payroll" && showPayrollDropdown) ||
                (tab.name === "Compliance" && showComplianceDropdown) ||
                (tab.name === "Quick Loan" && showQuickLoanDropdown) ||
                (tab.name === "Book Keeping" && showBookKeepingDropdown) ||
                (tab.name === "Settings" && showSettingsDropdown)
                  ? "border-l-4 border-[#11453B] text-[#11453B] bg-[#F0F7EB]"
                  : "bg-white"
              }`}
              onClick={() => {
                // Use the appropriate setter function
                if (tab.name === "Employee Management") {
                  setShowEmployeeDropdown(!showEmployeeDropdown);
                } else if (tab.name === "Payroll") {
                  setShowPayrollDropdown(!showPayrollDropdown);
                } else if (tab.name === "Compliance") {
                  setShowComplianceDropdown(!showComplianceDropdown);
                } else if (tab.name === "Quick Loan") {
                  setShowQuickLoanDropdown(!showQuickLoanDropdown);
                } else if (tab.name === "Book Keeping") {
                  setShowBookKeepingDropdown(!showBookKeepingDropdown);
                } else if (tab.name === "Settings") {
                  setShowSettingsDropdown(!showSettingsDropdown);
                }
              }}
            >
              {tab.icon}
              <span className="flex text-[#11453B] items-center justify-between  w-full">
                {tab.name}

                <DropDownIcon width={12} className="cursor-pointer" />
              </span>
            </div>
          )}

          {tab.name === "Employee Management" && showEmployeeDropdown && (
            <div className="pl-14 text-[#11453B]">
              <Link
                href="/employee-management/manager-one"
                className="block p-3 "
              >
                Manager One
              </Link>
              <Link
                href="/employee-management/manager-two"
                className="block p-3"
              >
                Manager Two
              </Link>
            </div>
          )}

          {tab.name === "Payroll" && showPayrollDropdown && (
            <div className="pl-14 text-[#11453B]">
              <Link href="/payroll/roll-one" className="block p-3 ">
                Roll One
              </Link>
              <Link href="/payroll/roll-two" className="block p-3">
                Roll Two
              </Link>
            </div>
          )}
          {tab.name === "Compliance" && showComplianceDropdown && (
            <div className="pl-14 text-[#11453B]">
              <Link href="/compliance/comply-one" className="block p-3 ">
                Comply One
              </Link>
              <Link href="/compliance/comply-one" className="block p-3">
                Comply Two
              </Link>
            </div>
          )}

          {tab.name === "Quick Loan" && showQuickLoanDropdown && (
            <div className="pl-14 text-[#11453B]">
              <Link href="/quick-loan/loan-one" className="block p-3 ">
                Loan One
              </Link>
              <Link href="/quick-loan/loan-two" className="block p-3">
                Loan Two
              </Link>
            </div>
          )}

          {tab.name === "Book Keeping" && showBookKeepingDropdown && (
            <div className="pl-14 text-[#11453B]">
              <Link href="/book-keeping/book-one" className="block p-3 ">
                Book One
              </Link>
              <Link href="/book-keeping/book-two" className="block p-3">
                Book Two
              </Link>
            </div>
          )}
          {tab.name === "Settings" && showSettingsDropdown && (
            <div className="pl-14 text-[#11453B]">
              <Link href="/settings/profile-setting" className="block p-3 ">
                Profile Settings
              </Link>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default AuthSidebar;
