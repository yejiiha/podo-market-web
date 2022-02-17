import type { NextPage } from "next";
import Link from "next/link";
import FloatingButton from "@components/FloatingButton";
import Item from "@components/Item";
import Layout from "@components/layout";
import { Comment, Heart } from "@libs/client/svg";
import useUser from "@libs/client/useUser";

const Home: NextPage = () => {
  const { user, isLoading } = useUser();

  console.log(user);

  return (
    <Layout title="홈" hasTabBar={true}>
      <div className="flex flex-col space-y-5">
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

        <FloatingButton href={"/items/upload"}>
          <Comment />
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Home;
