import type { NextPage } from "next";
import Input from "@components/Input";
import Layout from "@components/layout";

const EditProfile: NextPage = () => {
  return (
    <Layout canGoBack={true} title="프로필 수정">
      <div className="py-10 px-4 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full bg-slate-500" />
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 text-gray-700"
          >
            Change
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <div className="space-y-1">
          <Input
            label={"Email address"}
            name="email"
            kind={"text"}
            required={true}
          />
        </div>
        <div className="space-y-1">
          <Input
            label={"Phone number"}
            name="phone"
            kind={"phone"}
            required={true}
          />
        </div>
        <button className="mt-5 w-full bg-purple-500 hover:bg-purple-400 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold focus:outline-none ">
          Update profile
        </button>
      </div>
    </Layout>
  );
};

export default EditProfile;
