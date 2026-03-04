import MoodsSection from "@/components/pages/moods/MoodsSlider";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moods - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};

const moods = () => {
  return (
    <>
      <BreadCrumSingle page="Moods" />
      <MoodsSection />
    </>
  );
};

export default moods;
