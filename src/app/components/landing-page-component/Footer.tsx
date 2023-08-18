import { EazipayIcon, SendIcon } from "../../../../assets/icons";

export const Footer = () => {
  return (
    <>
      <div>
      <section className="mt-64 shadow-lg border-t-[.45px] border-gray-300 bg-white  p-4 md:p-12 lg:p-4 lg:py-10 xl:p-10 md:mt-2">
          <div className="grid md:flex lg:max-w-[1230px] mx-auto w-fit lg:w-[988px] xl:w-[1084px] lg:gap-20">
            <div className="h-fit flex flex-col leading-8 items-center md:items-start md:w-1/2   order-last md:order-first  lg:w-fit xl:w-fit">
              <a href="#" className="flex items-center ">
                <EazipayIcon width={100} />
              </a>
              <p>Copyright © 2023 Eazipay.</p>
              <p>All rights reserved</p>
            </div>

            <div className="flex flex-col-reverse lg:flex md:justify-between lg:flex-row  w-fit md:mx-auto lg:w-full">
              <div className="grid order-first grid-cols-2  md:grid-cols-3  lg:max-w-none lg:w-[100%] md:mx-auto md:order-first">
                <div className=" leading-10 p-4  lg:pl-0 lg:pt-0">
                  <p className="font-semibold">Product</p>
                  <p>Individual</p>
                  <p>Businesses</p>
                  <p>Request Demo</p>
                  <p>Pricing</p>
                </div>
                <div className=" leading-10 p-4  lg:pl-0 lg:pt-0">
                  <p className="font-semibold">Legal</p>
                  <p>Privacy Policy</p>
                  <p>Terms of Service</p>
                </div>
                <div className=" leading-10 p-4  lg:pl-0 lg:pt-0">
                  <p className="font-semibold">Resources</p>
                  <p>FAQs</p>
                  <p>Blog</p>
                  <p>Career</p>
                  <p>Customer Stories</p>
                </div>
              </div>
              <div className="w-full text-center leading-10 lg:text-left lg:pt-0 lg:w-fit">
                <p className="font-semibold">Contact Us</p>
                <p>eazipay@gmail.com</p>
                <p>+234 816 878 9518</p>
                <p>Request Demo</p>
                <p className="rounded-full bg-[#F2F1F1] max-w-[400px] mx-auto flex justify-between px-4 py-2 items-center lg:w-[300px] lg:mx-0">
                  Your email address{" "}
                  <span>
                    <SendIcon
                      width={24}
                      height={24}
                      color="#515251"
                      className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]"
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
