import { episodesData, getLatestEpisode } from "@/../public/data/episodesData";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watch - The Hype Cave",
  description: "Watch full episodes and shows from The Hype Cave",
};

const WatchPage = () => {
  const latestEpisode = getLatestEpisode();

  return (
    <section className="watch__section pt-100 pb-100 pr-24 pl-24">
      <div className="container-fluid p-0">
        <div className="header__text mb-40">
          <h2>Watch</h2>
          <p className="pra fs-16 mt-16">
            Full episodes, interviews, and exclusive content from The Hype Cave
          </p>
        </div>

        {/* Featured Episode */}
        {latestEpisode && (
          <div className="row mb-40">
            <div className="col-12">
              <div className="featured__episode">
                {/* Episode Thumbnail / Video Player */}
                <div className="episode__player mb-24">
                  {latestEpisode.youtubeUrl !== "ADD_YOUTUBE_LINK_EP2" && latestEpisode.youtubeUrl !== "ADD_YOUTUBE_LINK_EP1" ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={latestEpisode.youtubeUrl.replace("watch?v=", "embed/")}
                      title={latestEpisode.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="episode__player-placeholder">
                      <Image
                        src={latestEpisode.thumbnail}
                        alt={latestEpisode.title}
                        fill
                        style={{ objectFit: "cover", opacity: 0.7 }}
                        priority
                      />
                      <div className="episode__player-overlay">
                        <h3 className="white mb-8">Episode Coming Soon</h3>
                        <p className="pra">YouTube link will be added</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Episode Info */}
                <div className="episode__info mb-24">
                  <span className="base fs-14 fw-500 mb-8 d-block">
                    Episode #{latestEpisode.episodeNumber} • {latestEpisode.duration}
                  </span>
                  <h2 className="white mb-8">{latestEpisode.title}</h2>
                  <p className="pra fs-16 mb-16">
                    Featuring: <span className="white">{latestEpisode.guest}</span>
                  </p>
                  <p className="pra fs-16">{latestEpisode.description}</p>
                </div>

                {/* Sponsor Placeholder */}
                <div className="sponsor__section-box p-24 mb-40">
                  <p className="pra fs-14 mb-8 text-center">Presented by</p>
                  <h4 className="white text-center mb-16">Sponsor</h4>
                  <p className="pra fs-14 text-center">
                    Interested in sponsoring The Hype Cave?{" "}
                    <Link href="/pricing" className="base">
                      View sponsorship options
                    </Link>
                  </p>
                  <div className="d-flex justify-content-center gap-3 mt-16 flex-wrap">
                    <span className="fs-12 pra">Title Partner</span>
                    <span className="fs-12 pra">•</span>
                    <span className="fs-12 pra">Segment Partner</span>
                    <span className="fs-12 pra">•</span>
                    <span className="fs-12 pra">Product Partner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Episode Grid */}
        <div className="header__text mb-24">
          <h4 className="white">All Episodes</h4>
        </div>
        <div className="row g-4">
          {episodesData.map((episode) => (
            <div key={episode.id} className="col-xl-4 col-lg-4 col-md-6">
              <Link href={`/watch/${episode.episodeNumber}`} className="d-block">
                <div className="episode__card">
                  <div className="episode__card-thumbnail">
                    <Image
                      src={episode.thumbnail}
                      alt={episode.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="episode__card-duration">
                      <span className="white fs-12">{episode.duration}</span>
                    </div>
                  </div>
                  <div className="episode__card-content">
                    <span className="base fs-12 d-block mb-8">
                      Episode #{episode.episodeNumber} • {episode.releaseDate}
                    </span>
                    <h5 className="white mb-8">{episode.guest} Interview</h5>
                    <p className="pra fs-14">{episode.views.toLocaleString()} views</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WatchPage;
