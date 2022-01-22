import type { NextPage } from "next";
import Item from "../../components/Item";
import Layout from "../../components/layout";

const Loved: NextPage = () => {
  return (
    <Layout canGoBack={true} title="관심목록">
      <div className="flex flex-col space-y-5 py-5">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            id={i}
            key={i}
            title={"New iPhone 14"}
            price={"$95"}
            hearts={1}
            comments={1}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Loved;
