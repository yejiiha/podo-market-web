import type { NextPage } from "next";
import Input from "@components/Input";
import Layout from "@components/layout";
import useUser from "@libs/client/useUser";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useMutation from "@libs/client/useMutation";
import Button from "@components/Button";
import { imageDelivery } from "@libs/client/utils";
import Image from "next/image";

interface EditProfileForm {
  email?: string;
  phone?: string;
  name?: string;
  avatar?: FileList;
  formError?: string;
}

interface EditProfileResponse {
  ok: boolean;
  error?: string;
}

const EditProfile: NextPage = () => {
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    watch,
    formState: { errors },
  } = useForm<EditProfileForm>();
  const [editProfile, { data, loading }] =
    useMutation<EditProfileResponse>(`/api/users/me`);
  const [avatarPreview, setAvatarPreview] = useState("");

  const avatar = watch("avatar");

  const onValid = async ({ email, phone, name, avatar }: EditProfileForm) => {
    if (loading) return;

    if (email === "" && phone === "" && name === "") {
      return setError("formError", {
        message: "이메일이나 전화번호 중 하나가 필요합니다.",
      });
    }

    if (avatar && avatar.length > 0 && user) {
      // ask for CF URL
      const cloudFlareRequest = await fetch(`/api/files`);
      const { uploadURL } = await cloudFlareRequest.json();
      // upload file to CF URL
      const form = new FormData();
      form.append("file", avatar[0], `${user?.id}-avatar`);

      const {
        result: { id },
      } = await (
        await fetch(uploadURL, {
          method: "POST",
          body: form,
        })
      ).json();

      editProfile({
        email,
        phone,
        name,
        avatarId: id, // CF URL
      });
    } else {
      editProfile({
        email,
        phone,
        name,
      });
    }
  };

  useEffect(() => {
    if (user?.email) setValue("email", user?.email);

    if (user?.phoneNumber) setValue("phone", user?.phoneNumber);

    if (user?.name) setValue("name", user?.name);

    if (user?.avatarUrl)
      setAvatarPreview(imageDelivery(user?.avatarUrl, "avatar"));
  }, [user, setValue]);

  useEffect(() => {
    if (data && !data.ok && data.error) {
      setError("formError", { message: data.error });
    }
  }, [data, setError]);

  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setAvatarPreview(URL.createObjectURL(file));
    }
  }, [avatar]);

  return (
    <Layout canGoBack={true} title="프로필 수정">
      <form className="py-10 px-4 space-y-4" onSubmit={handleSubmit(onValid)}>
        <div className="flex items-center space-x-3">
          {avatarPreview ? (
            <Image
              src={avatarPreview}
              className="w-14 h-14 rounded-full bg-slate-500"
              width={56}
              height={56}
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-slate-500" />
          )}
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 text-gray-700"
          >
            변경하기
            <input
              {...register("avatar")}
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>

        <div className="space-y-1">
          <Input
            label={"닉네임"}
            name="name"
            kind={"text"}
            required={false}
            register={register("name")}
          />
        </div>

        <div className="space-y-1">
          <Input
            label={"이메일"}
            name="email"
            kind={"text"}
            required={false}
            register={register("email")}
          />
        </div>
        <div className="space-y-1">
          <Input
            label={"전화번호"}
            name="phone"
            kind={"phone"}
            required={false}
            register={register("phone")}
          />
        </div>

        {errors?.formError && (
          <span className="my-2 text-red-500 font-bold text-sm block">
            {errors?.formError?.message}
          </span>
        )}

        <Button text="프로필 수정하기" loading={loading} />
      </form>
    </Layout>
  );
};

export default EditProfile;
