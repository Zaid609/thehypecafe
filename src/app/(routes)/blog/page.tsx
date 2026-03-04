import LatestPost from "@/components/pages/blog/LatestPost";
import BreadCrumb from "@/components/shared/BreadCrum";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};
const blog = () => {
  return (
    <>
      <BreadCrumb page="Latest Post" />
      <LatestPost />
    </>
  );
};

export default blog;
