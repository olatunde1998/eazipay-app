import { useRouter } from "next/navigation";
import {
  AvatarImage,
  CompanyLogoIcon,
  NextIcon,
} from "../../../../assets/icons";
import { NotificationIcon } from "../../../../assets/icons/notificationIcon";
import Image from "next/image";

interface AuthNavProps {
  onNavToggle: () => void;
  setOpenMobileSidebar: (openMobileSidebar: boolean) => void;
  openMobileSidebar: boolean;
}

export const AuthNav = ({
  onNavToggle,
  setOpenMobileSidebar,
  openMobileSidebar,
}: AuthNavProps) => {
  const router = useRouter();
  return (
    <nav className="w-full h-[70px] px-5 fixed bg-white bg-opacity-95 z-20 top-0 lg:h-[70px]">
      <div className="flex justify-between items-center  h-full ">
        <div className="cursor-pointer block" onClick={() => router.push("/")}>
          <CompanyLogoIcon />
        </div>

        <div className="items-center lg:pr-64">
          <div className="flex items-center gap-x-8">
            <NotificationIcon className="cursor-pointer" />

            <span className="cursor-pointer ">
              <Image
                src={AvatarImage}
                alt="user picture"
                width={50}
                height={50}
                className="border rounded-full p-[0.1rem]"
              />
            </span>

            <div className="hidden md:block">
              <p className="font-semibold text-[14px]">Kalu Abasiama</p>
              <p className="text-gray-400 text-[12px] flex justify-center items-center gap-20">
                Admin{" "}
                <span>
                  <NextIcon width={8} className="cursor-pointer" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AuthNav;
