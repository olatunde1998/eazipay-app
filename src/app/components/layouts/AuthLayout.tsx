"use client";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AuthNav } from "./AuthNav";
import AuthSidebar from "./AuthSideBar";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  };

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <>
        <div className="relative font-Nunito">
          <div className="flex justify-between">
            <div className="min-w-[15.2rem] hidden  lg:block  md:min-w-[18.9rem]  lg:fixed">
              <AuthSidebar />
            </div>
            {openMobileSidebar && (
              <div className="min-w-[15.2rem] md:block  md:min-w-[0.01rem] ">
                <AuthSidebar />
              </div>
            )}

            <main className="w-full  bg-gray-200/40 lg:ml-64">
              <AuthNav
                onNavToggle={handleNavToggle}
                setOpenMobileSidebar={setOpenMobileSidebar}
                openMobileSidebar={openMobileSidebar}
              />
              <div className="min-h-screen  pt-16 pb-6 w-full px-0 md:px-4 md:pt-24">
                {children}
              </div>
            </main>
          </div>
        </div>
      </>
    </ErrorBoundary>
  );
};
