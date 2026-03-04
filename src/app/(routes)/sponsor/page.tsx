import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sponsor - The Hype Cave",
  description:
    "Partner with The Hype Cave - Sponsorship opportunities and media kit",
};

const SponsorPage = () => {
  return (
    <section className="sponsor__section pt-100 pb-100 pr-24 pl-24">
      <div className="container-fluid p-0">
        {/* Hero */}
        <div className="text-center mb-60">
          <h1 className="white mb-16">Partner With The Hype Cave</h1>
          <p className="pra fs-18 text-center-max-600">
            Reach engaged audiences through podcast sponsorships, banner
            placements, and sponsored segments
          </p>
        </div>

        {/* Stats */}
        <div className="row g-4 mb-60">
          {[
            { label: "Monthly Listeners", value: "50K+" },
            { label: "Episodes Released", value: "5+" },
            { label: "Social Following", value: "25K+" },
            { label: "Avg. Episode Length", value: "45 min" },
          ].map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="stat__card text-center">
                <h2 className="white mb-8">{stat.value}</h2>
                <p className="pra fs-14">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sponsorship Tiers */}
        <div className="header__text mb-24 text-center">
          <h3 className="white">Sponsorship Packages</h3>
        </div>
        <div className="row g-4 mb-60">
          {[
            {
              name: "Bronze",
              price: "$500",
              features: [
                "1x Pre-roll mention (30 sec)",
                "Logo on episode page",
                "Social media shoutout",
              ],
            },
            {
              name: "Silver",
              price: "$1,500",
              features: [
                "2x Mid-roll mentions (60 sec each)",
                "Logo on homepage banner",
                "Dedicated social posts",
                "Newsletter feature",
              ],
              featured: true,
            },
            {
              name: "Gold",
              price: "$3,000",
              features: [
                "Sponsored segment (5 min)",
                "Homepage banner placement",
                "All social channels",
                "Guest appearance option",
                "Monthly analytics report",
              ],
            },
          ].map((tier, index) => (
            <div key={index} className="col-lg-4">
              <div
                className={`tier__card ${tier.featured ? "tier__card--featured" : ""}`}
              >
                {tier.featured && (
                  <span className="d-block mb-16 fs-12 tier__badge">
                    Most Popular
                  </span>
                )}
                <h4 className="white mb-8">{tier.name}</h4>
                <div className="mb-24">
                  <span className="white fs-24 fw-600">{tier.price}</span>
                  <span className="pra fs-14"> / month</span>
                </div>
                <ul className="tier__features">
                  {tier.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="d-flex align-items-start gap-2 mb-12"
                    >
                      <span className="tier__check">✓</span>
                      <span className="white fs-14">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`cmn--btn w-100 ${tier.featured ? "btn--tier-featured" : "btn--tier-default"}`}
                >
                  <span>Get Started</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="contact__form-container">
          <h4 className="white mb-24 text-center">Request Media Kit</h4>
          <form>
            <div className="mb-16">
              <input
                type="text"
                placeholder="Company Name"
                className="w-100 form__input"
              />
            </div>
            <div className="mb-16">
              <input
                type="email"
                placeholder="Email Address"
                className="w-100 form__input"
              />
            </div>
            <div className="mb-24">
              <textarea
                placeholder="Tell us about your brand and goals"
                rows={4}
                className="w-100 form__textarea"
              />
            </div>
            <button type="submit" className="cmn--btn w-100">
              <span>Submit Request</span>
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-40">
          <p className="pra fs-14">
            Questions? Email us at{" "}
            <Link href="mailto:sponsors@thehypecave.com" className="base2">
              sponsors@thehypecave.com
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SponsorPage;
