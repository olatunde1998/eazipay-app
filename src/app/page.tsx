"use client";
import { AuthLayout } from "@/app/components/index";
import AuthNav from "@/app/components/layouts/AuthNav";
import { useState } from "react";

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
      <main className="min-h-screen bg-gray-400  text-gray-600  p-4 px-6 md:p-8"></main>
    </>
  );
}
