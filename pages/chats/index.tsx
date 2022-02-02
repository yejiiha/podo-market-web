import type { NextPage } from "next";
import Link from "next/link";
import Layout from "@components/layout";

const Chats: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar={true}>
      <div className="divide-y-[1px] ">
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Link href={`/chats/${i}`} key={i}>
            <a>
              <div className="flex px-4 cursor-pointer py-3 items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-slate-300" />
                <div>
                  <p className="text-gray-700">yejiiha</p>
                  <p className="text-sm  text-gray-500">
                    See you tomorrow in the corner at 2pm!
                  </p>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;