import PrivacyPolicy from "@/components/pages/privacy/PrivacyPolicy";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Privacy - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};

const privacy = () => {
  return (
    <>
      <BreadCrumSingle page="Privacy Policy" />
      <PrivacyPolicy />
    </>
  );
};

export default privacy;
