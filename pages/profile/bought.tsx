import type { NextPage } from "next";
import Item from "@components/Item";
import Layout from "@components/layout";
import ProductList from "@components/ProductList";

const Bought: NextPage = () => {
  return (
    <Layout canGoBack={true} title="구매내역">
      <div className="flex flex-col space-y-5 py-5">
        <ProductList kind="purchases" />
      </div>
    </Layout>
  );
};

export default Bought;
