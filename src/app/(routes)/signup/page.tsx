import SignUpForm from "@/components/pages/signup/SignUpForm";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sign up - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};

const signUp = () => {
  return (
    <>
      <BreadCrumSingle page="Sign up" />
      <SignUpForm />
    </>
  );
};

export default signUp;
