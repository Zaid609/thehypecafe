import ProfileSection from "@/components/pages/profile/ProfileSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Profile - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};

const profile = () => {
  return (
    <>
      <ProfileSection />
    </>
  );
};

export default profile;
