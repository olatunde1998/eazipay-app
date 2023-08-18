interface dropDownIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export const DropDownIcon = ({
  className,
  width,
  height,
}: dropDownIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 1L5 5L1.5 1"
        stroke="#515251"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
