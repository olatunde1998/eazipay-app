interface InputProps {

  className?: string;
  type?: string;
  inputName?: string;
  focusContent?: string;
  register?: any;
  placeholder?: string;
}

export const Input = ({
 
  type,
  className,
  inputName,
  // register,
  placeholder,
}: InputProps) => {
  return (
    <>
      <div className={`${className} my-4 rounded-full cursor-pointer space-y-3`}>
        
        <input
          name={inputName}
          type={type}
          placeholder={placeholder}
          // {...register}
          className={`border rounded-xl focus:outline-none p-3 w-full`}
        />
      </div>
    </>
  );
};
