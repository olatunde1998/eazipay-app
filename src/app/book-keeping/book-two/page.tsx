"use client";
import { AuthLayout, HeaderCrumb } from "@/app/components/index";
import Typed from "react-typed";

export default function Home() {
  return (
    <>
      <AuthLayout>
        <main className="min-h-screen  text-gray-600  p-4 px-6 md:p-8">
          <HeaderCrumb prevLink="Book Keeping Two" nextLink="" />
          <p className="my-4 text-gray-400 text-[12px] md:text-[18px]">
            Pay and manage your employee in minutes
          </p>

          <div className="text-center mt-40">
            <Typed
              strings={["Kindly check back in the next 24hours"]}
              typeSpeed={50}
              backSpeed={50}
              style={{ color: "rgb(236, 130, 130)" }}
              loop
            />
          </div>
        </main>
      </AuthLayout>
    </>
  );
}
