# The Hype Cave - Update 2 (March 4, 2026)

## Summary
Platform now has structured episode content, onboarding flows for all user types, and sponsor placement system ready for monetization.

---

## Episode System

### Episode Data Structure
Location: `public/data/episodesData.ts`

```typescript
interface Episode {
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
```

### Current Episodes
- **Episode #1**: Frankie Krutches (29:08, 253 views)
- **Episode #2**: Chris White (30:09, 148 views)

### Episode Pages
- `/watch` - All episodes grid with featured episode
- `/watch/[episode]` - Individual episode page with YouTube embed
- Episode cards link to individual watch pages
- Thumbnails stored in `/public/images/episodes/`

---

## Onboarding System

### Route: `/onboarding`

### Three User Flows:

**Fan Flow (3 steps)**
1. Welcome
2. Discover Content
3. Complete

**Artist Flow (4-5 steps)**
1. Welcome
2. Set Up Profile (name, bio)
3. Upload First Project
4. Analytics (Pro only)
5. Complete

**Sponsor Flow (4 steps)**
1. Welcome
2. Company Details
3. Choose Tier (Product/Segment/Title)
4. Review & Submit

### Pricing → Signup Links
- Artist Starter → `/signup?role=artist`
- Artist Pro → `/signup?role=artist-pro`
- Sponsor Partner → `/signup?role=sponsor`

---

## Sponsor System

### Data Structure
Location: `public/data/sponsorsData.ts`

```typescript
interface Sponsor {
  id: string;
  companyName: string;
  logo: string;
  website: string;
  tier: "product" | "segment" | "title";
  isActive: boolean;
}

interface EpisodeSponsor {
  episodeId: number;
  titlePartner?: Sponsor;
  segmentPartner?: Sponsor;
  productPartner?: Sponsor;
}
```

### Sponsor Tiers
1. **Product Partner** - $250/mo
2. **Segment Partner** - $400/mo
3. **Title Partner** - $1,000/mo

### Episode Sponsor Placements
Each episode watch page shows:
- Title Partner slot
- Segment Partner slot
- Product Partner slot

Shows sponsor logo/link when filled, "Available" placeholder when open.

---

## User System

### Data Structure
Location: `public/data/userData.ts`

```typescript
type UserRole = "fan" | "artist" | "artist-pro" | "sponsor";

interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  role: UserRole;
  avatar: string;
  coverImage: string;
  bio?: string;
  artistName?: string;
  companyName?: string;
  sponsorTier?: string;
}
```

### Profile Page
- Now uses dynamic user data
- Role badge shows user type (Fan, Artist, Artist Pro, Sponsor Partner)
- Links to `/profile-edit`

---

## Pricing Page Updates

### Sponsor Card Text
- Subtitle: "Sponsor The Hype Cave Podcast"
- Description: "Promote your brand to The Hype Cave audience through podcast sponsorship placements."
- Tier selector: "Choose Your Sponsorship Tier"
- Price label: "Podcast Sponsorship Placement"

---

## Files Changed/Created

### New Files
- `src/app/(routes)/onboarding/page.tsx`
- `src/app/(routes)/watch/[episode]/page.tsx`
- `src/components/pages/home/LatestEpisode.tsx`
- `public/data/sponsorsData.ts`
- `public/data/userData.ts`

### Modified Files
- `src/app/(routes)/page.tsx` - Removed Workout section
- `src/app/(routes)/watch/page.tsx` - Fixed bugs, added episode links
- `src/components/pages/pricing/PricingPlan.tsx` - Updated buttons and text
- `src/components/pages/profile/ProfileSection.tsx` - Dynamic user data
- `public/data/featureShowData.ts` - Episode 1 thumbnail in Featured Shows
- `src/styles/sass/_layout/_custom-pages.scss` - Onboarding and sponsor styles

---

## Next Steps (Recommended)

1. **Add YouTube URLs** to episode data (replace placeholder links)
2. **Create Episode #2 thumbnail** (`/public/images/episodes/episode-2.jpg`)
3. **Connect signup form** to actually create user accounts
4. **Add authentication** to protect routes and persist user data
5. **Build sponsor dashboard** for managing placements
6. **Create artist upload system** for music files

---

## Build Status
✓ Lint passed (only pre-existing warnings)
✓ Build successful (56 pages generated)
