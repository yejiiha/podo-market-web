import { NextPage } from "next";
import Layout from "@components/layout";
import TextArea from "@components/TextArea";
import { useForm } from "react-hook-form";
import Button from "@components/Button";
import useMutation from "@libs/client/useMutation";
import { useEffect } from "react";
import { Post } from "@prisma/client";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";

interface WriteForm {
  question: string;
}

interface WriteResponse {
  ok: boolean;
  post: Post;
}

const Write: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<WriteForm>();
  const [post, { loading, data }] = useMutation<WriteResponse>("/api/posts");

  const onValid = (data: WriteForm) => {
    if (loading) return;
    console.log(data);
    post(data);
  };

  useEffect(() => {
    if (data && data.ok) {
      router.push(`/community/${data?.post?.id}`);
    }
  }, [data, router]);

  return (
    <Layout canGoBack={true} title="동네생활 글쓰기">
      <form className="px-4 py-16" onSubmit={handleSubmit(onValid)}>
        <TextArea
          placeholder="Ask a question!"
          register={register("question", { required: true, minLength: 3 })}
        />

        <div className="mt-2">
          <Button text={loading ? "loading..." : "Submit"} />
        </div>
      </form>
    </Layout>
  );
};

export default Write;
