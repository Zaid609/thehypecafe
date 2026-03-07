"use client";
import { featuredSponsors } from "@/../public/data/sponsorsData";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const FeaturedSponsors = () => {
  // Don't render if no sponsors
  if (featuredSponsors.length === 0) return null;

  return (
    <section className="sponsor__section pr-24 pl-24 pt-100 mb-100 overflow-hidden">
      <div className="container-fluid p-0">
        <div className="header__text mb-24 d-flex align-items-center justify-content-between flex-wrap gap-2">
          <h2>Featured Sponsors</h2>
          <Link
            href="sponsor"
            className="view__btn white d-flex align-items-center gap-2"
          >
            Become a Sponsor
            <IconArrowNarrowRight />
          </Link>
        </div>
        <div className="row g-4">
          {featuredSponsors.map((sponsor) => (
            <div key={sponsor.id} className="col-xl-4 col-lg-6 col-md-6">
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor__card d-block"
              >
                <div className="sponsor__card-image">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.companyName}
                    width={700}
                    height={520}
                    className="sponsor__card-img"
                  />
                  <div className="sponsor__card-overlay">
                    <span className="sponsor__card-badge">Sponsor</span>
                  </div>
                </div>
                <div className="sponsor__card-content">
                  <h4 className="sponsor__card-name">{sponsor.companyName}</h4>
                  {sponsor.description && (
                    <p className="sponsor__card-desc">{sponsor.description}</p>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSponsors;
