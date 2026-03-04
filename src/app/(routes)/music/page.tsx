import MusicSection from "@/components/pages/music/MusicSection";
import BreadCrumb from "@/components/shared/BreadCrum";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};

const music = () => {
  return (
    <>
      <BreadCrumb page="Top Songs" />
      <MusicSection />
    </>
  );
};

export default music;
