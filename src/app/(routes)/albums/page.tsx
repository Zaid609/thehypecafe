import { topSongData } from "@/../public/data/topSongData";
import PopularAlbums from "@/components/pages/albums/PopularAlbums";
import Trending from "@/components/pages/albums/Trending";
import BreadCrumb from "@/components/shared/BreadCrum";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ablums - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};
const albums = () => {
  return (
    <>
      <BreadCrumb page="Albums" />
      <Trending />
      <PopularAlbums sectionTitle="Top Songs" sliderData={topSongData} />
    </>
  );
};

export default albums;
