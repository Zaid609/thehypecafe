import ep1thumb from "@/../public/images/episodes/ep1_thumb_135x135.jpg";
import ep2thumb from "@/../public/images/episodes/ep2_thumb_135x135.jpg";
import image3 from "@/../public/img/feature/feature-small3.jpg";
import { v4 as uuidv4 } from "uuid";
export const featureShowRightData = [
  {
    id: uuidv4(),
    image: ep1thumb,
    totalEpisodes: 1,
    title: "EP #1: Frankie Krutches - Dipset, Dallas Cowboys & More",
  },
  {
    id: uuidv4(),
    image: ep2thumb,
    totalEpisodes: 2,
    title: "EP #2: Chris White - CZW Wrestling, Top 5 Wrestlers",
  },
  {
    id: uuidv4(),
    image: image3,
    totalEpisodes: 3,
    title: "EP #3: Coming Soon",
  },
];
