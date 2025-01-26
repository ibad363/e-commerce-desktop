import { getFeaturedProduct } from "@/sanity/queries/fetchProduct";
import Homepage from "./components/Hompage/Homepage";
import { CardData } from "./utils/types";

export default async function Home() {

  const products: CardData[] = await getFeaturedProduct();
  return (
    <>
      <Homepage products={products}/>
    </>
  );
}
