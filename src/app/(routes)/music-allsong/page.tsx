import { topSongData } from "@/../public/data/topSongData";
import PopularAlbums from "@/components/pages/albums/PopularAlbums";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Music All Song - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};

const musicAllSong = () => {
  return (
    <>
      <BreadCrumSingle page="Music" />
      <PopularAlbums sectionTitle="Top Songs" sliderData={topSongData} />
    </>
  );
};

export default musicAllSong;
