import { NextPage } from "next";
import Layout from "../../components/layout";

const Write: NextPage = () => {
  return (
    <Layout canGoBack={true} title="동네생활 글쓰기">
      <form className="px-4 py-16">
        <textarea
          rows={4}
          className="mt-1 shadow-sm w-full focus:ring-purple-500 rounded-md border-gray-300 focus:border-purple-500"
          placeholder="Ask a question!"
        />
        <button className="w-full mt-2 bg-purple-500 hover:bg-purple-400 text-white py-2 px-4 border border-transparent rounded-md shadow-sm font-semibold text-sm focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:outline-none">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Write;
