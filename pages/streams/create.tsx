import type { NextPage } from "next";
import Layout from "@components/layout";
import TextArea from "@components/TextArea";
import Input from "@components/Input";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import Button from "@components/Button";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Stream } from "@prisma/client";

interface CreateForm {
  name: string;
  price: number;
  desc: string;
}

interface CreateResponse {
  ok: boolean;
  stream: Stream;
}

const Create: NextPage = () => {
  const router = useRouter();
  const [createStream, { loading, data }] =
    useMutation<CreateResponse>(`/api/streams`);
  const { register, handleSubmit } = useForm<CreateForm>();

  const onValid = (form: CreateForm) => {
    console.log(form);
    if (loading) return;
    createStream(form);
  };

  useEffect(() => {
    if (data && data?.ok) {
      router.push(`/streams/${data?.stream?.id}`);
    }
  }, [data, router]);

  return (
    <Layout canGoBack={true} title="라이브 만들기">
      <form className="space-y-5 py-10 px-4" onSubmit={handleSubmit(onValid)}>
        {/* Name Input */}
        <Input
          kind="text"
          register={register("name", { required: true })}
          name="name"
          required={true}
          label="스트림 이름"
        />
        <Input
          kind="price"
          name="price"
          required={true}
          label="상품 가격"
          register={register("price", { required: true, valueAsNumber: true })}
        />

        {/* Description Input */}
        <div>
          <TextArea
            label="스트림 설명"
            name="desc"
            register={register("desc", { required: true })}
          />
        </div>

        {/* Go Live Btn */}
        <Button text="스트림 시작하기" loading={loading} />
      </form>
    </Layout>
  );
};

export default Create;
