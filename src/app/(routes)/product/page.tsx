import AllProducts from "@/components/pages/product/AllProducts";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Product - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};

const product = () => {
  return (
    <>
      <BreadCrumSingle page="Products" />
      <AllProducts />
    </>
  );
};

export default product;
