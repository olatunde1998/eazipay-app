import Link from "next/link";
import { AppleIcon, GooglePlayIcon, HeroImage } from "../../../../assets/icons";
import { Button } from "@/app/components/index";

export const Hero = () => {
  return (
    <>
      <div>
        <section className="py-32 lg:w-[1000px] mx-auto  lg:grid overflow-hidden">
          <div className="mx-auto  h-fit  justify-between  lg:flex lg:justify-start">
            <div className="flex flex-col justify-center lg:w-1/2">
              <div className="max-w-full md:max-w-[400px] mx-auto lg:mx-0 lg:max-w-none ">
                <div className="text-[#11453B] px-4 text-center justify-center flex flex-col items-center lg:text-left  lg:items-start">
                  <h3 className="text-[32px] lg:text-[42px] lg:text-left font-normal font-heading  mb-6">
                    Run your payroll <br />{" "}
                    <span className="text-[#B4A572]">easily </span>
                    in <span className="text-[#EA4E4B]">seconds</span>{" "}
                  </h3>
                  <p className="text-[#515251] text-[14px] font-normal lg:max-w-[300px] ">
                    We&apos;ve built an all-inclusive simple solution for
                    individual and businesses to manage staff, pay salaries,
                    bills, and relevant taxes all at once.
                  </p>
                  <Link href="/dashboard">
                    <Button
                      className="mt-6 bg-[#11453B] text-white text-[12px] font-normal w-[250px] p-4 rounded-full"
                      btnText="Start Using Free, Forever"
                    />
                  </Link>
                </div>
                <div className="mt-16 px-4 lg:px-2">
                  <p className="text-center lg:text-left my-4">
                    Download the Eazipay App
                  </p>
                  <div className="flex  justify-center gap-2 lg:justify-start">
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
            </div>

            <div className="hidden lg:w-[600px] lg:block">
              <HeroImage width={300} height={200} className="w-full h-full " />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
