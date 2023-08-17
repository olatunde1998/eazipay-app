interface appleIconProps {
  className?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export const AppleIcon = ({
  className,
  width,
  height,
  onClick,
}: appleIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0499 17.781C12.0699 18.731 10.9999 18.581 9.96992 18.131C8.87992 17.671 7.87992 17.651 6.72992 18.131C5.28992 18.751 4.52992 18.571 3.66992 17.781C-1.21008 12.751 -0.49008 5.09098 5.04992 4.81098C6.39992 4.88098 7.33992 5.55098 8.12992 5.61098C9.30992 5.37098 10.4399 4.68098 11.6999 4.77098C13.2099 4.89098 14.3499 5.49098 15.0999 6.57098C11.9799 8.44098 12.7199 12.551 15.5799 13.701C15.0099 15.201 14.2699 16.691 13.0399 17.791L13.0499 17.781ZM8.02992 4.75098C7.87992 2.52098 9.68992 0.680977 11.7699 0.500977C12.0599 3.08098 9.42992 5.00098 8.02992 4.75098Z"
        fill="black"
      />
    </svg>
  );
};
