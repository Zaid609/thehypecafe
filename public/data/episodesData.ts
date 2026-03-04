export interface Episode {
  id: number;
  title: string;
  guest: string;
  episodeNumber: number;
  thumbnail: string;
  youtubeUrl: string;
  duration: string;
  views: number;
  description: string;
  releaseDate: string;
}

export const episodesData: Episode[] = [
  {
    id: 2,
    title: "Chris White talks CZW Wrestling, Hulk Hogan, Top 5 Pro Wrestlers and More",
    guest: "Chris White",
    episodeNumber: 2,
    thumbnail: "/images/episodes/episode-2.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=GpDikUh3Bbg",
    duration: "30:09",
    views: 148,
    description:
      "Chris White joins The Hype Cave to discuss his passion for professional wrestling, shares stories about CZW Wrestling, debates Hulk Hogan's legacy, and ranks his top 5 pro wrestlers of all time.",
    releaseDate: "March 2026",
  },
  {
    id: 1,
    title: "Frankie Krutches speaks on Dipset, Dallas Cowboys, Kartalk with Krutch and more",
    guest: "Frankie Krutches",
    episodeNumber: 1,
    thumbnail: "/images/episodes/episode-1.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=PGo11BLDHMU",
    duration: "29:08",
    views: 253,
    description:
      "In the debut episode of The Hype Cave, Frankie Krutches shares his thoughts on Dipset, Dallas Cowboys football, his show Kartalk with Krutch, and what drives his creative vision.",
    releaseDate: "March 2026",
  },
];

// Helper to get episode by number
export const getEpisodeByNumber = (num: number): Episode | undefined => {
  return episodesData.find((ep) => ep.episodeNumber === num);
};

// Helper to get featured/latest episode (most recent first)
export const getLatestEpisode = (): Episode | undefined => {
  return episodesData[0];
};

// Get all episodes sorted by episode number (newest first)
export const getAllEpisodes = (): Episode[] => {
  return [...episodesData].sort((a, b) => b.episodeNumber - a.episodeNumber);
};
