import { NextPage } from "next";
import Link from "next/link";
import Layout from "@components/layout";
import TextArea from "@components/TextArea";

const CommunityDetail: NextPage = () => {
  return (
    <Layout canGoBack={true}>
      <div className="pb-8">
        {/* tag */}
        <span className="inline-flex my-3 ml-4 items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
          동네질문
        </span>

        {/* questioner */}
        <div className="flex justify-between items-center border-t border-b">
          <div className="flex mb-3 items-center space-x-3 py-3 px-4">
            <div className="w-10 h-10 rounded-full bg-slate-300" />
            <div>
              <p className="text-sm font-semibold text-gray-700">yejiiha</p>
              <p className="text-xs font-semibold text-gray-500 cursor-pointer">
                View profile &rarr;
              </p>
            </div>
          </div>

          <div className="pr-4">
            <span className="text-gray-500 font-semibold text-xs">
              18시간 전
            </span>
          </div>
        </div>

        {/* question  */}
        <div>
          <div className="mt-2 px-4 text-gray-700">
            <span className="text-purple-500 font-semibold">Q.</span> What is
            the best sushi restaurant?
          </div>
          <div className="flex space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[1.5px] w-full">
            <span className="flex space-x-2 items-center text-sm px-4">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>궁금해요 1</span>
            </span>

            <span className="flex space-x-2 items-center text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span>답변 3</span>
            </span>
          </div>
        </div>

        {/* Answer */}
        <div className="px-4 my-5 space-y-5">
          {[1, 2, 3].map((_, i) => (
            <div className="flex items-start space-x-3" key={i}>
              <div className="w-8 h-8 bg-slate-300 rounded-full" />
              <div>
                <span className="text-sm block font-semibold text-gray-700">
                  yejiiha
                </span>
                <span className="text-xs text-gray-500 block ">2시간 전</span>
                <p className="text-gray-700 mt-2">
                  The best sushi restaurant is the one next to my house.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Answer */}
        <div className="px-4">
          <TextArea placeholder="Answer this question!" />

          <button className="w-full mt-2 bg-purple-500 hover:bg-purple-400 text-white py-2 px-4 border border-transparent rounded-md shadow-sm font-semibold text-sm focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:outline-none">
            Reply
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default CommunityDetail;
