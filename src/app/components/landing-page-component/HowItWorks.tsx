import Image from "next/image";

export const HowItWorks = () => {
  return (
    <>
      <div>
      <section className="bg-white py-20 flex flex-col justify-center text-center ">
          <div>
            <p className="text-[#11453B] text-[32px] px-4 lg:text-[42px] font-heading  font-normal">
              How Eazipay Works
            </p>
            <p className="text-[16px]">Get started in 3 simple steps.</p>
          </div>
          <div className="lg:flex justify-between  lg:w-[988px] xl:w-[1084px] mx-auto mt-16">
            <div className="relative w-[200px] mx-auto h-[300px]  lg:w-[400px] lg:h-[480px]">
              <Image
                src="/images/how_eazipay_work_bg.png"
                fill
                alt="how it eazipay works"
              />
            </div>
            <div className="px-6">
              <div className="text-left mb-6 mt-12 lg:mt-0">
                <div className="bg-[#11453B] w-fit py-3 px-5 mb-4 text-white h-[50px] justify-center flex items-center text-[24px] font-bold rounded-xl">
                  1
                </div>
                <div className="gap-4 flex flex-col">
                  <p className="font-bold">Create your free account</p>
                  <p className="text-[14px] max-w-[300px]">
                    Click here to set up your Eazipay account.
                  </p>
                </div>
              </div>
              <div className="text-left mb-6">
                <div className="bg-[#F2F1F1] w-fit py-3 px-5 mb-4  h-[50px] justify-center flex items-center text-[24px] font-bold rounded-xl">
                  2
                </div>
                <div className="gap-4 flex flex-col">
                  <p className="font-bold">Add Employee Data</p>
                  <p className="text-[14px] max-w-[300px]">
                    Your employee information is 100 safe and secure
                  </p>
                </div>
              </div>
              <div className="text-left mb-6">
                <div className="bg-[#F2F1F1] w-fit py-3 px-5 mb-4  h-[50px] justify-center flex items-center text-[24px] font-bold rounded-xl">
                  3
                </div>
                <div className="gap-4 flex flex-col">
                  <p className="font-bold">Prepare your Transaction</p>
                  <p className="text-[14px] max-w-[300px]">
                    Run payroll Bulk Salaries and Compliance are done at once.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
