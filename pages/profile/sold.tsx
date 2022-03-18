import type { NextPage } from "next";
import Layout from "@components/layout";
import ProductList from "@components/productList";

const Sold: NextPage = () => {
  return (
    <Layout canGoBack={true} title="판매내역">
      <div className="flex flex-col space-y-5 py-5">
        <ProductList kind="sales" />
      </div>
    </Layout>
  );
};

export default Sold;
