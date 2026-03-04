"use client";

import AuthGuard from "@/components/shared/AuthGuard";
import ProfileEditForm from "@/components/pages/profile-edit/ProfileEditForm";

const ProfileEdit = () => {
  return (
    <AuthGuard requireAuth requireOnboarding>
      <ProfileEditForm />
    </AuthGuard>
  );
};

export default ProfileEdit;
