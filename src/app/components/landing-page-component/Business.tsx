
export const Business = () => {
  return (
    <>
      <div>
      <section
          className="bg-[url(/images/individual_bg.png)] 
bg-no-repeat bg-cover h-full flex flex-col justify-center text-center p-6 md:p-2 lg:p-16 xl:p-24"
        >
          <div>
            <div>
              <p className="text-[#11453B] text-[32px] lg:text-[42px] font-heading  font-normal">
                For Individuals and Businesses
              </p>
              <p className="text-[16px]">
                Join 200+ businesses using Eazipay&apos;s easy solution.
              </p>
            </div>
            <div className=" lg:grid  lg:grid-cols-3 lg:max-w-[960px] mx-auto xl:max-w-[1100px]  justify-center mt-16">
              {/* card one */}
              <div className=" bg-white text-[#11453B] my-4 lg:bg-[#11453B] lg:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] lg:text-white lg:w-[330px] xl:w-[400px] lg:p-4  p-4 rounded-lg text-left lg:hover:z-20">
                <p className="font-bold text-center mb-4 md:text-left md:px-2">
                  Tamper-proof Payroll for LIfe
                </p>
                <p className="text-[12px] p-2 lg:text-[16px]">
                  Your staff payroll history is kept in one place forever.
                </p>
                <p className="text-[12px] p-2 lg:text-[16px]">
                  No more excel sheet or manual records.
                </p>
                <p className="text-[12px] p-2 lg:text-[16px]">
                  Download your payroll history anytime you need it.
                </p>
              </div>
              {/* card two */}
              <div className="bg-white text-[#11453B] my-4 lg:bg-[#11453B] lg:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] lg:right-[80px] lg:text-white lg:w-[330px] xl:w-[400px] lg:p-4 p-4 rounded-lg text-left lg:hover:z-20">
                <p className="font-bold text-center mb-4 md:text-left md:px-2">
                  All Payroll, Anytime Anywhere
                </p>
                <p className="text-[12px] p-2 lg:text-[16px]">
                  Wherever you are Eazipay has got you covered on ALL your
                  Payroll tasks.
                </p>
                <p className="text-[12px] p-2 lg:text-[16px]">
                  Whether it is Taxes, Pension insurances HMOs, trustfunds,
                  Eazipay handle all your compliamces in one place and easily,
                  in seconds!
                </p>
              </div>
              {/* card three */}
              <div className="bg-white text-[#11453B] my-4 lg:bg-[#11453B] lg:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] lg:right-[80px] lg:text-white lg:w-[330px] xl:w-[400px]  lg:p-4 p-4 rounded-lg text-left ">
                <p className="font-bold text-center mb-4 md:text-left md:px-2">
                  Payroll in Seconds
                </p>
                <p className="text-[12px] p-2 lg:text-[16px]">
                  Never again wil you spend more than 2 minutes on payroll.
                </p>
                <p className="text-[12px] p-2 lg:text-[16px]">
                  Just click on your staff annd bulk-pay them at once.
                </p>
                <p className="text-[12px] p-2 lg:text-[16px]">
                  Payment is done permanently.
                </p>
              </div>
            </div>
            <p className="text-[16px] my-14  md:mt-20   mx-auto max-w-[500px]">
              We are happy to answer your queries. Please, reach us at{" "}
              <span className="text-[#EA4E4B]">hello@myeazipay.com</span> and
              expect our response shortly after.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
