// Sponsor data structure for The Hype Cave
// This will be replaced with database queries when backend is added

export interface Sponsor {
  id: string;
  companyName: string;
  logo: string;
  website: string;
  tier: "product" | "segment" | "title" | "featured";
  isActive: boolean;
  description?: string;
}

export interface EpisodeSponsor {
  episodeId: number;
  titlePartner?: Sponsor;
  segmentPartner?: Sponsor;
  productPartner?: Sponsor;
}

// Featured sponsors (displayed on homepage)
export const featuredSponsors: Sponsor[] = [
  {
    id: "sponsor-uts",
    companyName: "Under The Sun Roofing & Solar",
    logo: "/media/images/sponsors/under-the-sun-roofing.jpg",
    website: "https://underthesunrs.com",
    tier: "featured",
    isActive: true,
    description: "Quality roofing and solar solutions for your home",
  },
];

// Demo sponsors (will be replaced with real data)
export const sponsors: Sponsor[] = [
  ...featuredSponsors,
  // Add more sponsors here when they sign up
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
