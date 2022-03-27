import type { NextPage } from "next";
import Layout from "@components/layout";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Stream } from "@prisma/client";
import { priceToString } from "@libs/client/utils";

interface StreamResponse {
  ok: true;
  stream: Stream;
}

const Stream: NextPage = () => {
  const router = useRouter();
  const { data } = useSWR<StreamResponse>(
    router?.query?.id ? `/api/streams/${router?.query?.id}` : null
  );
  return (
    <Layout canGoBack={true}>
      <div className="py-10 px-4  space-y-4">
        {/* video */}
        <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />

        {/* description */}
        <div className="mt-5">
          <h1 className="text-3xl font-bold text-gray-900">
            {data?.stream?.name}
          </h1>
          <span className="text-2xl block mt-3 text-gray-900">
            {data?.stream ? priceToString(data.stream.price) : 0}
          </span>
          <p className=" my-6 text-gray-700">{data?.stream?.desc}</p>
        </div>

        {/* Chat */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Live Chat</h2>

          <div className="py-10 pb-16 h-[50vh] overflow-y-scroll  px-4 space-y-4">
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>Hi how much are you selling them for?</p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>I want ￦20,000</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>Hi how much are you selling them for?</p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>I want ￦20,000</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>Hi how much are you selling them for?</p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>I want ￦20,000</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>Hi how much are you selling them for?</p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>I want ￦20,000</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>Hi how much are you selling them for?</p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>I want ￦20,000</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>Hi how much are you selling them for?</p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>I want ￦20,000</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>Hi how much are you selling them for?</p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>I want ￦20,000</p>
              </div>
            </div>
          </div>

          {/* Input Box */}
          <div className="fixed py-2 bg-white  bottom-0 inset-x-0">
            <div className="flex relative max-w-md items-center  w-full mx-auto">
              <input
                type="text"
                className="shadow-sm rounded-full w-full border-gray-300 focus:ring-purple-500 focus:outline-none pr-12 focus:border-purple-500"
              />
              <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
                <button className="flex items-center bg-purple-500 rounded-full px-3 hover:bg-purple-400 text-sm text-white">
                  &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Stream;
