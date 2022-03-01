import { NextPage } from "next";
import Link from "next/link";
import Layout from "@components/layout";
import TextArea from "@components/TextArea";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Answer, Post, User } from "@prisma/client";
import useMutation from "@libs/client/useMutation";
import { cls } from "@libs/client/utils";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Button from "@components/Button";

interface AnswerWithUser extends Answer {
  user: User;
}

interface PostWithUser extends Post {
  user: User;
  _count: {
    answers: number;
    wonderings: number;
  };
  answers: AnswerWithUser[];
}

interface CommunityPostResponse {
  ok: boolean;
  post: PostWithUser;
  isWondering: boolean;
}

interface AnswerForm {
  answer: string;
}

interface AnswerResponse {
  ok: boolean;
  answer: Answer;
}

const CommunityDetail: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<AnswerForm>();
  const { data, mutate } = useSWR<CommunityPostResponse>(
    router.query.id ? `/api/posts/${router.query.id}` : null
  );
  const [wonder, { loading }] = useMutation(
    `/api/posts/${router.query.id}/wonder`
  );
  const [sendAnswer, { data: answerData, loading: answerLoading }] =
    useMutation<AnswerResponse>(`/api/posts/${router.query.id}/answer`);

  const onWonderClick = () => {
    if (!data) return;
    mutate(
      {
        ...data,
        post: {
          ...data?.post,
          _count: {
            ...data?.post?._count,
            wonderings: data?.isWondering
              ? data?.post?._count?.wonderings - 1
              : data?.post?._count?.wonderings + 1,
          },
        },
        isWondering: !data?.isWondering,
      },
      false
    );

    if (!loading) {
      wonder({});
    }
  };

  const onValid = (answer: AnswerForm) => {
    if (answerLoading) return;
    sendAnswer(answer);
  };

  console.log(data);

  useEffect(() => {
    if (answerData && answerData?.ok) {
      reset();
      mutate();
    }
  }, [answerData, reset, mutate]);

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
              <p className="text-sm font-semibold text-gray-700">
                {data?.post?.user?.name}
              </p>
              <Link href={`/users/profiles/${data?.post?.user?.id}`}>
                <a className="text-xs font-semibold text-gray-500 cursor-pointer">
                  프로필 보기 &rarr;
                </a>
              </Link>
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
            <span className="text-purple-500 font-semibold">Q.</span>
            {data?.post?.question}
          </div>
          <div className="flex space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[1.5px] w-full">
            <button
              className={cls(
                "flex space-x-2 items-center text-sm px-4",
                data?.isWondering ? "text-teal-400" : ""
              )}
              onClick={onWonderClick}
            >
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
              <span>궁금해요 {data?.post?._count?.wonderings}</span>
            </button>

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
              <span>답변 {data?.post?._count?.answers}</span>
            </span>
          </div>
        </div>

        {/* Answer */}
        <div className="px-4 my-5 space-y-5">
          {data?.post?.answers.map((a, i) => (
            <div className="flex items-start space-x-3" key={a?.id}>
              <div className="w-8 h-8 bg-slate-300 rounded-full" />
              <div>
                <span className="text-sm block font-semibold text-gray-700">
                  {a?.user?.name}
                </span>
                <span className="text-xs text-gray-500 block ">
                  {a?.createdAt}
                </span>
                <p className="text-gray-700 mt-2">{a?.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Answer */}
        <form className="px-4" onSubmit={handleSubmit(onValid)}>
          <TextArea
            placeholder="이 질문에 답변을 해보세요!"
            register={register("answer", {
              required: true,
              minLength: 5,
            })}
          />

          <Button text={answerLoading ? "loading..." : "답변하기"} />
        </form>
      </div>
    </Layout>
  );
};

export default CommunityDetail;
