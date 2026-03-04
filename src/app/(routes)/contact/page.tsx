import ContactSection from "@/components/pages/contact/ContactSection";
import BreadCrumSingle from "@/components/shared/BreadCrumSingle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};
const contact = () => {
  return (
    <>
      <BreadCrumSingle page="Contact" />
      <ContactSection />
    </>
  );
};

export default contact;
