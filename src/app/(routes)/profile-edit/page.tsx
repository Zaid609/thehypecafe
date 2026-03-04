import ProfileEditForm from "@/components/pages/profile-edit/ProfileEditForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Profile - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};

const profileEdit = () => {
  return (
    <>
      <ProfileEditForm />
    </>
  );
};

export default profileEdit;
