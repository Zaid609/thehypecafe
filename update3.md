# The Hype Cave - Update 3 (March 4, 2026)

## Summary
Episode YouTube URLs are now live. Lightweight persistent auth system implemented using localStorage (Phase 3A). Route guards protect profile pages.

---

## YouTube URLs Added

### Episode Data Updated
Location: `public/data/episodesData.ts`

- **EP1 (Frankie Krutches)**: `https://www.youtube.com/watch?v=PGo11BLDHMU`
- **EP2 (Chris White)**: `https://www.youtube.com/watch?v=GpDikUh3Bbg`

Embeds auto-transform `watch?v=` → `embed/` for iframe rendering.

---

## Auth System (Phase 3A)

### Auth Helper
Location: `src/utils/auth.ts`

```typescript
// Key functions
saveAuth(userId, role, onboardingComplete)  // Save to localStorage
getAuthData()                                // Read from localStorage
getCurrentUser()                             // Returns User object or null
isAuthenticated()                            // Boolean check
isOnboardingComplete()                       // Boolean check
getCurrentRole()                             // Returns UserRole or null
logout()                                     // Clear localStorage
createUser(role)                             // Generate userId + save
completeOnboarding()                         // Mark onboarding done
```

### Storage Structure
Key: `hypecave_auth`

```typescript
interface AuthData {
  userId: string;
  role: UserRole;
  onboardingComplete: boolean;
  createdAt: string;
}
```

---

## Route Guards

### AuthGuard Component
Location: `src/components/shared/AuthGuard.tsx`

```tsx
<AuthGuard requireAuth requireOnboarding allowedRoles={["artist"]}>
  <ProtectedContent />
</AuthGuard>
```

**Props:**
- `requireAuth` - Redirects to `/signup` if not logged in
- `requireOnboarding` - Redirects to `/onboarding` if incomplete
- `allowedRoles` - Array of allowed roles (optional)

### Protected Routes
- `/profile` - Requires auth + onboarding complete
- `/profile-edit` - Requires auth + onboarding complete

---

## Onboarding Updates

### Auth Integration
Location: `src/app/(routes)/onboarding/page.tsx`

**Flow:**
1. User selects role → `createUser(role)` called
2. User completes steps → `completeOnboarding()` called
3. User redirected to home/profile

**Changes:**
- Added `createUser()` call on role selection buttons
- Added `completeOnboarding()` call on final step
- Added `useEffect` to handle role param from pricing page

---

## Profile Updates

### Dynamic User Data
Location: `src/components/pages/profile/ProfileSection.tsx`

```typescript
// Now checks auth first, falls back to demo
const user = getCurrentUser() || currentUser;
```

Profile now displays authenticated user's role badge correctly.

---

## Files Changed/Created

### New Files
- `src/utils/auth.ts` - Auth helper functions
- `src/components/shared/AuthGuard.tsx` - Route guard component

### Modified Files
- `public/data/episodesData.ts` - Real YouTube URLs
- `src/app/(routes)/onboarding/page.tsx` - Auth integration
- `src/app/(routes)/profile/page.tsx` - AuthGuard wrapper
- `src/app/(routes)/profile-edit/page.tsx` - AuthGuard wrapper
- `src/components/pages/profile/ProfileSection.tsx` - Dynamic user

---

## Auth Flow Diagram

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   /signup   │ ──► │ /onboarding │ ──► │  /profile   │
└─────────────┘     └─────────────┘     └─────────────┘
                           │
                           ▼
                    createUser(role)
                    localStorage.set()
                           │
                           ▼
                   completeOnboarding()
                    localStorage.update()
```

---

## Testing Auth

1. Clear localStorage: `localStorage.removeItem('hypecave_auth')`
2. Visit `/profile` → Should redirect to `/signup`
3. Go through onboarding → Select role
4. Complete onboarding → Should redirect to profile
5. Refresh `/profile` → Should stay on profile

---

## Next Steps (Recommended)

1. **Add episode-2.jpg thumbnail** (942x501) at `/public/images/episodes/`
2. **Connect signup form** to create user in localStorage
3. **Add logout button** to navbar/profile (call `logout()`)
4. **Phase 4**: Replace localStorage with NextAuth + Prisma
5. **Add more protected routes**: `/checkout`, `/create-event`, etc.

---

## Build Status
✓ Lint passed (only pre-existing warnings)
✓ Build successful (56 pages generated)
