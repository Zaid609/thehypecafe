"use client";

import { IconCheck, IconMusic, IconBuildingStore, IconHeart, IconUpload, IconBrandInstagram, IconMicrophone } from "@tabler/icons-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { createUser, completeOnboarding, getAuthData } from "@/utils/auth";

type UserRole = "fan" | "artist" | "artist-pro" | "sponsor";

interface OnboardingStep {
  title: string;
  description: string;
}

const roleSteps: Record<UserRole, OnboardingStep[]> = {
  fan: [
    { title: "Welcome to The Hype Cave!", description: "You're joining a community of music lovers and podcast enthusiasts." },
    { title: "Discover Content", description: "Follow your favorite artists, save tracks, and get personalized recommendations." },
    { title: "You're All Set!", description: "Start exploring The Hype Cave and discover new music." },
  ],
  artist: [
    { title: "Welcome, Artist!", description: "You're joining The Hype Cave as an independent artist." },
    { title: "Set Up Your Profile", description: "Add your artist name, bio, and profile picture." },
    { title: "Upload Your First Project", description: "Share your mixtape or singles with The Hype Cave audience." },
    { title: "You're Ready!", description: "Your artist profile is set up. Start building your fanbase!" },
  ],
  "artist-pro": [
    { title: "Welcome to Artist Pro!", description: "You've unlocked unlimited uploads and premium features." },
    { title: "Set Up Your Profile", description: "Add your artist name, bio, and profile picture." },
    { title: "Upload Your Music", description: "Upload unlimited tracks and mixtapes to your profile." },
    { title: "Analytics Dashboard", description: "Track your plays, followers, and engagement." },
    { title: "You're All Set!", description: "Start uploading and growing your audience!" },
  ],
  sponsor: [
    { title: "Welcome, Partner!", description: "You're becoming a sponsor of The Hype Cave." },
    { title: "Company Details", description: "Tell us about your brand and sponsorship goals." },
    { title: "Choose Your Tier", description: "Select your sponsorship level: Product, Segment, or Title Partner." },
    { title: "Review & Submit", description: "Review your sponsorship details and submit for approval." },
  ],
};

