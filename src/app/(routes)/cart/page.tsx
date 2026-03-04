import ProductDetails from "@/components/pages/cart/ProductDetails";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};
const cart = () => {
  return (
    <>
      <BreadCrumSingle page="Cart" />
      <ProductDetails />
    </>
  );
};

export default cart;
