import Link from "next/link";
import { AppleIcon, GooglePlayIcon, HeroImage } from "../../../../assets/icons";
import Image from "next/image";

export const SalaryPayment = () => {
  return (
    <>
      <div>
      <section className="bg-[url(/images/payment_bg.png)] bg-no-repeat bg-cover h-[750px] flex justify-center w-full ">
          <div className="justify-center flex flex-col md:justify-center  lg:flex lg:flex-row lg:justify-between  items-center lg:w-[988px] xl:w-[1084px] mx-auto">
            <div className="flex flex-col justify-center w-full md:pt-8 lg:pt-0 lg:w-1/2  ">
              <div className="text-[#11453B]">
                <h3 className="font-heading  font-normal text-[#11453B] text-[32px] text-center px-2 mb-6 lg:text-left lg:text-[42px] lg:max-w-[300px] ">
                  Free forever for your
                  <span className="text-[#EA4E4B] ml-2">
                    salary payment
                  </span>{" "}
                </h3>
              </div>

              <div className="mt-4 hidden flex-col justify-center lg:flex">
                <p className="text-center lg:text-left mb-4">
                  Subscribe to the Eazilife today.
                </p>
                <div className="gap-2 md:hidden lg:flex">
                  <div className="bg-white shadow-md flex items-center gap-2 p-3 w-[200px] rounded-lg">
                    <div className="bg-[#F2F1F1] rounded-full w-fit h-fit p-2">
                      <AppleIcon
                        width={24}
                        height={24}
                        className="w-[18px] h-[18px]"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-[12px]">
                        Download on the
                      </p>
                      <p className="font-semibold text-[12px]">Appstore</p>
                    </div>
                  </div>

                  <div className="bg-white shadow-md flex items-center gap-2 p-3 w-[180px] rounded-lg">
                    <div className="bg-[#F2F1F1] rounded-full w-fit h-fit p-2">
                      <GooglePlayIcon
                        width={24}
                        height={24}
                        className="w-[12px] h-[12px]"
                      />
                    </div>
                    <div>
                      <p className="text-[12px]">Get On</p>
                      <p className="font-semibold text-[12px]">Google Play</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-[284px] mx-auto h-[260.25px] border md:h-[400px] md:mt-6 md:w-2/3 lg:w-1/2 lg:h-[400px]">
              <Image
                src="/images/payment_image.png"
                fill
                alt="payment"
                className="h-full w-full"
              />
            </div>
            <div className="mt-4  flex flex-col  items-center lg:hidden">
              <p className="text-center lg:text-left">
                Subscribe to the Eazilife today.
              </p>
              <div className="gap-2 mt-2 flex md:flex">
                <div className="bg-white shadow-md flex items-center gap-2 p-3  rounded-lg">
                  <div className="bg-[#F2F1F1] rounded-full w-fit h-fit p-2">
                    <AppleIcon
                      width={24}
                      height={24}
                      className="w-[18px] h-[18px]"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-[12px]">
                      Download on the
                    </p>
                    <p className="font-semibold text-[12px]">Appstore</p>
                  </div>
                </div>

                <div className="bg-white shadow-md flex items-center gap-2 p-3  rounded-lg">
                  <div className="bg-[#F2F1F1] rounded-full w-fit h-fit p-2">
                    <GooglePlayIcon
                      width={24}
                      height={24}
                      className="w-[12px] h-[12px]"
                    />
                  </div>
                  <div>
                    <p className="text-[12px]">Get On</p>
                    <p className="font-semibold text-[12px]">Google Play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
