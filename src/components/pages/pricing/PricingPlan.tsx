"use client";

import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import ToggleButton from "./ToggleButton";

const sponsorTiers = [
  { id: "product", name: "Product Partner", price: 250, yearlyPrice: 225 },
  { id: "segment", name: "Segment Partner", price: 400, yearlyPrice: 360 },
  { id: "title", name: "Title Partner", price: 1000, yearlyPrice: 900 },
];

const PricingPlan = () => {
  const [enabled, setEnabled] = useState(false);
  const [selectedTier, setSelectedTier] = useState("product");

  return (
    <section className="price__section pr-24 pl-24 pb-100">
      <div className="container-fluid p-0">
        {/* Stats Section */}
        <div className="row g-4 mb-60">
          {[
            { label: "Monthly Listeners", value: "50K+" },
            { label: "Episodes Released", value: "200+" },
            { label: "Social Following", value: "25K+" },
            { label: "Avg. Episode Length", value: "45 min" },
          ].map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="pricing__item text-center">
                <h2 className="white mb-8">{stat.value}</h2>
                <p className="pra fs-14">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="js-pricing-switch" className="text-center relative mb-40">
          <h2 className="white mb-16">Memberships & Sponsorships</h2>
          <p className="pra fs-18 fw-400 bodyfont mb-30">
            Support the culture, distribute your music, or promote your brand through The Hype Cave platform.
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <span
              className={`switch-label js-switch-label-monthly ${
                enabled ? "" : "active"
              }`}
            >
              Monthly
            </span>

            <ToggleButton enabled={enabled} setEnabled={setEnabled} />
            <span
              className={`switch-label js-switch-label-yearly  ${
                enabled ? "active" : ""
              }`}
            >
              Yearly
            </span>
          </div>
          <div className="save-money--mobile mt-3">
            Save 10% on Yearly Plans
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {/* Artist Starter - Free */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="pricing__item">
              <span className="fs-16 fw-500 base d-block bodyfont mb-10">
                Artist Starter
              </span>
              <div className="price__count d-flex align-items-end">
                <div className="adjust fs-24 fw-600 bodyfont">
                  <span className="dollar">$ </span>
                  <span className="price-card--price-number fs-24 fw-600 bodyfont">
                    0
                  </span>
                </div>
                <span className="fs-16 month fw-500 bodyfont pra">/month</span>
              </div>
              <p className="pra fs-14 mt-16 mb-16">
                Perfect for independent artists who want to showcase their music.
              </p>
              <ul className="pricing__list mt-24 mb-40">
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg" />
                  Artist profile page
                </li>
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg" />
                  Upload 1 mixtape or project
                </li>
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg" />
                  Track preview for listeners
                </li>
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg" />
                  Appear in artist discovery
                </li>
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg" />
                  Basic analytics
                </li>
              </ul>
              <Link
                href="signup"
                className="pricing__btn blackbg d-block base fs-16 fw-500 bodyfont w-100 text-center"
              >
                Create Artist Profile
              </Link>
            </div>
          </div>

          {/* Artist Pro - $15/month */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="pricing__item before__price ralt">
              <span className="fs-16 fw-500 base2 d-block bodyfont mb-10">
                Artist Pro
              </span>
              <div className="price__count d-flex align-items-end">
                <div className="adjust fs-24 base2 fw-600 bodyfont">
                  <span className="dollar">$ </span>
                  <span className="price-card--price-number fs-24 fw-600 bodyfont">
                    {enabled ? 13 : 15}
                  </span>
                </div>
                <span className="fs-16 month fw-500 bodyfont pra">/month</span>
              </div>
              <p className="pra fs-14 mt-16 mb-16">
                Designed for artists ready to grow their fanbase.
              </p>
              <ul className="pricing__list mt-24 mb-40">
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg2" />
                  Unlimited track uploads
                </li>
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg2" />
                  Unlimited mixtapes
                </li>
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg2" />
                  Full song streaming
                </li>
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg2" />
                  Downloadable music for members
                </li>
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg2" />
                  Featured in discovery sections
                </li>
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg2" />
                  Artist analytics dashboard
                </li>
              </ul>
              <Link
                href="signup"
                className="pricing__btn basebg2 d-block white fs-16 fw-500 bodyfont w-100 text-center"
              >
                Upgrade to Pro
              </Link>
            </div>
          </div>

          {/* Sponsor Partner */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="pricing__item">
              <span className="fs-16 fw-500 base3 d-block bodyfont mb-10">
                {sponsorTiers.find(t => t.id === selectedTier)?.name}
              </span>
              <div className="price__count d-flex align-items-end">
                <div className="adjust fs-24 fw-600 bodyfont">
                  <span className="dollar">$ </span>
                  <span className="price-card--price-number fs-24 fw-600 bodyfont">
                    {enabled 
                      ? sponsorTiers.find(t => t.id === selectedTier)?.yearlyPrice 
                      : sponsorTiers.find(t => t.id === selectedTier)?.price}
                  </span>
                </div>
                <span className="fs-16 month fw-500 bodyfont pra">/month</span>
              </div>
              <p className="pra fs-14 mt-16 mb-16">
                Promote your brand to The Hype Cave audience.
              </p>
              <ul className="pricing__list mt-24 mb-40">
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg3" />
                  Logo placement on website
                </li>
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg3" />
                  Sponsor shoutouts during episodes
                </li>
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg3" />
                  Brand placement on watch pages
                </li>
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg3" />
                  Social media mentions
                </li>
                <li className="d-flex gap-2 fs-16 bodyfont fw-400 align-items-center">
                  <IconCheck className="fs-16 basebg3" />
                  Product giveaway opportunities
                </li>
              </ul>
              <div className="mt-24 mb-24">
                <span className="fs-14 fw-600 white d-block mb-12">Premium Episode Placements</span>
                <div className="d-flex flex-column gap-2">
                  {sponsorTiers.map((tier) => (
                    <label
                      key={tier.id}
                      className={`d-flex align-items-center gap-2 fs-14 cursor-pointer ${
                        selectedTier === tier.id ? "base3" : "pra"
                      }`}
                      style={{ cursor: "pointer" }}
                    >
                      <input
                        type="radio"
                        name="sponsorTier"
                        value={tier.id}
                        checked={selectedTier === tier.id}
                        onChange={(e) => setSelectedTier(e.target.value)}
                        style={{ accentColor: "#4CAF50" }}
                      />
                      {tier.name} — ${enabled ? tier.yearlyPrice.toLocaleString() : tier.price.toLocaleString()}/mo
                    </label>
                  ))}
                </div>
              </div>
              <Link
                href="contact"
                className="pricing__btn blackbg d-block base3 fs-16 fw-500 bodyfont w-100 text-center"
              >
                Become a Sponsor
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingPlan;
