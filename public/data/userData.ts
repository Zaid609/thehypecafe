// User data structure for The Hype Cave
// This will be replaced with authentication/database when backend is added

export type UserRole = "fan" | "artist" | "artist-pro" | "sponsor";

export interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  role: UserRole;
  avatar: string;
  coverImage: string;
  bio?: string;
  createdAt: string;
  // Artist-specific fields
  artistName?: string;
  followers?: number;
  tracks?: number;
  // Sponsor-specific fields
  companyName?: string;
  sponsorTier?: "product" | "segment" | "title";
  website?: string;
}

// Demo user (will be replaced with actual auth user)
export const currentUser: User = {
  id: "user-1",
  name: "David Malan",
  email: "david@example.com",
  username: "duhvr847y439",
  role: "fan",
  avatar: "/img/profile/david.jpg",
  coverImage: "/img/profile/profile-cover.jpg",
  bio: "Music enthusiast and podcast lover.",
  createdAt: "2026-03-01",
};

// Get role display name
export const getRoleDisplayName = (role: UserRole): string => {
  const roleNames: Record<UserRole, string> = {
    fan: "Fan",
    artist: "Artist",
    "artist-pro": "Artist Pro",
    sponsor: "Sponsor Partner",
  };
  return roleNames[role];
};

// Get role badge color class
export const getRoleBadgeClass = (role: UserRole): string => {
  const badgeClasses: Record<UserRole, string> = {
    fan: "bg-success",
    artist: "basebg",
    "artist-pro": "basebg2",
    sponsor: "basebg3",
  };
  return badgeClasses[role];
};
