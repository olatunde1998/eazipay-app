interface genderBarIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export const GenderBarIcon = ({
  className,
  width,
  height,
}: genderBarIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 156 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="156" height="8" fill="#8D8E8D" />
      <rect width="78" height="8" fill="#11453B" />
      <rect x="78" width="78" height="8" fill="#EA4E4B" />
    </svg>
  );
};
