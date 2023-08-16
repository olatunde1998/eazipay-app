interface calenderIconProps {
  //   color?: string;
  className?: string;
  width?: number;
  height?: number;
}

export const CalenderIcon = ({
  //   color,
  className,
  width,
  height,
}: calenderIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 23"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 18.5C10.1978 18.5 10.3911 18.4414 10.5556 18.3315C10.72 18.2216 10.8482 18.0654 10.9239 17.8827C10.9996 17.7 11.0194 17.4989 10.9808 17.3049C10.9422 17.1109 10.847 16.9327 10.7071 16.7929C10.5673 16.653 10.3891 16.5578 10.1951 16.5192C10.0011 16.4806 9.80004 16.5004 9.61732 16.5761C9.43459 16.6518 9.27841 16.78 9.16853 16.9444C9.05865 17.1089 9 17.3022 9 17.5C9 17.7652 9.10536 18.0196 9.29289 18.2071C9.48043 18.3946 9.73478 18.5 10 18.5ZM15 18.5C15.1978 18.5 15.3911 18.4414 15.5556 18.3315C15.72 18.2216 15.8482 18.0654 15.9239 17.8827C15.9996 17.7 16.0194 17.4989 15.9808 17.3049C15.9422 17.1109 15.847 16.9327 15.7071 16.7929C15.5673 16.653 15.3891 16.5578 15.1951 16.5192C15.0011 16.4806 14.8 16.5004 14.6173 16.5761C14.4346 16.6518 14.2784 16.78 14.1685 16.9444C14.0586 17.1089 14 17.3022 14 17.5C14 17.7652 14.1054 18.0196 14.2929 18.2071C14.4804 18.3946 14.7348 18.5 15 18.5ZM15 14.5C15.1978 14.5 15.3911 14.4414 15.5556 14.3315C15.72 14.2216 15.8482 14.0654 15.9239 13.8827C15.9996 13.7 16.0194 13.4989 15.9808 13.3049C15.9422 13.1109 15.847 12.9327 15.7071 12.7929C15.5673 12.653 15.3891 12.5578 15.1951 12.5192C15.0011 12.4806 14.8 12.5004 14.6173 12.5761C14.4346 12.6518 14.2784 12.78 14.1685 12.9444C14.0586 13.1089 14 13.3022 14 13.5C14 13.7652 14.1054 14.0196 14.2929 14.2071C14.4804 14.3946 14.7348 14.5 15 14.5ZM10 14.5C10.1978 14.5 10.3911 14.4414 10.5556 14.3315C10.72 14.2216 10.8482 14.0654 10.9239 13.8827C10.9996 13.7 11.0194 13.4989 10.9808 13.3049C10.9422 13.1109 10.847 12.9327 10.7071 12.7929C10.5673 12.653 10.3891 12.5578 10.1951 12.5192C10.0011 12.4806 9.80004 12.5004 9.61732 12.5761C9.43459 12.6518 9.27841 12.78 9.16853 12.9444C9.05865 13.1089 9 13.3022 9 13.5C9 13.7652 9.10536 14.0196 9.29289 14.2071C9.48043 14.3946 9.73478 14.5 10 14.5ZM17 2.5H16V1.5C16 1.23478 15.8946 0.98043 15.7071 0.792893C15.5196 0.605357 15.2652 0.5 15 0.5C14.7348 0.5 14.4804 0.605357 14.2929 0.792893C14.1054 0.98043 14 1.23478 14 1.5V2.5H6V1.5C6 1.23478 5.89464 0.98043 5.70711 0.792893C5.51957 0.605357 5.26522 0.5 5 0.5C4.73478 0.5 4.48043 0.605357 4.29289 0.792893C4.10536 0.98043 4 1.23478 4 1.5V2.5H3C2.20435 2.5 1.44129 2.81607 0.87868 3.37868C0.316071 3.94129 0 4.70435 0 5.5V19.5C0 20.2956 0.316071 21.0587 0.87868 21.6213C1.44129 22.1839 2.20435 22.5 3 22.5H17C17.7956 22.5 18.5587 22.1839 19.1213 21.6213C19.6839 21.0587 20 20.2956 20 19.5V5.5C20 4.70435 19.6839 3.94129 19.1213 3.37868C18.5587 2.81607 17.7956 2.5 17 2.5ZM18 19.5C18 19.7652 17.8946 20.0196 17.7071 20.2071C17.5196 20.3946 17.2652 20.5 17 20.5H3C2.73478 20.5 2.48043 20.3946 2.29289 20.2071C2.10536 20.0196 2 19.7652 2 19.5V10.5H18V19.5ZM18 8.5H2V5.5C2 5.23478 2.10536 4.98043 2.29289 4.79289C2.48043 4.60536 2.73478 4.5 3 4.5H4V5.5C4 5.76522 4.10536 6.01957 4.29289 6.20711C4.48043 6.39464 4.73478 6.5 5 6.5C5.26522 6.5 5.51957 6.39464 5.70711 6.20711C5.89464 6.01957 6 5.76522 6 5.5V4.5H14V5.5C14 5.76522 14.1054 6.01957 14.2929 6.20711C14.4804 6.39464 14.7348 6.5 15 6.5C15.2652 6.5 15.5196 6.39464 15.7071 6.20711C15.8946 6.01957 16 5.76522 16 5.5V4.5H17C17.2652 4.5 17.5196 4.60536 17.7071 4.79289C17.8946 4.98043 18 5.23478 18 5.5V8.5ZM5 14.5C5.19778 14.5 5.39112 14.4414 5.55557 14.3315C5.72002 14.2216 5.84819 14.0654 5.92388 13.8827C5.99957 13.7 6.01937 13.4989 5.98079 13.3049C5.9422 13.1109 5.84696 12.9327 5.70711 12.7929C5.56725 12.653 5.38907 12.5578 5.19509 12.5192C5.00111 12.4806 4.80004 12.5004 4.61732 12.5761C4.43459 12.6518 4.27841 12.78 4.16853 12.9444C4.05865 13.1089 4 13.3022 4 13.5C4 13.7652 4.10536 14.0196 4.29289 14.2071C4.48043 14.3946 4.73478 14.5 5 14.5ZM5 18.5C5.19778 18.5 5.39112 18.4414 5.55557 18.3315C5.72002 18.2216 5.84819 18.0654 5.92388 17.8827C5.99957 17.7 6.01937 17.4989 5.98079 17.3049C5.9422 17.1109 5.84696 16.9327 5.70711 16.7929C5.56725 16.653 5.38907 16.5578 5.19509 16.5192C5.00111 16.4806 4.80004 16.5004 4.61732 16.5761C4.43459 16.6518 4.27841 16.78 4.16853 16.9444C4.05865 17.1089 4 17.3022 4 17.5C4 17.7652 4.10536 18.0196 4.29289 18.2071C4.48043 18.3946 4.73478 18.5 5 18.5Z"
        fill="#8D8E8D"
      />
    </svg>
  );
};
