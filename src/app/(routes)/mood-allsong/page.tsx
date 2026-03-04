import { songUpgradeData } from "@/../public/data/songUpgrdeData";
import SongUpgrade from "@/components/pages/album-allsong/SongUpgrade";
import MoodsSlider from "@/components/pages/moods/MoodsSlider";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mood All Song - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};

const moodsAllSong = () => {
  return (
    <>
      <BreadCrumSingle page="Moods" />
      <MoodsSlider />
      <SongUpgrade
        sectionTitle=" Most Popular This Week"
        artistSong={songUpgradeData}
      />
    </>
  );
};

export default moodsAllSong;
