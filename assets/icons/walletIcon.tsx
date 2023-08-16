interface walletIconProps {
//   color?: string;
  className?: string;
  width?: number;
  height?: number;
}

export const WalletIcon = ({
//   color,
  className,
  width,
  height,
}: walletIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.023 1C10.1521 1 10.2851 1 10.4142 1C11.0872 1.1448 11.4511 1.58703 11.6311 2.22494C11.7133 2.51846 11.8424 2.79632 11.9363 3.08984C11.9793 3.2229 12.042 3.26595 12.1867 3.26595C13.3449 3.25812 14.5031 3.26203 15.6613 3.26203C16.569 3.26203 17.1325 3.8295 17.1325 4.73744C17.1325 5.17968 17.1325 5.61799 17.1325 6.06023C17.1677 6.06805 17.1834 6.07588 17.2029 6.07979C18.4198 6.22068 19.2024 7.0934 19.2024 8.31443C19.2024 8.9993 19.2024 9.68026 19.2024 10.3651C19.2024 10.4356 19.2024 10.5021 19.2024 10.5647C19.2454 10.5804 19.261 10.5921 19.2806 10.596C19.9888 10.7839 20.3723 11.2809 20.3762 12.0127C20.3762 13.0224 20.3801 14.0282 20.3762 15.0379C20.3723 15.6993 19.9575 16.2237 19.3197 16.3881C19.2845 16.3959 19.2493 16.4116 19.218 16.4194C19.2102 16.4429 19.2063 16.4585 19.2063 16.4703C19.2063 17.2334 19.2102 17.9927 19.2024 18.7558C19.2024 18.9476 19.1867 19.1472 19.1437 19.335C18.9089 20.329 18.0637 20.9943 17.0308 20.9983C12.2024 21.0022 7.374 20.9983 2.54953 20.9983C2.51822 20.9983 2.48301 20.9983 2.45171 20.9943C1.6848 20.9435 1.07832 20.603 0.690953 19.9377C0.542267 19.6872 0.479662 19.3937 0.37793 19.1237C0.37793 15.4019 0.37793 11.6762 0.37793 7.95439C0.389668 7.91916 0.405319 7.88394 0.413145 7.84481C0.604871 6.95252 1.14092 6.38896 2.01739 6.1385C2.13477 6.10719 2.25607 6.09153 2.38519 6.06414C2.30302 5.84107 2.22868 5.63365 2.15434 5.42623C1.84523 4.57699 2.18564 3.84515 3.03471 3.53598C5.36282 2.69066 7.69484 1.84533 10.023 1ZM18.0285 10.5647C18.0285 9.78201 18.0285 9.0267 18.0285 8.27138C18.0285 7.65696 17.6177 7.24603 16.9955 7.24603C12.1906 7.24603 7.38965 7.24603 2.58474 7.24603C1.95478 7.24603 1.55177 7.65304 1.55177 8.28312C1.55177 11.7779 1.55177 15.2727 1.55177 18.7714C1.55177 19.4133 1.9587 19.8242 2.60039 19.8242C7.39747 19.8242 12.1946 19.8242 16.9916 19.8242C17.6177 19.8242 18.0324 19.4133 18.0324 18.7871C18.0324 18.0592 18.0324 17.3273 18.0324 16.5994C18.0324 16.5446 18.0246 16.4898 18.0207 16.4272C17.4299 16.4272 16.8547 16.4311 16.2834 16.4272C16.0291 16.4272 15.7748 16.4272 15.5243 16.3959C14.1392 16.2276 13.0671 15.0966 12.9615 13.7151C12.8597 12.3258 13.7479 11.0539 15.0978 10.6821C15.3756 10.6078 15.673 10.5804 15.9626 10.5726C16.6395 10.5569 17.3242 10.5647 18.0285 10.5647ZM9.12693 6.07588C9.12693 5.57103 9.12301 5.08966 9.12693 4.6083C9.13475 3.96647 9.5769 3.43032 10.2029 3.29726C10.3712 3.26203 10.5512 3.26203 10.7507 3.24247C10.6294 2.91764 10.5238 2.59282 10.3868 2.27973C10.3634 2.22886 10.2186 2.18972 10.1442 2.20537C9.98774 2.23668 9.83905 2.30713 9.68645 2.36583C7.60485 3.12115 5.52325 3.88038 3.44164 4.63569C3.19905 4.7257 3.17166 4.78441 3.26165 5.03096C3.36339 5.31274 3.47686 5.5906 3.56685 5.87238C3.61381 6.025 3.68815 6.07979 3.85249 6.07979C5.5389 6.07197 7.2214 6.07588 8.90781 6.07588C8.9665 6.07588 9.03302 6.07588 9.12693 6.07588ZM17.3673 11.7388C16.8782 11.7388 16.393 11.7349 15.9039 11.7388C14.9061 11.7505 14.1314 12.5137 14.1275 13.4842C14.1236 14.4626 14.9022 15.2453 15.9039 15.2532C16.9055 15.261 17.9072 15.2571 18.9089 15.2532C19.1398 15.2532 19.2024 15.1945 19.2024 14.9675C19.2024 13.9852 19.2024 13.0029 19.2024 12.0206C19.2024 11.7897 19.1476 11.7388 18.9089 11.7388C18.3924 11.7388 17.8798 11.7388 17.3673 11.7388ZM15.9587 6.07197C15.9587 5.57494 15.9626 5.09749 15.9547 4.61612C15.9508 4.47132 15.8374 4.43219 15.7043 4.43219C13.9866 4.43219 12.2728 4.43219 10.5551 4.43219C10.3751 4.43219 10.2929 4.51046 10.2968 4.69048C10.3008 5.00748 10.2968 5.32839 10.2968 5.64539C10.2968 5.78628 10.2968 5.92325 10.2968 6.06805C12.1946 6.07197 14.061 6.07197 15.9587 6.07197Z"
        fill="#515251"
        stroke="#515251"
        stroke-width="0.4"
      />
    </svg>
  );
};