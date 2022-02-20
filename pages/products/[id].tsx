import { NextPage } from "next";
import Layout from "@components/layout";
import { useRouter } from "next/router";
import useSWR from "swr";
import { priceToString } from "@libs/client/utils";
import Button from "@components/Button";
import Link from "next/link";
import Loader from "@components/Loader";

const ItemDetail: NextPage = () => {
  const router = useRouter();

  const { data } = useSWR(
    router.query.id ? `/api/products/${router.query.id}` : null
  );

  const isLoading = !data;

  console.log(data);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Layout canGoBack={true}>
          <div className="px-4 py-10">
            <div className="mb-8">
              <div className="h-96 bg-slate-300" />

              {/* User profile */}
              <div className="flex items-center space-x-3 py-3 border-t border-b">
                <div className="w-12 h-12 rounded-full bg-slate-300" />
                <div>
                  <p className="text-sm font-semibold text-gray-700">
                    {data?.product?.user?.name}
                  </p>
                  <Link href={`/users/profile/${data?.product?.user?.id}`}>
                    <a className="text-xs font-semibold text-gray-500 cursor-pointer">
                      프로필 보기 &rarr;
                    </a>
                  </Link>
                </div>
              </div>

              {/* Item info */}
              <div className="mt-5">
                <h1 className="text-3xl font-bold text-gray-900">
                  {data?.product?.name}
                </h1>
                <span className="text-3xl mt-3 text-gray-900 block">
                  {priceToString(data?.product?.price)}
                </span>
                <p className="text-base my-6 text-gray-700">
                  {data?.product?.description}
                </p>

                <div className="flex items-center justify-between space-x-2">
                  <Button text="채팅으로 거래하기" large />

                  <button className="p-3 flex items-center justify-center text-gray-400 rounded-md hover:bg-gray-50 hover:text-gray-500">
                    <svg
                      className="h-6 w-6 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Similar items */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Similar items
              </h2>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6].map((_, i) => (
                  <div key={i} className="cursor-pointer">
                    <div className="h-56 w-full bg-slate-300 mb-4" />
                    <h3 className="text-gray-700 -mb-1">Galaxy S60</h3>
                    <span className="text-sm text-gray-900 font-semibold">
                      $6
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default ItemDetail;
