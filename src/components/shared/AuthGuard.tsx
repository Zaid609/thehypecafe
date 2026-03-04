"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated, isOnboardingComplete, getCurrentRole } from "@/utils/auth";

interface AuthGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireOnboarding?: boolean;
  allowedRoles?: string[];
}

/**
 * AuthGuard - Lightweight route protection component
 * 
 * Usage:
 * <AuthGuard requireAuth>
 *   <ProtectedContent />
 * </AuthGuard>
 * 
 * Props:
 * - requireAuth: Redirects to /signup if not authenticated
 * - requireOnboarding: Redirects to /onboarding if onboarding incomplete
 * - allowedRoles: Only allow specific roles (e.g., ["artist", "sponsor"])
 */
const AuthGuard = ({
  children,
  requireAuth = true,
  requireOnboarding = true,
  allowedRoles,
}: AuthGuardProps) => {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      // Check authentication
      if (requireAuth && !isAuthenticated()) {
        router.push("/signup");
        return;
      }

      // Check onboarding completion
      if (requireOnboarding && !isOnboardingComplete()) {
        router.push("/onboarding");
        return;
      }

      // Check role permissions
      if (allowedRoles && allowedRoles.length > 0) {
        const currentRole = getCurrentRole();
        if (!currentRole || !allowedRoles.includes(currentRole)) {
          router.push("/");
          return;
        }
      }

      // All checks passed
      setIsAllowed(true);
      setIsChecking(false);
    };

    checkAuth();
  }, [router, requireAuth, requireOnboarding, allowedRoles]);

  // Show loading state while checking
  if (isChecking) {
    return (
      <div className="auth-guard__loading pt-100 pb-100">
        <div className="container text-center">
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  // Render children if allowed
  return isAllowed ? <>{children}</> : null;
};

export default AuthGuard;
