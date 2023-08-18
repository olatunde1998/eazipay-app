import { CalenderIcon, EyeIcon, GenderBarIcon } from "../../../../assets/icons";

interface shortCardIconProps {
  className?: string;
  cardTitle?: string;
  cardIcon?: any;
}

interface walletCardIconProps {
  className?: string;
  cardTitle?: string;
  cardIcon?: any;
}

interface payrollCardIconProps {
  className?: string;
  cardTitle?: string;
  cardIcon?: any;
}

export const ShortCard = ({
  className,
  cardTitle,
  cardIcon,
}: shortCardIconProps) => {
  return (
    <>
      <main className="w-full md:mt-0  text-gray-600">
        <div className="h-[112px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]  flex flex-col items-center justify-center  rounded-2xl ">
          <div className={`${className} rounded-lg w-fit p-4`}>{cardIcon}</div>
          <p className="mt-2">{cardTitle}</p>
        </div>
      </main>
    </>
  );
};

export const WalletCard = ({
  className,
  cardTitle,
  cardIcon,
}: walletCardIconProps) => {
  return (
    <>
      <main
        className="rounded-xl md:mt-0 max-w-[800px] h-fit py-8 px-4 text-white bg-[url(/images/walletcard_bg.svg)] 
bg-no-repeat bg-cover bg-center"
      >
        <div>
          <p>Wallet Balance</p>
        </div>
        <div className="md:flex md:justify-between md:items-center">
          <p className="font-bold flex ">
            N12,560,098.00{" "}
            <span className="ml-4">
              <EyeIcon width={24} height={24} />
            </span>
          </p>
          <div className="bg-[#D9EBCD] rounded-2xl mb-2 w-fit p-2 text-[#11453B]">
            Fund Wallet
          </div>
        </div>
      </main>
    </>
  );
};

export const PayrollCard = ({
  className,
  cardTitle,
  cardIcon,
}: payrollCardIconProps) => {
  return (
    <>
      <main className="mt-8 md:w-[250px] md:mt-0 shadow-lg pb-4 rounded-b-2xl">
        <section className="border-b-[.08px] border-gray-400 h-1/2 pb- ">
          <div className="bg-[#D9EBCD] text-center p-4 rounded-t-2xl">
            <p className="font-bold">Next Payroll</p>
          </div>
          {/* date and calender */}
          <div className="text-center pt-4">
            <div>
              <p className="flex gap-2 items-center justify-center">
                <span>
                  <CalenderIcon width={24} height={24} />
                </span>
                Friday
              </p>
              <p className="font-bold my-2">09/11/2022</p>
            </div>
          </div>
        </section>
        {/* Total Employee */}
        <section className="h-1/2 px-4 py-2">
          <div>
            <p>Total Employee</p>
            <p className="font-bold text-[28px] md:text-[28px]">64</p>
            <GenderBarIcon width={245} height={24} className="w-full" />
          </div>
          <div className="flex">
            <div className="w-1/2">
              <p>Male</p>
              <p>32</p>
            </div>
            <div className="w-1/2">
              <p>Female</p>
              <p>32</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
