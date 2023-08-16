interface tableProps {
  cardTitle?: string;
  fullName?: string;
  className?: string;
  imgUrl?: string;
  activityHeading?: string;
  activityContent?: string;
  employeeHeading?: string;
  employeeContent?: string;
  timeHeading?: string;
  timeContent?: string;
}

export const Table = ({
  cardTitle,
  fullName,
  imgUrl,
  activityHeading,
  activityContent,
  employeeHeading,
  employeeContent,
  timeHeading,
  timeContent,
}: tableProps) => {
  return (
    <>
      <div  className="p-4 mb-6 bg-white rounded-2xl">
        <p className="uppercase">{cardTitle}</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center gap-2 w-full">
            <div className="rounded-full bg-[#01AA8C] h-fit w-fit p-4 text-white">{imgUrl}</div>
            <p className="font-bold">{fullName}</p>
          </div>
          <div className="mr-4">
            <p className="pb-6">{activityHeading}</p>
            <p className="font-bold">{activityContent}</p>
          </div>
          <div className="mx-20">
          <p className="pb-6">{employeeHeading}</p>
            <p className="font-bold">{employeeContent}</p>
          </div>
          <div className="ml-20">
          <p className="pb-6">{timeHeading}</p>
            <p className="font-bold">{timeContent}</p>
          </div>
        </div>
      </div>
    </>
  );
};
