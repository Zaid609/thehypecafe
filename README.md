# The Hype Cave

A hybrid media platform for podcasts, independent music, and sponsorship management.

---

## 1. Project Overview

**The Hype Cave** is a Next.js-based platform built on the Streamio theme, designed to serve as:

1. **YouTube Podcast/Show Hub** — Episodes, clips, and show management
2. **Independent Music Platform** — Artist pages, tracks, and playlists
3. **Sponsorship Portal** — Media kit, sponsor tracking, and ad placement management

The platform targets content creators, independent artists, and sponsors seeking a clean, professional media experience.

---

## 2. Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 13.5 (App Router) |
| Language | TypeScript |
| Styling | SCSS + Bootstrap 5 |
| State | Redux Toolkit |
| Icons | Tabler Icons React |
| Carousel | Swiper |
| Notifications | React Hot Toast |
| Database | Prisma + PostgreSQL (planned) |
| Hosting | Vercel |
| Version Control | GitHub |

---

## 3. Folder Structure

```
├── public/
│   ├── audio/              # Audio files
│   ├── data/               # Static data files (TS)
│   ├── fonts/              # Custom fonts (Borda)
│   └── img/                # Images
│       ├── logo/           # Brand assets (logo.png, favicon.png, favicon-small.png)
│       ├── album/          # Album artwork
│       ├── author/         # Author/artist images
│       └── ...             # Other image categories
│
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout (metadata, providers)
│   │   ├── Loader.tsx      # Loading screen component
│   │   ├── not-found.tsx   # 404 page
│   │   └── (routes)/       # All page routes
│   │       ├── page.tsx    # Homepage
│   │       ├── artists/    # Artist listing
│   │       ├── podcasts/   # Podcast listing
│   │       ├── pricing/    # Subscription plans
│   │       └── ...         # 40+ additional routes
│   │
│   ├── components/
│   │   ├── pages/          # Page-specific components
│   │   └── shared/         # Reusable components (Header, Footer, etc.)
│   │
│   ├── hooks/              # Custom React hooks
│   ├── redux/              # Redux store + feature slices
│   ├── styles/sass/        # SCSS stylesheets
│   └── utils/              # Utility functions
│
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

---

## 4. Local Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/thehypecave.git
cd thehypecave

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 5. Branding Rules

### Color Palette (Target)

| Role | Color | Hex |
|------|-------|-----|
| Base | Matte Black | `#1a1a1a` |
| Accent | Eagles Green | `#004C54` |
| Text (Primary) | White | `#FFFFFF` |
| Text (Secondary) | Light Gray | `#B0B0B0` |

### Typography
- **Headings:** Borda (custom font)
- **Body:** Poppins

### Design Principles
- **Minimal clutter** — Clean layouts, purposeful whitespace
- **High contrast** — White text on dark backgrounds
- **Professional tone** — Corporate media look, not flashy
- **Consistent spacing** — Use theme's existing spacing utilities

> **Note:** Color scheme updates are planned for a future phase. Current theme colors remain active.

---

## 6. Product Architecture

### Public Site (Visitors)
- Homepage with featured content
- Episode/clip browsing
- Artist discovery
- Podcast/show pages

### Artist Portal (Authenticated Artists)
- Profile management
- Track uploads
- Analytics dashboard
- Playlist management

### Admin Studio (Hosts/Admins)
- Episode management
- Sponsor deal tracking
- Ad placement scheduling
- User management

---

## 7. Route Plan (MVP)

### Public Routes
| Route | Purpose |
|-------|---------|
| `/` | Homepage |
| `/shows` | All shows/podcasts |
| `/shows/[slug]` | Individual show page |
| `/episodes/[id]` | Episode detail + player |
| `/clips` | Clip gallery |
| `/artists` | Artist directory |
| `/artists/[slug]` | Artist profile + tracks |
| `/about` | About The Hype Cave |
| `/sponsors` | Sponsorship info / media kit |

### Authenticated Routes
| Route | Purpose |
|-------|---------|
| `/portal/dashboard` | Artist dashboard |
| `/portal/tracks` | Manage tracks |
| `/portal/profile` | Edit artist profile |
| `/admin/episodes` | Manage episodes |
| `/admin/sponsors` | Sponsor CRM |
| `/admin/analytics` | Platform analytics |

---

## 8. Data Model Plan

### User Roles

| Role | Permissions |
|------|-------------|
| `ADMIN` | Full platform access |
| `HOST` | Episode/clip management, sponsor tracking |
| `ARTIST` | Own profile, tracks, playlists |
| `SPONSOR` | View placements, access media kit |

### Core Tables (Prisma Schema — Planned)

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  role      Role     @default(ARTIST)
  profile   ArtistProfile?
  createdAt DateTime @default(now())
}

enum Role {
  ADMIN
  HOST
  ARTIST
  SPONSOR
}

model Episode {
  id          String   @id @default(cuid())
  title       String
  description String?
  youtubeId   String
  thumbnail   String?
  publishedAt DateTime
  clips       Clip[]
}

model Clip {
  id        String   @id @default(cuid())
  title     String
  youtubeId String
  episodeId String?
  episode   Episode? @relation(fields: [episodeId], references: [id])
  startTime Int?
  endTime   Int?
}

model ArtistProfile {
  id        String   @id @default(cuid())
  userId    String   @unique
  user      User     @relation(fields: [userId], references: [id])
  name      String
  bio       String?
  image     String?
  tracks    Track[]
}

