import PopularArtists from "@/components/pages/artists/PopularArtists";
import FeaturedShows from "@/components/pages/home/FeaturedShows";
import BreadCrumb from "@/components/shared/BreadCrum";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Artists - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};
const artists = () => {
  return (
    <>
      <BreadCrumb page="Popular Artists" />
      <PopularArtists />
      <FeaturedShows />
    </>
  );
};

export default artists;
