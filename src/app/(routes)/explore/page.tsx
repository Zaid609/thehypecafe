import ExploreSection from "@/components/pages/explore/ExploreSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Explore - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};
const createEvent = () => {
  return (
    <>
      <ExploreSection />
    </>
  );
};

export default createEvent;