const OnboardingPage = () => {
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role") as UserRole | null;
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(roleParam);
  
  // Form states
  const [artistName, setArtistName] = useState("");
  const [bio, setBio] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [sponsorTier, setSponsorTier] = useState("product");

  // Create user when coming from pricing page with role param
  useEffect(() => {
    if (roleParam && !getAuthData()) {
      createUser(roleParam);
    }
  }, [roleParam]);

  const role = selectedRole || "fan";
  const steps = roleSteps[role];
  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      // Mark onboarding as complete
      completeOnboarding();
      // Redirect to appropriate page
      if (role === "fan") {
        window.location.href = "/";
      } else if (role === "artist" || role === "artist-pro") {
        window.location.href = "/profile";
      } else if (role === "sponsor") {
        window.location.href = "/profile";
      }
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Role selection screen if no role specified
  if (!selectedRole && currentStep === 0) {
    return (
      <section className="onboarding__section pt-100 pb-100 pr-24 pl-24">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-40">
                <h2 className="white mb-16">Welcome to The Hype Cave</h2>
                <p className="pra fs-16">How would you like to join our community?</p>
              </div>
              <div className="row g-4">
                <div className="col-md-4">
                  <button
                    onClick={() => {
                      createUser("fan");
                      setSelectedRole("fan");
                    }}
                    className="onboarding__role-card w-100"
                  >
                    <IconHeart size={48} className="base mb-16" />
                    <h4 className="white mb-8">Fan</h4>
                    <p className="pra fs-14">Discover music, follow artists, and enjoy content</p>
                    <span className="fs-12 pra mt-12 d-block">Free</span>
                  </button>
                </div>
                <div className="col-md-4">
                  <button
                    onClick={() => {
                      createUser("artist");
                      setSelectedRole("artist");
                    }}
                    className="onboarding__role-card w-100"
                  >
                    <IconMusic size={48} className="base2 mb-16" />
                    <h4 className="white mb-8">Artist</h4>
                    <p className="pra fs-14">Upload your music and build your fanbase</p>
                    <span className="fs-12 base2 mt-12 d-block">Free to start</span>
                  </button>
                </div>
                <div className="col-md-4">
                  <button
                    onClick={() => {
                      createUser("sponsor");
                      setSelectedRole("sponsor");
                    }}
                    className="onboarding__role-card w-100"
                  >
                    <IconBuildingStore size={48} className="base3 mb-16" />
                    <h4 className="white mb-8">Sponsor</h4>
                    <p className="pra fs-14">Promote your brand to our engaged audience</p>
                    <span className="fs-12 base3 mt-12 d-block">From $250/mo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="onboarding__section pt-100 pb-100 pr-24 pl-24">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            {/* Progress indicator */}
            <div className="onboarding__progress mb-40">
              <div className="d-flex justify-content-between align-items-center">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`onboarding__step ${index <= currentStep ? "active" : ""} ${index < currentStep ? "completed" : ""}`}
                  >
                    {index < currentStep ? (
                      <IconCheck size={16} />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="onboarding__progress-bar">
                <div
                  className="onboarding__progress-fill"
                  style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                />
              </div>
            </div>

            {/* Step content */}
            <div className="onboarding__content text-center">
              <h2 className="white mb-16">{steps[currentStep].title}</h2>
              <p className="pra fs-16 mb-40">{steps[currentStep].description}</p>

              {/* Role-specific form fields */}
              {(role === "artist" || role === "artist-pro") && currentStep === 1 && (
                <div className="onboarding__form mb-40">
                  <div className="mb-24">
                    <label className="d-block white fs-14 mb-8 text-start">Artist Name</label>
                    <input
                      type="text"
                      value={artistName}
                      onChange={(e) => setArtistName(e.target.value)}
                      placeholder="Your artist name"
                      className="form__input w-100"
                    />
                  </div>
                  <div className="mb-24">
                    <label className="d-block white fs-14 mb-8 text-start">Bio</label>
                    <textarea
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      placeholder="Tell fans about yourself..."
                      rows={4}
                      className="form__textarea w-100"
                    />
                  </div>
                </div>
              )}

              {(role === "artist" || role === "artist-pro") && currentStep === 2 && (
                <div className="onboarding__upload mb-40">
                  <div className="upload__dropzone">
                    <IconUpload size={48} className="pra mb-16" />
                    <p className="white fs-16 mb-8">Drag & drop your tracks here</p>
                    <p className="pra fs-14">or click to browse</p>
                    <button className="cmn--btn mt-24">
                      <span>Select Files</span>
                    </button>
                  </div>
                </div>
              )}

              {role === "sponsor" && currentStep === 1 && (
                <div className="onboarding__form mb-40">
                  <div className="mb-24">
                    <label className="d-block white fs-14 mb-8 text-start">Company Name</label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Your company name"
                      className="form__input w-100"
                    />
                  </div>
                  <div className="mb-24">
                    <label className="d-block white fs-14 mb-8 text-start">Website</label>
                    <input
                      type="url"
                      placeholder="https://yourcompany.com"
                      className="form__input w-100"
                    />
                  </div>
                  <div className="mb-24">
                    <label className="d-block white fs-14 mb-8 text-start">About Your Brand</label>
                    <textarea
                      placeholder="Tell us about your brand and goals..."
                      rows={4}
                      className="form__textarea w-100"
                    />
                  </div>
                </div>
              )}

              {role === "sponsor" && currentStep === 2 && (
                <div className="onboarding__tiers mb-40">
                  <div className="row g-3">
                    {[
                      { id: "product", name: "Product Partner", price: "$250/mo", desc: "Logo placement & social mentions" },
                      { id: "segment", name: "Segment Partner", price: "$400/mo", desc: "Sponsored segment in episodes" },
                      { id: "title", name: "Title Partner", price: "$1,000/mo", desc: "Title sponsorship & premium placement" },
                    ].map((tier) => (
                      <div key={tier.id} className="col-12">
                        <button
                          onClick={() => setSponsorTier(tier.id)}
                          className={`onboarding__tier-option w-100 ${sponsorTier === tier.id ? "selected" : ""}`}
                        >
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="text-start">
                              <h5 className="white mb-4">{tier.name}</h5>
                              <p className="pra fs-14">{tier.desc}</p>
                            </div>
                            <span className="base3 fs-16 fw-600">{tier.price}</span>
                          </div>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="d-flex gap-3 justify-content-center">
                {currentStep > 0 && (
                  <button onClick={handleBack} className="cmn--btn btn--outline">
                    <span>Back</span>
                  </button>
                )}
                <button onClick={handleNext} className="cmn--btn">
                  <span>{isLastStep ? "Complete Setup" : "Continue"}</span>
                </button>
              </div>

              {currentStep === 0 && (
                <p className="pra fs-14 mt-24">
                  <button
                    onClick={() => setSelectedRole(null)}
                    className="base btn--transparent"
                  >
                    ← Choose a different role
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingPage;
