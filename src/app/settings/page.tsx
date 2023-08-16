"use client";
import {
  AuthLayout,
  HeaderCrumb,
} from "@/app/components/index";



export default function Home() {
    return (
        <>
          <AuthLayout>
            <main className="min-h-screen  text-gray-600  p-4 px-6 md:p-8">
              <HeaderCrumb prevLink="Settings" nextLink="" />
              <p className="my-4 text-gray-400 text-[12px] md:text-[18px]">
                Pay and manage your employee in minutes
              </p>
    
            </main>
          </AuthLayout>
        </>
      );
}
