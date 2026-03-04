import SignInForm from "@/components/pages/signin/SignInForm";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sign in - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};

const signIn = () => {
  return (
    <>
      <BreadCrumSingle page="Sign in" />
      <SignInForm />
    </>
  );
};

export default signIn;
