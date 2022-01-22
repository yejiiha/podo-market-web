import { cls } from "../libs/utils";

interface MessageProps {
  message: string;
  reversed?: boolean;
  avatarUrl?: string;
}

export default function Message({
  message,
  avatarUrl,
  reversed,
}: MessageProps) {
  return (
    <div
      className={cls(
        "flex items-start space-x-2",
        reversed ? "flex-row-reverse space-x-reverse" : ""
      )}
    >
      <div className="w-8 h-8 rounded-full bg-slate-400" />
      <div
        className={cls(
          "max-w-[calc(100%*2/3)] w-fit text-sm py-2 px-3.5  rounded-2xl",
          reversed ? "text-white bg-purple-500" : "text-gray-900 bg-slate-100"
        )}
      >
        <p>{message}</p>
      </div>
    </div>
  );
}
