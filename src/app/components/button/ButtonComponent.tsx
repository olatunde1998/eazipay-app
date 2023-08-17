interface ButtonProps {
  btnText?: string;
  className?: string;
  handleBtnClick?: any;
  btnIcon?: any;
}

export const Button = ({ btnText, className, handleBtnClick }: ButtonProps) => {
  return (
    <>
      <button
        onClick={handleBtnClick}
        className={`${className} p-3 w-[200px] text-center cursor-pointer flex items-center justify-center`}
      >
        {btnText}
      </button>
    </>
  );
};


