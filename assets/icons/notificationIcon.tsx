interface notificationIconProps {
  color?: string;
  className?: string;
  width?: number;
  height?: number;
}

export const NotificationIcon = ({
  color,
  className,
  width,
  height,
}: notificationIconProps) => {
  return (
    <svg
      width="30"
      height="28"
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 17.2161V14.0361C17.9986 12.6193 17.4958 11.2486 16.5806 10.1669C15.6655 9.08521 14.3971 8.36228 13 8.12613V7.03613C13 6.77092 12.8946 6.51656 12.7071 6.32903C12.5196 6.14149 12.2652 6.03613 12 6.03613C11.7348 6.03613 11.4804 6.14149 11.2929 6.32903C11.1054 6.51656 11 6.77092 11 7.03613V8.12613C9.60294 8.36228 8.33452 9.08521 7.41939 10.1669C6.50425 11.2486 6.00144 12.6193 6 14.0361V17.2161C5.41645 17.4224 4.911 17.8042 4.55294 18.3091C4.19488 18.8139 4.00174 19.4172 4 20.0361V22.0361C4 22.3013 4.10536 22.5557 4.29289 22.7432C4.48043 22.9308 4.73478 23.0361 5 23.0361H8.14C8.37028 23.8835 8.873 24.6315 9.5706 25.1649C10.2682 25.6982 11.1219 25.9871 12 25.9871C12.8781 25.9871 13.7318 25.6982 14.4294 25.1649C15.127 24.6315 15.6297 23.8835 15.86 23.0361H19C19.2652 23.0361 19.5196 22.9308 19.7071 22.7432C19.8946 22.5557 20 22.3013 20 22.0361V20.0361C19.9983 19.4172 19.8051 18.8139 19.4471 18.3091C19.089 17.8042 18.5835 17.4224 18 17.2161ZM8 14.0361C8 12.9753 8.42143 11.9579 9.17157 11.2077C9.92172 10.4576 10.9391 10.0361 12 10.0361C13.0609 10.0361 14.0783 10.4576 14.8284 11.2077C15.5786 11.9579 16 12.9753 16 14.0361V17.0361H8V14.0361ZM12 24.0361C11.651 24.034 11.3086 23.9406 11.0068 23.7652C10.7051 23.5898 10.4545 23.3384 10.28 23.0361H13.72C13.5455 23.3384 13.2949 23.5898 12.9932 23.7652C12.6914 23.9406 12.349 24.034 12 24.0361ZM18 21.0361H6V20.0361C6 19.7709 6.10536 19.5166 6.29289 19.329C6.48043 19.1415 6.73478 19.0361 7 19.0361H17C17.2652 19.0361 17.5196 19.1415 17.7071 19.329C17.8946 19.5166 18 19.7709 18 20.0361V21.0361Z"
        fill="#8B8B8B"
      />
      <rect x="14" y="0.0361328" width="16" height="16" rx="8" fill="#C92F02" />
      <path
        d="M19.11 5.03613H24.24V5.96613L21.16 12.0361H19.6L22.66 6.25613H19.11V5.03613Z"
        fill="white"
      />
    </svg>
  );
};
