import EventSection from "@/components/pages/event/EventSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};
const createEvent = () => {
  return (
    <>
      <EventSection />
    </>
  );
};

export default createEvent;
