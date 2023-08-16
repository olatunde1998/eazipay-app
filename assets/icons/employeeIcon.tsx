interface employeeIconProps {
    color?: string;
  className?: string;
  width?: number;
  height?: number;
}

export const EmployeeIcon = ({
    color,
  className,
  width,
  height,
}: employeeIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.3778 6.25V8.75M15.3778 8.75V11.25M15.3778 8.75H17.8778M15.3778 8.75H12.8778M11.0028 5.3125C11.0028 6.8658 9.74361 8.125 8.19031 8.125C6.63701 8.125 5.37781 6.8658 5.37781 5.3125C5.37781 3.7592 6.63701 2.5 8.19031 2.5C9.74361 2.5 11.0028 3.7592 11.0028 5.3125ZM2.87857 16.0286C2.87807 15.9983 2.87781 15.9679 2.87781 15.9375C2.87781 13.0035 5.25629 10.625 8.19031 10.625C11.1243 10.625 13.5028 13.0035 13.5028 15.9375V15.9396C13.5028 15.9693 13.5025 15.999 13.502 16.0286C11.9506 16.9627 10.1332 17.5 8.19031 17.5C6.24741 17.5 4.43001 16.9627 2.87857 16.0286Z"
        stroke={color}
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
