import TrendingSection from "@/components/pages/trending/TrendingSection";
import BreadCrumb from "@/components/shared/BreadCrum";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Trending - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};
const trending = () => {
  return (
    <>
      <BreadCrumb page="Trending" />
      <TrendingSection />
    </>
  );
};

export default trending;
