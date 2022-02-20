import type { NextPage } from "next";
import Link from "next/link";
import FloatingButton from "@components/FloatingButton";
import Item from "@components/Item";
import Layout from "@components/layout";
import { Comment, Heart } from "@libs/client/svg";
import useUser from "@libs/client/useUser";
import useSWR from "swr";
import { Product } from "@prisma/client";

interface ProductsResponse {
  ok: boolean;
  products: Product[];
}

const Home: NextPage = () => {
  const { user, isLoading } = useUser();
  const { data } = useSWR<ProductsResponse>("/api/products");

  console.log(user);
  console.log(data);

  return (
    <Layout title="홈" hasTabBar={true}>
      <div className="flex flex-col space-y-5">
        {data?.products?.map((p) => (
          <Item
            id={p.id}
            key={p.id}
            title={p.name}
            price={p.price}
            hearts={1}
            comments={1}
          />
        ))}

        <FloatingButton href={"/products/upload"}>
          <Comment />
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Home;
