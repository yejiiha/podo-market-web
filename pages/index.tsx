import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="w-full bg-slate-500 py-20 px-10 grid grid-cols-1 gap-5 min-h-screen sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {/* odd hover active */}
      <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col justify-between dark:bg-black">
        <span className="font-bold text-3xl dark:text-white">Select Item</span>

        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              className="flex justify-between my-2 first odd:bg-blue-50"
              key={i}
            >
              <span className="text-gray-500">Gray Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>

        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span className="font-semibold dark:text-white">Total</span>
          <span className="font-semibold">${19 * 5}</span>
        </div>

        <button className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/3 block mx-auto hover:bg-blue-400 active:bg-gray-300">
          Checkout
        </button>
      </div>

      {/* group hover landscape portrait */}
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl group dark:bg-black">
        <div className="bg-blue-500 p-6 pb-14 lg:pb-24 landscape:bg-teal-400 portrait:bg-blue-500">
          <span className="text-white text-2xl">Profile</span>
        </div>

        <div className="rounded-3xl p-6 relative -top-5 bg-white dark:bg-black">
          <div className="flex justify-around items-end relative -top-16">
            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-sm">Orders</span>
              <span className="font-semibold  dark:text-white">340</span>
            </div>

            <div className="h-24 w-24 bg-blue-100 rounded-full border-2 border-gray-100 group-hover:bg-purple-400 transition-colors" />

            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-sm">Spent</span>
              <span className="font-semibold dark:text-white">$2,310</span>
            </div>
          </div>

          <div className="flex flex-col items-center relative -mt-10 -mb-5">
            <span className="font-semibold text-xl dark:text-white">
              yejiiha
            </span>
            <span className="text-gray-500 text-sm">Seoul, South Korea</span>
          </div>
        </div>
      </div>

      {/* focus ring */}
      <div className="bg-white p-10 px-7 rounded-3xl shadow-xl  dark:bg-black">
        <div className="flex justify-between items-center mb-5">
          <span>⬅</span>

          <div className="flex justify-between items-center space-x-5">
            <div>
              <span>⭐ </span>
              <span className="font-bold dark:text-white">4.9</span>
            </div>

            <span className="shadow-lg p-2 rounded-lg cursor-pointer">💗</span>
          </div>
        </div>

        <div className="bg-zinc-400 h-48 mb-5" />

        <div className="flex flex-col">
          <span className="font-semibold text-xl mb-1 dark:text-white">
            Swon Lounge
          </span>
          <span className="text-sm text-gray-500">Chair</span>

          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-5">
              <button className="w-5 h-5 rounded-full bg-yellow-600 focus:ring-1 ring-offset-2 ring-yellow-600 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-1 ring-offset-2 ring-teal-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-1 ring-offset-2 ring-indigo-500 transition" />
            </div>

            <div className="flex items-center space-x-4">
              <button className="bg-blue-100 rounded-lg aspect-square w-10 flex justify-center items-center font-bold text-xl ">
                -
              </button>
              <span className="text-xl dark:text-white">1</span>
              <button className="bg-blue-100 rounded-lg aspect-square w-10 flex justify-center items-center font-bold text-xl ">
                +
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-semibold dark:text-white">$450</span>
            <button className="py-2.5 bg-blue-500 text-white rounded-xl w-1/2">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* Form  */}
      <form className="bg-white p-5 rounded-3xl shadow-xl flex flex-col focus-within:bg-blue-100 justify-between dark:bg-black">
        <div>
          <input
            type="text"
            placeholder="Username"
            required
            className="w-full peer border-2 rounded-lg px-3 py-2 invalid:border-red-400  disabled:bg-gray-200"
          />

          <span className="hidden text-red-400 text-xs font-bold mt-1.5 peer-invalid:block">
            Username is invalid
          </span>

          <input
            type="password"
            placeholder="password"
            required
            className="w-full peer border-2 mt-2 rounded-lg px-3 py-2 invalid:border-red-400"
          />

          <span className="hidden text-red-400 text-xs font-bold mt-1.5 peer-invalid:block">
            Password is invalid
          </span>
        </div>

        <button className="bg-blue-500 hover:bg-blue-400 py-2 rounded-lg text-white mt-6">
          Submit
        </button>
      </form>

      {/* details select-none open */}
      <div className="bg-white p-10 px-7 rounded-3xl shadow-xl  dark:bg-black">
        <details className="select-none open:text-white open:bg-black">
          <summary className="cursor-pointer dark:text-white">
            hahahahaha
          </summary>
          <span>so what</span>
        </details>
      </div>

      {/* list marker */}
      <div className="bg-white p-10 px-7 rounded-3xl shadow-xl  dark:bg-black">
        <ul className="list-disc marker:text-teal-500">
          <li className="dark:text-white">hello tailwind</li>
          <li className="dark:text-white">hello tailwind</li>
          <li className="dark:text-white">hello tailwind</li>
        </ul>
      </div>

      {/* file */}
      <div className="bg-white p-10 px-7 rounded-3xl shadow-xl  dark:bg-black">
        <input
          type="file"
          className="dark:text-white file:text-white file:border-0 file:rounded-lg file:p-2 file:bg-blue-500 file:cursor-pointer file:hover:bg-blue-400 file:transition-colors"
        />
      </div>

      {/* first-letter */}
      <div className="bg-white p-10 px-7 rounded-3xl shadow-xl lg:col-span-2 xl:col-span-1 2xl:col-span-3 dark:bg-black">
        <p className="first-letter:text-2xl first-letter:hover:text-purple-400 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Home;
