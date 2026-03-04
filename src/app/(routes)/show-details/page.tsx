import ShowDetailsSection from "@/components/pages/show-details/ShowDetailsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Show Details - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};

const showDetails = () => {
  return (
    <>
      <ShowDetailsSection />
    </>
  );
};

export default showDetails;
