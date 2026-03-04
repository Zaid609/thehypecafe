import CommonDetails from "@/components/pages/album-details/CommonDetails";
import ConveterHead from "@/components/pages/album-details/ConveterHead";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Trending Details - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};
const trendingDetails = () => {
  return (
    <>
      <CommonDetails image="/img/details/audio-trending.jpg">
        <ConveterHead name="Florida Georgia" songTitle="Girls in The Hood" />
      </CommonDetails>
    </>
  );
};

export default trendingDetails;
