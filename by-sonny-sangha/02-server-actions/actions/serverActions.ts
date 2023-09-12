"use server";

import { Product } from "@/typings";
import { revalidateTag } from "next/cache";

export const addProductToDatabase = async (e: FormData) => {
  const product = e.get("product")?.toString();
  const price = e.get("price")?.toString();
  if (!product || !price) return;

  const newProduct: Product = {
    product: product,
    price: price,
  };
  await fetch("https://648066a0f061e6ec4d493780.mockapi.io/products", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });
  revalidateTag("products");
};
