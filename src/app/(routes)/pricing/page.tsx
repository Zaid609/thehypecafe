import PricingPlan from "@/components/pages/pricing/PricingPlan";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pricing - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};

const pricing = () => {
  return (
    <>
      <BreadCrumSingle page="Pricing Plan" />
      <PricingPlan />
    </>
  );
};

export default pricing;
