interface InputProps {
  label?: string;
  className?: string;
  name?: string;
  type?: string;
  inputName?: string;
  focusContent?: string;
  register?: any;
}

export const Input = ({
  label,
  name,
  type,
  className,
  focusContent,
  inputName,
  register,
}: InputProps) => {
  return (
    <>
      <div className={`${className} rounded-md cursor-pointer space-y-3`}>
        <label htmlFor={name} className="font-semibold text-sm flex">
          {label} <span className="ml-1 text-red-700 font-normal text-[10px] hidden lg:block">{focusContent}</span>
        </label>
        <input
          name={inputName}
          type={type}
          {...register}
          className={`border rounded focus:outline-none p-3 w-full`}
        />
      </div>
    </>
  );
};
