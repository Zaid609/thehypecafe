"use client";

import { getLatestEpisode } from "@/../public/data/episodesData";
import { IconArrowNarrowRight, IconPlayerPlay } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const LatestEpisode = () => {
  const latestEpisode = getLatestEpisode();

  if (!latestEpisode) return null;

  return (
    <section className="latest__episode pr-24 pl-24 pt-100 mb-100">
      <div className="container-fluid p-0">
        <div className="header__text mb-24 d-flex align-items-center justify-content-between flex-wrap gap-2">
          <div>
            <span className="base fs-14 fw-500 text-uppercase d-block mb-8">
              Latest Episode
            </span>
            <h2>THE HYPE CAVE EP #{latestEpisode.episodeNumber}</h2>
          </div>
          <Link
            href="/watch"
            className="view__btn white d-flex align-items-center gap-2"
          >
            View All Episodes
            <IconArrowNarrowRight />
          </Link>
        </div>
        <div className="row g-4">
          <div className="col-lg-8">
            <Link href={`/watch/${latestEpisode.episodeNumber}`} className="d-block">
              <div className="latest__episode-card">
                <div className="latest__episode-thumbnail">
                  <Image
                    src={latestEpisode.thumbnail}
                    alt={latestEpisode.title}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  <div className="latest__episode-play">
                    <IconPlayerPlay size={48} />
                  </div>
                  <div className="latest__episode-duration">
                    <span className="white fs-14">{latestEpisode.duration}</span>
                  </div>
                </div>
                <div className="latest__episode-info">
                  <span className="base fs-14 fw-500 d-block mb-8">
                    {latestEpisode.guest} Interview
                  </span>
                  <h3 className="white mb-12">{latestEpisode.title}</h3>
                  <p className="pra fs-16 mb-16">{latestEpisode.description}</p>
                  <div className="d-flex align-items-center gap-3">
                    <span className="pra fs-14">
                      <strong className="white">{latestEpisode.views.toLocaleString()}</strong> views
                    </span>
                    <span className="pra fs-14">•</span>
                    <span className="pra fs-14">{latestEpisode.releaseDate}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4">
            <div className="latest__episode-cta">
              <h4 className="white mb-16">Watch Now</h4>
              <p className="pra fs-14 mb-24">
                Catch the latest episode of The Hype Cave featuring {latestEpisode.guest}.
              </p>
              <Link href={`/watch/${latestEpisode.episodeNumber}`} className="cmn--btn w-100">
                <span>Watch Episode</span>
              </Link>
              <div className="mt-24">
                <p className="pra fs-12 mb-8">Presented by</p>
                <div className="sponsor__placeholder">
                  <Link href="/pricing" className="pra fs-14">
                    Become a Sponsor →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestEpisode;
