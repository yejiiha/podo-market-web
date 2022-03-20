import { cls } from "@libs/client/utils";

interface ButtonProps {
  text: string;
  large?: boolean;
  loading?: boolean;
  [key: string]: any;
}

export default function Button({
  large = false,
  onClick,
  text,
  loading,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={cls(
        "w-full bg-purple-500 hover:bg-purple-400 text-white px-4 border border-transparent rounded-md shadow-sm font-semibold text-sm focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed",
        large ? "py-3 text-base" : "py-2 text-sm"
      )}
      disabled={loading}
    >
      {loading ? "로딩중..." : text}
    </button>
  );
}
