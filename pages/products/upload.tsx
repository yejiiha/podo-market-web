import { NextPage } from "next";
import Layout from "@components/layout";
import TextArea from "@components/TextArea";
import Input from "@components/Input";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import Button from "@components/Button";
import { useEffect } from "react";
import { Product } from "@prisma/client";
import { useRouter } from "next/router";

interface UploadProductForm {
  name: string;
  price: number;
  description: string;
}

interface UploadProductMutation {
  ok: boolean;
  product: Product;
}

const Upload: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<UploadProductForm>();
  const [uploadProduct, { loading, data }] =
    useMutation<UploadProductMutation>("/api/products");

  const onValid = (data: UploadProductForm) => {
    if (loading) return;
    console.log(data);

    uploadProduct(data);
  };

  useEffect(() => {
    if (data?.ok) {
      router.push(`/products/${data?.product?.id}`);
    }
  }, [data, router]);

  return (
    <Layout canGoBack={true} title="중고거래 글쓰기">
      <form className="px-4 py-16 space-y-5" onSubmit={handleSubmit(onValid)}>
        {/* input file */}
        <div>
          <label className="cursor-pointer w-full text-gray-600 hover:text-purple-500 flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-purple-500 py-6 h-48 rounded-md">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input type="file" className="hidden" />
          </label>
        </div>

        {/* Name input */}
        <div>
          <Input
            required
            label="글 제목"
            name="name"
            register={register("name", {
              required: true,
            })}
          />
        </div>

        {/* Price input */}
        <div>
          <Input
            required
            kind="price"
            label="가격"
            name="price"
            register={register("price", {
              required: true,
            })}
          />
        </div>

        {/* Description input */}
        <div>
          <TextArea
            label="게시글 내용"
            register={register("description", {
              required: true,
            })}
            placeholder="게시글 내용을 작성해주세요. (가품 및 판매금지품목은 게시가 제한될 수 있어요.)"
            required
          />
        </div>

        <Button text={loading ? "로딩중..." : "완료"} />
      </form>
    </Layout>
  );
};

export default Upload;
