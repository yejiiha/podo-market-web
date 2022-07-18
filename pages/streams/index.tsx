import { NextPage } from "next";
import Link from "next/link";
import FloatingButton from "@components/FloatingButton";
import Layout from "@components/layout";
import useSWR from "swr";
import { Stream } from "@prisma/client";
import { useEffect, useState } from "react";

interface StreamsResponse {
  ok: boolean;
  streams: Stream[];
}

const Streams: NextPage = () => {
  const pageLimit = 5;

  const [page, setPage] = useState(1);
  const [list, setList] = useState<Stream[]>([]);

  const { data } = useSWR<StreamsResponse>(
    `/api/streams?page=${page}&pageLimit=${pageLimit}`
  );

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight =
      document.documentElement.clientHeight +
      document.documentElement.clientHeight / 2;

    // 페이지 끝에 도달하면 추가 데이터를 받아온다\
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    // scroll event listener 등록
    window.addEventListener("scroll", handleScroll);

    // scroll event listener 해제
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    if (data) setList((prev) => prev?.concat(data?.streams));
  }, [data]);

  return (
    <Layout title="라이브" hasTabBar={true}>
      <div className="divide-y-2 space-y-4">
        {list.map((stream, index) => (
          <Link key={index} href={`/streams/${stream?.id}`}>
            <a>
              <div className="pt-4  px-4">
                <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
                <h3 className="text-gray-700 text-lg mt-2">{stream?.name}</h3>
              </div>
            </a>
          </Link>
        ))}

        {/* Upload video btn */}
        <FloatingButton href={"/streams/create"}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Streams;
