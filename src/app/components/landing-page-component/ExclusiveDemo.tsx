import { Button, Input } from "@/app/components/index";

export const ExclusiveDemo = () => {
  return (
    <>
      <div>
        <section
          className="bg-[url(/images/exclusive_bg.png)] 
bg-no-repeat bg-cover h-[750px] flex justify-center py-10 md:h-fit md:py-20"
        >
          <div className="lg:flex justify-between items-center w-[400px] md:w-[800px] mx-4 lg:w-[988px] xl:w-[1084px]">
            <div className="flex flex-col justify-center w-full lg:w-1/2 ">
              <div className="text-[#11453B]">
                <h3 className="font-heading  font-normal text-[#11453B] text-[32px] text-center px-4 mb-2 lg:text-left lg:text-[42px] lg:px-0 lg:max-w-[300px]">
                  Get an Exclusive Demo of Eazipay
                </h3>
              </div>
              <p className="text-[#515251] text-[14px] md:max-w-[300px] mx-auto font-normal text-center mb-4 lg:text-left lg:mx-0">
                Our greatest priority is to put you and your business first.
                Let&apos;s show you how we can help.
              </p>
            </div>

            <div className="relative w-full md:w-2/3 md:mx-auto lg:w-1/2 h-fit shadow-lg p-6 bg-white">
              <div className="text-center">
                <h3 className="font-semibold text-[28px] mb-2">
                  First things first
                </h3>
                <p>
                  We want to serve you better. Tell us a bit about yourself or
                  company
                </p>
              </div>
              <div className="text-white text-center flex gap-2 border-[.38px] border-gray-300 mt-4  mb-8 rounded-xl p-2 ">
                <p className="p-2 bg-[#11453B] rounded-xl w-1/2">Individual</p>
                <p className="p-2 bg-[#F2F1F1] text-[#11453B] rounded-xl w-1/2">
                  Company
                </p>
              </div>
              <form>
                <Input
                  placeholder="First Name"
                  type="text"
                  className="rounded-full"
                  inputName="First Name"
                />
                <Input
                  placeholder="Last Name"
                  type="text"
                  className="rounded-full"
                  inputName="Last Name"
                />
                <Input
                  placeholder="Email"
                  type="email"
                  className="rounded-full"
                  inputName="First Name"
                />
                <Input
                  placeholder="Job Title"
                  type="text"
                  className="rounded-full"
                  inputName="Job Title"
                />
                <Input
                  placeholder="Company Size"
                  type="text"
                  className="rounded-full"
                  inputName="Company Size"
                />
                <Button
                  btnText="Request Demo"
                  className="bg-[#11453B] text-white rounded-full w-full"
                />
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
