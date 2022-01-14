import { useState } from "react";
import { Github, Twitter } from "../libs/svg";
import { cls } from "../libs/utils";

export default function Enter() {
  const [method, setMethod] = useState<"email" | "phone">("email");

  const onEmailClick = () => {
    setMethod("email");
  };

  const onPhoneClick = () => {
    setMethod("phone");
  };

  return (
    <div className="mt-16 px-4">
      <h3 className="text-3xl font-bold text-center">Enter to Podo 🍇</h3>

      <div className="mt-8">
        <div className="flex flex-col items-center">
          <h5 className="text-sm text-gray-500 font-semibold">Enter using:</h5>
          <div className="grid grid-cols-2 mt-8 border-b w-full">
            <button
              className={cls(
                "pb-4 font-semibold border-b-2",
                method === "email"
                  ? `border-purple-500 text-purple-500`
                  : `border-transparent text-gray-500`
              )}
              onClick={onEmailClick}
            >
              Email
            </button>
            <button
              className={cls(
                "pb-4 font-semibold border-b-2",
                method === "phone"
                  ? `border-purple-500 text-purple-500`
                  : `border-transparent text-gray-500`
              )}
              onClick={onPhoneClick}
            >
              Phone
            </button>
          </div>
        </div>

        <form className="flex flex-col mt-8">
          <label className="text-sm font-semibold text-gray-700">
            {method === "email" ? "Email address" : null}
            {method === "phone" ? "Phone number" : null}
          </label>
          <div className="mt-1">
            {method === "email" ? (
              <input
                type="email"
                required
                className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            ) : null}
            {method === "phone" ? (
              <div className="flex rounded-md shadow-sm">
                <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
                  +82
                </span>
                <input
                  type="number"
                  required
                  className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            ) : null}
          </div>

          <button className="mt-6 bg-purple-500 hover:bg-purple-400 text-white py-2 px-4 border border-transparent rounded-md shadow-sm font-semibold text-sm focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:outline-none">
            {method === "email" ? "Get login link" : null}
            {method === "phone" ? "Get one-time password" : null}
          </button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute w-full border-t border-gray-300" />
            <div className="relative -top-3 text-center">
              <span className="bg-white px-2 text-sm text-gray-500">
                Or enter with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-2">
            <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-semibold text-gray-500 hover:bg-gray-50">
              <Twitter />
            </button>
            <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-semibold text-gray-500 hover:bg-gray-50">
              <Github />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
