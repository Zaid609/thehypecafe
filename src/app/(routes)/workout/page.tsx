import Workout from "@/components/pages/home/Workout";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Workout - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};
const workout = () => {
  return (
    <>
      <BreadCrumSingle page="Workout" />
      <Workout />
    </>
  );
};

export default workout;
