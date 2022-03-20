import type { NextPage } from "next";
import Item from "@components/Item";
import Layout from "@components/layout";
import useSWR from "swr";
import { Product } from "@prisma/client";
import ProductList from "@components/ProductList";

interface PodoRecord {
  id: number;
  product: Product;
}
interface ProductListResponse {
  [key: string]: PodoRecord[];
}

const Loved: NextPage = () => {
  const kind = "favs";
  const { data } = useSWR<ProductListResponse>(
    `/api/users/me/records?kind=${kind}`
  );

  return (
    <Layout canGoBack={true} title="관심목록">
      <div className="flex flex-col space-y-5 py-5">
        <ProductList kind="favs" />
      </div>
    </Layout>
  );
};

export default Loved;
