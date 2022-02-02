import { cls } from "@libs/client/utils";

interface ButtonProps {
  text: string;
  large?: boolean;
  [key: string]: any;
}

export default function Button({
  large = false,
  onClick,
  text,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={cls(
        "w-full bg-purple-500 hover:bg-purple-400 text-white px-4 border border-transparent rounded-md shadow-sm font-semibold text-sm focus:outline-none",
        large ? "py-3 text-base" : "py-2 text-sm"
      )}
    >
      {text}
    </button>
  );
}
