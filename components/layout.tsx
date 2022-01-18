import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { cls } from "../libs/utils";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  const router = useRouter();

  const onClickBackBtn = () => {
    router.back();
  };
  return (
    <div>
      {/* header */}
      <div
        className={cls(
          "bg-white w-full max-w-lg text-lg font-bold p-4 py-3 fixed top-0 text-gray-900 border-b flex items-start",
          canGoBack ? "justify-between" : "justify-start"
        )}
      >
        {canGoBack ? (
          <button onClick={() => onClickBackBtn()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
          </button>
        ) : null}
        {title ? <span>{title}</span> : null}

        <div className="h-6 w-6" />
      </div>

      <div className={cls("pt-16", hasTabBar ? "pb-24" : "")}>{children}</div>

      {/* tab bar */}
      {hasTabBar ? (
        <nav className="fixed bottom-0 bg-white w-full max-w-lg text-gray-800 border-t px-4 pb-2 pt-3 flex justify-between items-center">
          {/* 홈 */}
          <Link href={"/"}>
            <a className="flex flex-col items-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>

              <span className="text-sm text-gray-800 font-medium">홈</span>
            </a>
          </Link>

          {/* 동네생활 */}
          <Link href={"/community"}>
            <a className="flex flex-col items-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>

              <span className="text-sm text-gray-800 font-medium">
                동네생활
              </span>
            </a>
          </Link>

          {/* 채팅 */}
          <Link href={"/chats"}>
            <a className="flex flex-col items-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>

              <span className="text-sm text-gray-800 font-medium">채팅</span>
            </a>
          </Link>

          {/* 라이브 */}
          <Link href={"/streams"}>
            <a className="flex flex-col items-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span className="text-sm text-gray-800 font-medium">라이브</span>
            </a>
          </Link>

          {/* 나의 포도 */}
          <Link href={"/profile"}>
            <a className="flex flex-col items-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>

              <span className="text-sm text-gray-800 font-medium">
                나의 포도
              </span>
            </a>
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
