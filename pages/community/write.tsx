import { NextPage } from "next";
import Layout from "@components/layout";
import TextArea from "@components/TextArea";

const Write: NextPage = () => {
  return (
    <Layout canGoBack={true} title="동네생활 글쓰기">
      <form className="px-4 py-16">
        <TextArea placeholder="Ask a question!" />

        <button className="w-full mt-2 bg-purple-500 hover:bg-purple-400 text-white py-2 px-4 border border-transparent rounded-md shadow-sm font-semibold text-sm focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:outline-none">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Write;