import CommonDetails from "@/components/pages/album-details/CommonDetails";
import ConveterHead from "@/components/pages/album-details/ConveterHead";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Music Details - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};

const musicDetails = () => {
  return (
    <>
      <CommonDetails image="/img/trending/audio-topsong.jpg">
        <ConveterHead
          name="Chester Bennington"
          songTitle="I Love My Country [Online-audio-converter.com]"
        />
      </CommonDetails>
    </>
  );
};

export default musicDetails;
