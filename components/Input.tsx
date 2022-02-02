import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  kind?: "text" | "phone" | "price" | "email";
  required: boolean;
  register: UseFormRegisterReturn;
  [key: string]: any;
}

export default function Input({
  label,
  name,
  kind = "text",
  required,
  register,
  ...rest
}: InputProps) {
  return (
    <>
      <label
        className="mb-1 block text-sm font-semibold text-gray-700"
        htmlFor={name}
      >
        {label}
      </label>

      {/* text */}
      {kind === "text" && (
        <div className="rounded-md relative flex items-center shadow-sm">
          <input
            id={name}
            {...rest}
            {...register}
            {...register}
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            required={required}
          />
        </div>
      )}

      {/* price */}
      {kind === "price" && (
        <div className="rounded-md shadow-sm relative flex items-center">
          <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none focus:ring-purple-500 focus:border-purple-500">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input
            id={name}
            type="text"
            placeholder="0.00"
            className="px-7 pr-10 appearance-none w-full py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            required={required}
            {...rest}
            {...register}
          />
          <div className="absolute right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 text-sm">USD</span>
          </div>
        </div>
      )}

      {/* phone */}
      {kind === "phone" && (
        <div className="flex rounded-md shadow-sm">
          <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
            +82
          </span>
          <input
            id="input"
            type="number"
            required={required}
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            {...rest}
            {...register}
          />
        </div>
      )}
    </>
  );
}
