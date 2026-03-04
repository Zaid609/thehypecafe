"use client";

import AuthGuard from "@/components/shared/AuthGuard";
import ProfileSection from "@/components/pages/profile/ProfileSection";

const Profile = () => {
  return (
    <AuthGuard requireAuth requireOnboarding>
      <ProfileSection />
    </AuthGuard>
  );
};

export default Profile;
