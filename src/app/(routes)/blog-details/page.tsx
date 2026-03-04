import BlogDetailsPost from "@/components/pages/blog-details/BlogDetailsPost";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Blog Details - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};
const blogDetails = () => {
  return (
    <>
      <BlogDetailsPost />
    </>
  );
};

export default blogDetails;
