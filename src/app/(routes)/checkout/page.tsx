import Checkout from "@/components/pages/checkout/Checkout";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Checkout - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};
const checkoutSection = () => {
  return (
    <>
      <BreadCrumSingle page="Check Out" />
      <Checkout />
    </>
  );
};

export default checkoutSection;
