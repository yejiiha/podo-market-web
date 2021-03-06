import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@components/Button";
import Input from "@components/Input";
import { Github, Twitter } from "@libs/client/svg";
import useMutation from "@libs/client/useMutation";
import { cls } from "@libs/client/utils";
import { useRouter } from "next/router";

interface EnterForm {
  email?: string;
  phone?: string;
}

interface TokenForm {
  token?: string;
}

interface MutationResult {
  ok: boolean;
}

export default function Enter() {
  const router = useRouter();

  const [enter, { loading, error, data }] =
    useMutation<MutationResult>("/api/users/enter");
  const [confirmToken, { loading: tokenLoading, data: tokenData }] =
    useMutation<MutationResult>("/api/users/confirm");

  const { register, reset, handleSubmit } = useForm<EnterForm>();
  const { register: tokenRegister, handleSubmit: tokenHandleSubmit } =
    useForm<TokenForm>();

  const [method, setMethod] = useState<"email" | "phone">("email");

  const onEmailClick = () => {
    reset();
    setMethod("email");
  };

  const onPhoneClick = () => {
    reset();
    setMethod("phone");
  };

  const onValid = (data: EnterForm) => {
    if (loading) return;

    enter(data);
  };

  const onTokenValid = (data: TokenForm) => {
    console.log(data);

    if (tokenLoading) return;

    confirmToken(data);
  };

  useEffect(() => {
    if (tokenData?.ok) {
      router.push("/");
    }
  }, [tokenData, router]);

  console.log(loading, error, data);

  return (
    <div className="mt-16 px-4">
      <h3 className="text-3xl font-bold text-center">Enter to Podo 🍇</h3>

      <div className="mt-8">
        {data?.ok ? (
          <form
            className="flex flex-col mt-8"
            onSubmit={tokenHandleSubmit(onTokenValid)}
          >
            <Input
              register={tokenRegister("token", {
                required: true,
              })}
              label="Confirmation Token"
              name="token"
              kind="text"
              required={true}
              type="number"
            />

            <div className="mt-6" />

            <Button
              text={tokenLoading ? "loading..." : "Confirm Token"}
              loading={tokenLoading}
            />
          </form>
        ) : (
          <>
            <div className="flex flex-col items-center">
              <h5 className="text-sm text-gray-500 font-semibold">
                Enter using:
              </h5>
              <div className="grid grid-cols-2 mt-8 border-b w-full">
                <button
                  className={cls(
                    "pb-4 font-semibold border-b-2",
                    method === "email"
                      ? `border-purple-500 text-purple-500`
                      : `border-transparent text-gray-500`
                  )}
                  onClick={onEmailClick}
                >
                  Email
                </button>
                <button
                  className={cls(
                    "pb-4 font-semibold border-b-2",
                    method === "phone"
                      ? `border-purple-500 text-purple-500`
                      : `border-transparent text-gray-500`
                  )}
                  onClick={onPhoneClick}
                >
                  Phone
                </button>
              </div>
            </div>

            <form
              className="flex flex-col mt-8"
              onSubmit={handleSubmit(onValid)}
            >
              <Input
                register={
                  method === "email"
                    ? register("email", {
                        required: true,
                      })
                    : register("phone", {
                        required: true,
                      })
                }
                label={method === "email" ? "Email address" : "Phone number"}
                name={method === "email" ? "email" : "phone"}
                kind={method === "email" ? "text" : "phone"}
                required={true}
              />

              <div className="mt-6" />

              <Button
                text={
                  loading
                    ? "loading..."
                    : method === "email"
                    ? "Get login link"
                    : "Get one-time password"
                }
                loading={loading}
              />
            </form>
          </>
        )}

        <div className="mt-8">
          <div className="relative">
            <div className="absolute w-full border-t border-gray-300" />
            <div className="relative -top-3 text-center">
              <span className="bg-white px-2 text-sm text-gray-500">
                Or enter with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-2">
            <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-semibold text-gray-500 hover:bg-gray-50">
              <Twitter />
            </button>
            <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-semibold text-gray-500 hover:bg-gray-50">
              <Github />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
