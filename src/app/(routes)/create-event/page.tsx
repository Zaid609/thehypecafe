import CreateEventSection from "@/components/pages/create-event/CreateEventSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Create Event - The Hype Cave - Music & Podcast Streaming",
  description: "The Hype Cave - Music & Podcast Streaming",
};
const createEvent = () => {
  return (
    <>
      <CreateEventSection />
    </>
  );
};

export default createEvent;
