import CommonDetails from "@/components/pages/album-details/CommonDetails";
import ConveterHead from "@/components/pages/album-details/ConveterHead";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Album Details - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};
const albumDetails = () => {
  return (
    <>
      <CommonDetails>
        <ConveterHead name="Chester Bennington" songTitle="44m" />
      </CommonDetails>
    </>
  );
};

export default albumDetails;
