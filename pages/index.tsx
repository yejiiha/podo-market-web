import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/layout";
import { Comment, Heart } from "../libs/svg";

const Home: NextPage = () => {
  return (
    <Layout title="홈" hasTabBar={true}>
      <div className="flex flex-col space-y-5">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Link key={i} href={`/items/${i}`}>
            <a>
              <div className="flex border-b pd-4 cursor-pointer justify-between px-4 pb-4">
                <div className="flex space-x-4">
                  <div className="w-20 h-20 bg-gray-400 rounded-md" />

                  <div className="pt-2 flex flex-col">
                    <h3 className="text-sm font-semibold text-gray-900">
                      New iPhone 14
                    </h3>
                    <span className="text-xs text-gray-500">Black</span>
                    <span className="font-semibold mt-1 text-gray-900">
                      $95
                    </span>
                  </div>
                </div>

                <div className="flex items-end justify-end space-x-2">
                  <div className="flex items-center text-sm text-gray-600 space-x-0.5">
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                    <span>1</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 space-x-0.5">
                    <Heart />
                    <span>1</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}

        <Link href={"/items/upload"}>
          <a>
            <button className="fixed bottom-24 right-5 bg-purple-400 rounded-full text-white p-4 shadow-xl hover:bg-purple-300 transition-colors">
              <Comment />
            </button>
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
