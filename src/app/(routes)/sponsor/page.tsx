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
          <p className="pra fs-18" style={{ maxWidth: "600px", margin: "0 auto" }}>
            Reach engaged audiences through podcast sponsorships, banner
            placements, and sponsored segments
          </p>
        </div>

        {/* Stats */}
        <div className="row g-4 mb-60">
          {[
            { label: "Monthly Listeners", value: "50K+" },
            { label: "Episodes Released", value: "200+" },
            { label: "Social Following", value: "25K+" },
            { label: "Avg. Episode Length", value: "45 min" },
          ].map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div
                className="stat__card text-center"
                style={{
                  background: "#1e1e1e",
                  borderRadius: "12px",
                  padding: "30px 20px",
                }}
              >
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
                className="tier__card"
                style={{
                  background: tier.featured ? "#004C54" : "#1e1e1e",
                  borderRadius: "16px",
                  padding: "30px",
                  height: "100%",
                  border: tier.featured ? "2px solid #006d75" : "none",
                }}
              >
                {tier.featured && (
                  <span
                    className="d-block mb-16 fs-12"
                    style={{
                      color: "#90EE90",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    Most Popular
                  </span>
                )}
                <h4 className="white mb-8">{tier.name}</h4>
                <div className="mb-24">
                  <span className="white fs-24 fw-600">{tier.price}</span>
                  <span className="pra fs-14"> / month</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
                  {tier.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="d-flex align-items-start gap-2 mb-12"
                    >
                      <span style={{ color: "#90EE90" }}>✓</span>
                      <span className="white fs-14">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="cmn--btn w-100"
                  style={{
                    background: tier.featured ? "#fff" : "transparent",
                    color: tier.featured ? "#004C54" : "#fff",
                    border: tier.featured ? "none" : "1px solid #555",
                  }}
                >
                  <span>Get Started</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div
          style={{
            background: "#1e1e1e",
            borderRadius: "16px",
            padding: "40px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h4 className="white mb-24 text-center">Request Media Kit</h4>
          <form>
            <div className="mb-16">
              <input
                type="text"
                placeholder="Company Name"
                className="w-100"
                style={{
                  background: "#2a2a2a",
                  border: "none",
                  borderRadius: "8px",
                  padding: "14px 16px",
                  color: "#fff",
                }}
              />
            </div>
            <div className="mb-16">
              <input
                type="email"
                placeholder="Email Address"
                className="w-100"
                style={{
                  background: "#2a2a2a",
                  border: "none",
                  borderRadius: "8px",
                  padding: "14px 16px",
                  color: "#fff",
                }}
              />
            </div>
            <div className="mb-24">
              <textarea
                placeholder="Tell us about your brand and goals"
                rows={4}
                className="w-100"
                style={{
                  background: "#2a2a2a",
                  border: "none",
                  borderRadius: "8px",
                  padding: "14px 16px",
                  color: "#fff",
                  resize: "vertical",
                }}
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
