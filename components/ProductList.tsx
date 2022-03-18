import { Product } from "@prisma/client";
import useSWR from "swr";
import Item from "./Item";

interface ProductListProps {
  kind: "favs" | "sales" | "purchases";
}

interface PodoRecord {
  id: number;
  product: Product;
}
interface ProductListResponse {
  [key: string]: PodoRecord[];
}

export default function ProductList({ kind }: ProductListProps) {
  const { data } = useSWR<ProductListResponse>(
    `/api/users/me/records?kind=${kind}`
  );

  return (
    <>
      {data
        ? data[kind]?.map((record) => (
            <Item
              id={record?.product?.id}
              key={record?.id}
              title={record?.product?.name}
              price={record?.product?.price}
              hearts={record?.product?.favCount}
              comments={0}
            />
          ))
        : null}
    </>
  );
}
