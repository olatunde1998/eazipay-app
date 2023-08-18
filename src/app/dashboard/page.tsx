"use client";
import {
  Activities,
  AuthLayout,
  Card,
  HeaderCrumb,
  LineChart,
  RecentActivities,
} from "@/app/components/index";

export default function Home() {
  return (
    <>
      <AuthLayout>
        <main className="min-h-screen text-gray-600  p-4 px-6 md:p-8">
          <HeaderCrumb prevLink="Welcome to Abasiama" nextLink="" />
          <p className="my-4 text-gray-400 text-[12px] md:text-[18px]">
            Pay and manage your employee in minutes
          </p>
          <Card />
          <section>
            <LineChart className="bg-white  p-12 shadow-lg rounded-lg" />
          </section>
          <RecentActivities />
          <Activities/>
        </main>
      </AuthLayout>
    </>
  );
}
