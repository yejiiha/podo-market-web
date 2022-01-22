import type { NextPage } from "next";
import Layout from "../../components/layout";
import Message from "../../components/Message";

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack={true} title="yejiiha">
      <div className="py-10 pb-16 px-4 space-y-4">
        {/* receive message */}
        <Message message="Hi how much are you selling them for? fhjkdshkfjhdsjkfhsdkjfhk" />

        <Message message="I want ￦20,000" reversed={true} />

        {/* receive message */}
        <Message message="Hi how much are you selling them for? fhjkdshkfjhdsjkfhsdkjfhk" />

        {/* receive message */}
        <Message message="Hi how much are you selling them for? fhjkdshkfjhdsjkfhsdkjfhk" />

        {/* send message */}
        <Message message="I want ￦20,000" reversed={true} />

        {/* receive message */}
        <Message message="Hi how much are you selling them for? fhjkdshkfjhdsjkfhsdkjfhk" />

        {/* receive message */}
        <Message message="Hi how much are you selling them for? fhjkdshkfjhdsjkfhsdkjfhk" />

        {/* send message */}
        <Message message="I want ￦20,000" reversed={true} />

        {/* receive message */}
        <Message message="Hi how much are you selling them for? fhjkdshkfjhdsjkfhsdkjfhk" />

        {/* receive message */}
        <Message message="Hi how much are you selling them for? fhjkdshkfjhdsjkfhsdkjfhk" />

        {/* send message */}
        <Message message="I want ￦20,000" reversed={true} />

        {/* receive message */}
        <Message message="Hi how much are you selling them for? fhjkdshkfjhdsjkfhsdkjfhk" />

        {/* receive message */}
        <Message message="Hi how much are you selling them for? fhjkdshkfjhdsjkfhsdkjfhk" />

        {/* send message */}
        <Message message="I want ￦20,000" reversed={true} />

        {/* input box */}
        <div className="fixed py-2 bg-white  bottom-0 inset-x-0">
          <div className="flex relative max-w-md items-center  w-full mx-auto">
            <input
              type="text"
              className="shadow-sm rounded-full w-full border-gray-300 focus:ring-purple-500 focus:outline-none pr-12 focus:border-purple-500"
            />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
              <button className="flex items-center bg-purple-500 rounded-full px-3 hover:bg-purple-400 text-sm text-white">
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatDetail;
