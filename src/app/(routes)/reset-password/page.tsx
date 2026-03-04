import PasswordResetForm from "@/components/pages/reset-password/PasswordResetForm";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Reset Password - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};

const resetPassword = () => {
  return (
    <>
      <BreadCrumSingle page="Reset Password" />
      <PasswordResetForm />
    </>
  );
};

export default resetPassword;
