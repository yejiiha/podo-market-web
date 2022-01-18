import { NextPage } from "next";
import Layout from "../../components/layout";

const Upload: NextPage = () => {
  return (
    <Layout canGoBack={true} title="중고거래 글쓰기">
      <div className="px-4 py-16 space-y-5">
        {/* input file */}
        <div>
          <label className="cursor-pointer w-full text-gray-600 hover:text-purple-500 flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-purple-500 py-6 h-48 rounded-md">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input type="file" className="hidden" />
          </label>
        </div>

        {/* Name input */}
        <div>
          <label
            className="mb-1 block text-sm font-semibold text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <div className="rounded-md relative flex  items-center shadow-sm">
            <input
              id="name"
              type="email"
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
        </div>

        {/* Price input */}
        <div>
          <label
            htmlFor="price"
            className="text-sm font-semibold text-gray-700 mb-1 block"
          >
            Price
          </label>
          <div className="rounded-md shadow-sm relative flex items-center">
            <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
              <span className="text-gray-500 text-sm">$</span>
            </div>
            <input
              id="price"
              type="text"
              placeholder="0.00"
              className="px-7 pr-10 appearance-none w-full py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
            <div className="absolute right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 text-sm">USD</span>
            </div>
          </div>
        </div>

        {/* Description input */}
        <div>
          <label className="text-sm font-semibold text-gray-700 mb-1 block">
            Description
          </label>
          <div>
            <textarea
              rows={4}
              className="mt-1 shadow-sm w-full focus:ring-purple-500 rounded-md border-gray-300 focus:border-purple-500"
            />
          </div>
        </div>

        <button className="w-full mt-4 bg-purple-500 hover:bg-purple-400 text-white py-2 px-4 border border-transparent rounded-md shadow-sm font-semibold text-sm focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:outline-none">
          Upload product
        </button>
      </div>
    </Layout>
  );
};

export default Upload;