model Track {
  id        String        @id @default(cuid())
  title     String
  audioUrl  String
  artistId  String
  artist    ArtistProfile @relation(fields: [artistId], references: [id])
  duration  Int?
  createdAt DateTime      @default(now())
}

model SponsorLead {
  id        String   @id @default(cuid())
  company   String
  contact   String
  email     String
  status    LeadStatus @default(NEW)
  notes     String?
  deals     SponsorDeal[]
}

enum LeadStatus {
  NEW
  CONTACTED
  NEGOTIATING
  CLOSED
  LOST
}

model SponsorDeal {
  id         String      @id @default(cuid())
  leadId     String
  lead       SponsorLead @relation(fields: [leadId], references: [id])
  amount     Float
  startDate  DateTime
  endDate    DateTime
  placements AdPlacement[]
}

model AdPlacement {
  id       String      @id @default(cuid())
  dealId   String
  deal     SponsorDeal @relation(fields: [dealId], references: [id])
  type     PlacementType
  location String
  impressions Int?
}

enum PlacementType {
  PRE_ROLL
  MID_ROLL
  BANNER
  SPONSORED_SEGMENT
}
```

---

## 9. Development Workflow

### Branch Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production — deployed to thehypecave.com |
| `dev` | Integration branch — preview deployments |
| `feature-*` | Feature branches (e.g., `feature-artist-portal`) |

### Pull Request Flow

1. Create feature branch from `dev`
2. Implement changes
3. Ensure `npm run lint` passes
4. Ensure `npm run build` passes
5. Open PR to `dev`
6. Vercel creates preview deployment
7. Review + merge
8. Periodically merge `dev` → `main` for production release

### CI Gates (Required for Merge)
- ✅ ESLint passes
- ✅ Build succeeds
- ✅ No TypeScript errors

---

## 10. AI Collaboration Protocol

This project is developed collaboratively between **two AI engineers (Claude + ChatGPT)** and a human developer. To maintain stability, all contributors must follow this synchronization protocol.

### Rules

1. **No large backend changes** without explicit approval (Prisma, auth, DB migrations)
2. **Work area-by-area** — Each phase must pass `npm run lint` and `npm run build` before proceeding
3. **Plan before implementation** — Present PLAN + PATCH NOTES before writing code
4. **Document all changes** — Explain which files change, why, and frontend impact
5. **No folder restructuring** unless requested
6. **Follow phased development** (see Roadmap below)

### Before Generating Code

Always present:

| Step | Description |
|------|-------------|
| **1. PLAN** | What will be done |
| **2. FILES AFFECTED** | List of files to create/modify |
| **3. RISK LEVEL** | Low / Medium / High |

Then **wait for approval** before implementing.

### Stability Gates

Every phase must pass before moving forward:

```bash
npm run lint    # Must show 0 errors
npm run build   # Must succeed
```

---

## 11. Roadmap

### Phase 0: Stability Baseline ✅
- [x] npm install
- [x] npm run dev works
- [x] localhost:3000 loads
- [x] Build passes

### Phase A: UI Shell Rebrand ✅
- [x] Replace logos (logo.png, favicon.png, favicon-small.png)
- [x] Update text references (Streamio → The Hype Cave)
- [x] Update footer (Powered By Zaid The Admin)
- [x] Reorder homepage (Featured Shows under banner)
- [ ] Apply The Hype Cave color system (Eagles Green accents)
- [ ] Typography adjustments

### Phase B: Route Structure
Create frontend routes (no backend):

| Route | Purpose |
|-------|---------|
| `/watch` | Video/episode viewing |
| `/clips` | Clip gallery |
| `/music` | Music discovery |
| `/artist/[slug]` | Artist profile page |
| `/sponsor` | Sponsorship info / media kit |

### Phase C: Database Layer
Only after Phase B routes exist:
- [ ] Initialize Prisma
- [ ] Create schema (User, Episode, Clip, Artist, Track, Sponsor tables)
- [ ] Connect to Neon Postgres
- [ ] Create API routes

### Phase D: Admin Dashboard
- [ ] `/admin` — Dashboard home
- [ ] `/admin/episodes` — Episode management
- [ ] `/admin/artists` — Artist management
- [ ] `/admin/sponsors` — Sponsor CRM

### Phase E: Artist Portal
- [ ] Artist registration flow
- [ ] Track upload functionality
- [ ] Profile editor
- [ ] Artist analytics

### Phase F: Polish + Launch
- [ ] Performance optimization
- [ ] SEO metadata
- [ ] Production deployment to thehypecave.com

---

## 12. Definition of Done (Per Phase)

Each phase is complete when:

- [ ] All listed tasks are implemented
- [ ] `npm run lint` — **0 errors**
- [ ] `npm run build` — **succeeds**
- [ ] No TypeScript errors
- [ ] Changes merged to `dev` via PR
- [ ] Preview deployment verified on Vercel

---

## 13. Logo Replacement Notes

The following brand assets were replaced with The Hype Cave logo (`hypelogomain.png`):

| File | Location | Usage |
|------|----------|-------|
| `logo.png` | `public/img/logo/` | Main header logo |
| `favicon.png` | `public/img/logo/` | Browser tab favicon |
| `favicon-small.png` | `public/img/logo/` | Loader spinner, footer icon |

### References in Code
- **Loader:** `src/app/Loader.tsx` — uses `favicon-small.png`
- **Footer:** `src/components/shared/Footer.tsx` — uses `favicon-small.png`
- **Header:** Various header components reference `logo.png`

> **Tip:** If updating logos in the future, replace all three files to maintain consistency.

---

## License

Private project. All rights reserved.

---

**Built with ❤️ by The Hype Cave Team**
