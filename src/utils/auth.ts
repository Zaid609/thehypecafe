// Lightweight auth helper using localStorage
// Will be replaced with NextAuth + Prisma in Phase 4

import { User, UserRole, currentUser } from "@/../public/data/userData";

const AUTH_KEY = "hypecave_auth";

interface AuthData {
  userId: string;
  role: UserRole;
  onboardingComplete: boolean;
  createdAt: string;
}

// Check if we're in browser
const isBrowser = typeof window !== "undefined";

// Save auth data to localStorage
export const saveAuth = (
  userId: string,
  role: UserRole,
  onboardingComplete: boolean = true
): void => {
  if (!isBrowser) return;

  const authData: AuthData = {
    userId,
    role,
    onboardingComplete,
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem(AUTH_KEY, JSON.stringify(authData));
};

// Get auth data from localStorage
export const getAuthData = (): AuthData | null => {
  if (!isBrowser) return null;

  const data = localStorage.getItem(AUTH_KEY);
  if (!data) return null;

  try {
    return JSON.parse(data) as AuthData;
  } catch {
    return null;
  }
};

// Get current user (returns demo user with stored role)
// In Phase 4, this will fetch from database
export const getCurrentUser = (): User | null => {
  const authData = getAuthData();
  if (!authData) return null;

  // Return demo user with the stored role
  // This will be replaced with actual user lookup
  return {
    ...currentUser,
    id: authData.userId,
    role: authData.role,
  };
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  return getAuthData() !== null;
};

// Check if onboarding is complete
export const isOnboardingComplete = (): boolean => {
  const authData = getAuthData();
  return authData?.onboardingComplete ?? false;
};

// Get current user role
export const getCurrentRole = (): UserRole | null => {
  const authData = getAuthData();
  return authData?.role ?? null;
};

// Clear auth (logout)
export const logout = (): void => {
  if (!isBrowser) return;
  localStorage.removeItem(AUTH_KEY);
};

// Update onboarding status
export const completeOnboarding = (): void => {
  const authData = getAuthData();
  if (authData) {
    saveAuth(authData.userId, authData.role, true);
  }
};

// Create new user (demo - generates ID)
export const createUser = (role: UserRole): string => {
  const userId = `user-${Date.now()}`;
  saveAuth(userId, role, false);
  return userId;
};
