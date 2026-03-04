import CommonDetails from "@/components/pages/album-details/CommonDetails";
import ConveterHead from "@/components/pages/album-details/ConveterHead";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mood Details - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};

const moodsDetails = () => {
  return (
    <>
      <CommonDetails image="/img/details/online-audio2.jpg">
        <ConveterHead name="Chester Bennington" songTitle="Party Duluxe" />
      </CommonDetails>
    </>
  );
};

export default moodsDetails;
