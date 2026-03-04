import PodcastSection from "@/components/pages/podcasts/PodcastSection";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Podcasts - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};

const podcast = () => {
  return (
    <>
      <BreadCrumSingle page="Podcasts" />
      <PodcastSection />
    </>
  );
};

export default podcast;
