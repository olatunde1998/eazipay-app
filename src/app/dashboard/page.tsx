"use client";
import {
  AuthLayout,
  HeaderCrumb,
  PayrollCard,
  ShortCard,
  Table,
  WalletCard,
} from "@/app/components/index";
import { EmployeeIcon, FilterIcon } from "../../../assets/icons";

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
          <section className="md:flex lg:gap-6">
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
              <PayrollCard />
            </div>
          </section>

          {/* Recent Activities */}
          <section className="mt-20">
            <p>Recent Activities</p>
            {/* search and filter */}
            <div className="flex items-center">
              <div className="mb-2 md:p-2 md:w-full md:mb-0 md:pl-0 lg:mr-6">
                <div className="relative">
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-3 pl-10 text-sm text-[#B2B6BA] border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#DDAA33] focus:border-[#DDAA33] dark:bg-[#FBFBFB] dark:border-[#B2B6BA] dark:placeholder-gray-400 dark:text-[#B2B6BA] dark:focus:ring-[#DDAA33] dark:focus:border-[#DDAA33]"
                    placeholder="Search name, email..."
                    required
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-[#11453B] dark:text-[#11453B]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {/* filter box */}
              <div className="flex gap-2 border-2 border-gray-200 items-center  p-2 h-full rounded-lg">
                <p>
                  <FilterIcon width={18} />
                </p>
                <p>Filter</p>
              </div>
            </div>
          </section>

          {/* Activities card */}
          <section>
            <div>
              <p  className="mb-4 mt-16">Wednessday, November 09, 2022</p>
              <Table
                fullName="Badmus Kennis"
                cardTitle="Payroll"
                imgUrl="BM"
                activityHeading="Activity"
                activityContent="Paid November 2022 salary"
                employeeHeading="Employee"
                employeeContent="52"
                timeHeading="Time"
                timeContent="16:15"
              />

              <Table
                cardTitle="Employee Management"
                fullName="Badmus Kennis"
                imgUrl="BM"
                activityHeading="Activity"
                activityContent="Add new employee"
                employeeHeading="Employee"
                employeeContent="04"
              />
            </div>
            <div>
              <p  className="mb-4 mt-16">Friday, November 04, 2022</p>
              <Table
                fullName="Badmus Kennis"
                cardTitle="Bonus"
                imgUrl="BM"
                activityHeading="Activity"
                activityContent="Paid November 2022 salary"
                employeeHeading="Bonus Name"
                employeeContent="XMAS Bonus"
              />
               <Table
                fullName="Badmus Kennis"
                cardTitle="Payroll"
                imgUrl="BM"
                activityHeading="Activity"
                activityContent="Paid November 2022 salary"
                employeeHeading="Amount"
                employeeContent="11,1678,900.00"
                timeHeading="Time"
                timeContent="15:31"
              />

             
            </div>
          </section>
        </main>
      </AuthLayout>
    </>
  );
}
