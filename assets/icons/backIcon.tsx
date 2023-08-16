interface backIconProps {
    color: string;
    className?: string;
    width: number;
    height: number;
  }
  
  export const BackIcon = ({
      color,
    className,
    width,
    height,
  }: backIconProps) => {
    return (
      <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 19 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 26L2 14L17 2"
          stroke={color}
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  };
  