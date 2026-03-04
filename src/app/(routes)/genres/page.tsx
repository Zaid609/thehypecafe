import GenresSection from "@/components/pages/genres/GenresSection";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Genres - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};
const genres = () => {
  return (
    <>
      <BreadCrumSingle page="Genres" />
      <GenresSection />
    </>
  );
};

export default genres;
