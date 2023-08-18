import {
  EmployeeIcon,
  QuickLoanIcon,
  SalaryIcon,
  SendIcon,
} from "../../../../assets/icons";
import { PayrollCard, ShortCard, WalletCard } from "@/app/components/index";

export const Card = () => {
  return (
    <>
      <div>
        <section className="md:flex lg:gap-6 ">
          <div className="w-full">
            {/* Wallet Card  */}
            <div className="">
              <WalletCard />
            </div>
            {/* short Cards  */}
            <div className="md:flex flex-wrap lg:grid lg:grid-cols-2 md:space-x-2 xl:flex xl:space-x-1 md:w-fit xl:mt-12  lg:w-full xl:justify-between">
              <div className="mt-8 md:mt-3 w-full md:w-[200px] lg:w-[200px] xl:w-[250px]">
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
              <div className="mt-8 md:mt-3 w-full md:w-[200px] xl:w-[230px]">
                <ShortCard
                  cardIcon={<SalaryIcon width={28} height={28} />}
                  cardTitle="Pay Salaries"
                  className="bg-[#F0F7EB]"
                />
              </div>
              <div className="mt-8 md:mt-3 w-full md:w-[200px] xl:w-[230px]">
                <ShortCard
                  cardIcon={
                    <SendIcon
                      className=""
                      color="#219653"
                      width={20}
                      height={20}
                    />
                  }
                  cardTitle="Pay Compliances"
                  className="bg-[#E0F8EA]"
                />
              </div>
              <div className="mt-8 md:mt-3 w-full md:w-[200px] xl:w-[230px]">
                <ShortCard
                  cardIcon={
                    <QuickLoanIcon
                      className=""
                      color="#2F80ED"
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
      </div>
    </>
  );
};
