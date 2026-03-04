// Sponsor data structure for The Hype Cave
// This will be replaced with database queries when backend is added

export interface Sponsor {
  id: string;
  companyName: string;
  logo: string;
  website: string;
  tier: "product" | "segment" | "title";
  isActive: boolean;
}

export interface EpisodeSponsor {
  episodeId: number;
  titlePartner?: Sponsor;
  segmentPartner?: Sponsor;
  productPartner?: Sponsor;
}

// Demo sponsors (will be replaced with real data)
export const sponsors: Sponsor[] = [
  // Add sponsors here when they sign up
  // Example:
  // {
  //   id: "sponsor-1",
  //   companyName: "Example Brand",
  //   logo: "/images/sponsors/example-brand.png",
  //   website: "https://example.com",
  //   tier: "title",
  //   isActive: true,
  // },
];

// Episode sponsor assignments
export const episodeSponsors: EpisodeSponsor[] = [
  // Episode 1 sponsors
  {
    episodeId: 1,
    titlePartner: undefined, // Available
    segmentPartner: undefined, // Available
    productPartner: undefined, // Available
  },
  // Episode 2 sponsors
  {
    episodeId: 2,
    titlePartner: undefined, // Available
    segmentPartner: undefined, // Available
    productPartner: undefined, // Available
  },
];

// Helper function to get sponsors for an episode
export const getEpisodeSponsors = (episodeId: number): EpisodeSponsor | undefined => {
  return episodeSponsors.find((es) => es.episodeId === episodeId);
};

// Helper to check if a sponsor slot is available for an episode
export const isSponsorSlotAvailable = (
  episodeId: number,
  slot: "titlePartner" | "segmentPartner" | "productPartner"
): boolean => {
  const episodeSponsor = getEpisodeSponsors(episodeId);
  if (!episodeSponsor) return true;
  return !episodeSponsor[slot];
};
