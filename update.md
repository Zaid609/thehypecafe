# The Hype Cave - Phase A & B Update Notes

## Build Status: ✅ PASSING

---

## Phase A: UI Shell Rebrand ✅
- Rebranded all "Streamio" references to "The Hype Cave"
- Updated logos (logo.png, favicon.png, favicon-small.png)
- Footer: "© The Hype Cave" + "Powered By Zaid The Admin"
- Homepage reordered: Banner → Featured Shows → Trending Songs
- README.md created with full project documentation + AI collaboration protocol

## Phase B: Route Structure ✅
- `/watch` - Episode viewing page (placeholder)
- `/clips` - Clip gallery page (placeholder)
- `/artist/[slug]` - Dynamic artist profile page
- `/sponsor` - Sponsor page (merged into memberships)
- Memberships page updated with sponsor stats row

## Navigation Cleanup ✅
Simplified sidebar:
- Home, Watch, Shows, Music, Clips, Artists, Event
- Pages dropdown (Blog, Contact, FAQ, Privacy, Pricing)

## Pricing Page Update ✅
Restructured `/pricing` with three cards:

**1. Artist Starter** — $0/month
- Artist profile page
- Upload 1 mixtape or project
- Track preview for listeners
- Appear in artist discovery
- Basic analytics

**2. Artist Pro** — $15/month ($13 yearly)
- Unlimited track uploads
- Unlimited mixtapes
- Full song streaming
- Downloadable music for members
- Featured in discovery sections
- Artist analytics dashboard

**3. Sponsor Partner** — Dynamic pricing with tier toggle
- Defaults to **Product Partner ($250)**
- Radio toggle for tier selection:
  - Product Partner — $250
  - Segment Partner — $400
  - Title Partner — $1,000
- Includes logo placement, shoutouts, brand placement, social mentions, giveaway opportunities
- Price updates dynamically based on selected tier
- Yearly discount (10%) applies to all tiers

Stats row unchanged: 50K+ listeners, 200+ episodes, 25K+ social following, 45 min avg episode length

## TypeScript Fixes (pre-existing theme issues)
| File | Change |
|------|--------|
| `cart-slich.ts` | `id: number` → `id: string` |
| `CartRow.tsx` | `id: number` → `id: string` |
| `ProductCard.tsx` | `id: number` → `id: string` |
| `Product.tsx` | `id: number` → `id: string` |
| `ProductSliderCard.tsx` | `id: number` → `id: string` |
| `TrendingCard.tsx` | `audioLink` made optional |
| `LatestPostCard.tsx` | `song` made optional |
| `ExploreSectionTableRow.tsx` | `song` made optional |
| `WeeklyTopTrack.tsx` | `song` made optional |
| `Navbar.tsx` | Fixed `className` destructuring |

---

## Ready for Phase C: Prisma Database Layer

### Proposed Schema Models
- **User** - Base user account with roles
- **Artist** - Artist profile linked to user
- **Track** - Music tracks by artists
- **Episode** - Full podcast episodes
- **Clip** - Short clips from episodes
- **Sponsor** - Sponsor profiles and tiers
- **Playlist** - User-created playlists

### Roles Enum
- `ADMIN` - Full platform access
- `HOST` - Podcast host privileges
- `ARTIST` - Music upload & profile management
- `SPONSOR` - Sponsor dashboard access

**Status: Awaiting approval before `npx prisma init`**
