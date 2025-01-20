
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

interface Product {
    _id: string;
    _type: string;
    imageUrl:string
    sizes: string[];
    description: string;
    name: string;
    price: number;
    tags: string[];
    rating: number;
    category: string;
    discountPercentage: number;
    stockLevel:number;
    isFeaturedProduct:boolean
}

export const getAllProducts = async () => {
  const ALL_PRODUCTS_QUERY = defineQuery(`*[_type == "product"]{
    _id,
    name,
    rating,
    "imageUrl": image.asset->url,
    price,
    stockLevel,
}`);
  try {
    const products = await sanityFetch({ query: ALL_PRODUCTS_QUERY });
    return products.data || [];
  } catch (error) {
    console.error("error fetching all products " + error);
    return [];
  }
};

// : Promise<Product | null>
export const getProductById = async (id: string) => {
  const PRODUCT_QUERY_BY_ID = defineQuery(`*[_type == "product" && _id == $id][0]{
    name,
    rating,
    discountPercentage,
    price,
    "imageUrl": image.asset->url,
    _id,
    category,
    description,
    stockLevel,
    tags,
    sizes,
    isFeaturedProduct
  }`);
  try {
    const product = await sanityFetch({ query: PRODUCT_QUERY_BY_ID, params: { id } });
    return product.data as Product || null;
  } catch (error) {
    console.error("Error fetching product by ID: " + error);
    return null;
  }
};

export const getFeaturedProduct = async ()=> {
  const FEATURED_PRODUCT_QUERY = defineQuery(`*[_type == "product" && isFeaturedProduct == true]{
   _id,
    name,
    rating,
    "imageUrl": image.asset->url,
    price,
    stockLevel,
  }`);
  try {
    const product = await sanityFetch({ query: FEATURED_PRODUCT_QUERY});
    return product.data || null ;
  } catch (error) {
    console.error("Error fetching product by ID: " + error);
    return null;
  }
};