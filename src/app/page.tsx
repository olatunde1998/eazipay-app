"use client";
import {
  AuthLayout,
  HeaderCrumb,
  PayrollCard,
  ShortCard,
  WalletCard,
} from "@/app/components/index";
import { EmployeeIcon } from "../../assets/icons";

export default function Home() {
  return (
    <>
      <AuthLayout>
        <main className="min-h-screen  text-gray-600  p-4 px-6 md:p-8">
          <HeaderCrumb prevLink="Welcome to Abasiama" nextLink="" />
          <p className="my-4 text-gray-400 text-[12px] md:text-[18px]">
            Pay and manage your employee in minutes
          </p>

{/* card component */}
          <div className="md:flex lg:gap-6">
            <div className="max-w-[820px]">
              {/* Wallet Card  */}
              <div className="">
                <WalletCard />
              </div>
              {/* short Cards  */}
              <div className="md:flex flex-wrap w-fit">
                <div className="mt-16">
                  <ShortCard
                    cardIcon={
                      <EmployeeIcon
                        className=""
                        color="#EA4E4B"
                        width={24}
                        height={24}
                      />
                    }
                    cardTitle="Add Employee"
                    className="bg-[#FFEDEC]"
                  />
                </div>
                <div className="mt-16">
                  <ShortCard
                    cardIcon={
                      <EmployeeIcon color="#EA4E4B" width={24} height={24} />
                    }
                    cardTitle="Pay Salaries"
                    className="bg-[#F0F7EB]"
                  />
                </div>
                <div className="mt-16">
                  <ShortCard
                    cardIcon={
                      <EmployeeIcon
                        className=""
                        color="#EA4E4B"
                        width={24}
                        height={24}
                      />
                    }
                    cardTitle="Pay Compliances"
                    className="bg-[#E0F8EA]"
                  />
                </div>
                <div className="mt-16">
                  <ShortCard
                    cardIcon={
                      <EmployeeIcon
                        className=""
                        color="#EA4E4B"
                        width={24}
                        height={24}
                      />
                    }
                    cardTitle="Quick Loan"
                    className="bg-[#EDF5FF]"
                  />
                </div>
              </div>
            </div>
            <div>
              <PayrollCard/>
            </div>
          </div>
        </main>
      </AuthLayout>
    </>
  );
}
