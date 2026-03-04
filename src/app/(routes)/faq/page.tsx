import FaqSection from "@/components/pages/faq/FaqSection";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faq - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};
const Faq = () => {
  return (
    <>
      <BreadCrumSingle page="Faq" />
      <FaqSection />
    </>
  );
};

export default Faq;
