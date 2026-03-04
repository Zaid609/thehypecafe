import FeatureShowSection from "@/components/pages/freature-show/FeatureShowSection";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Feature Show - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};
const FeatureShow = () => {
  return (
    <>
      <BreadCrumSingle page="Show" />
      <FeatureShowSection />
    </>
  );
};

export default FeatureShow;
