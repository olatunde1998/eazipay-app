import { FilterIcon } from "../../../../assets/icons";

export const RecentActivities = () => {
  return (
    <>
      <div>
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
      </div>
    </>
  );
};
