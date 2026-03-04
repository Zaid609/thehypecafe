import { episodesData, getEpisodeByNumber } from "@/../public/data/episodesData";
import { getEpisodeSponsors } from "@/../public/data/sponsorsData";
import { IconPlayerPlay } from "@tabler/icons-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { episode: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const episodeNum = parseInt(params.episode);
  const episode = getEpisodeByNumber(episodeNum);

  if (!episode) {
    return { title: "Episode Not Found - The Hype Cave" };
  }

  return {
    title: `EP #${episode.episodeNumber}: ${episode.guest} - The Hype Cave`,
    description: episode.description,
  };
}

export async function generateStaticParams() {
  return episodesData.map((ep) => ({
    episode: ep.episodeNumber.toString(),
  }));
}

const EpisodeWatchPage = ({ params }: Props) => {
  const episodeNum = parseInt(params.episode);
  const episode = getEpisodeByNumber(episodeNum);

  if (!episode) {
    notFound();
  }

  // Get related episodes (all except current)
  const relatedEpisodes = episodesData.filter((ep) => ep.id !== episode.id);
  
  // Get sponsor data for this episode
  const episodeSponsors = getEpisodeSponsors(episode.id);

  return (
    <section className="episode__watch-section pt-100 pb-100 pr-24 pl-24">
      <div className="container-fluid p-0">
        <div className="episode__watch">
          {/* Episode Header */}
          <div className="mb-24">
            <span className="base fs-14 fw-500 text-uppercase d-block mb-8">
              The Hype Cave
            </span>
            <h1 className="white mb-8">EP #{episode.episodeNumber}: {episode.guest} Interview</h1>
          </div>

          {/* Video Player */}
          <div className="episode__video-container mb-24">
            {episode.youtubeUrl !== "ADD_YOUTUBE_LINK_EP2" && episode.youtubeUrl !== "ADD_YOUTUBE_LINK_EP1" ? (
              <iframe
                src={episode.youtubeUrl.replace("watch?v=", "embed/")}
                title={episode.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="episode__player-placeholder">
                <Image
                  src={episode.thumbnail}
                  alt={episode.title}
                  fill
                  style={{ objectFit: "cover", opacity: 0.7 }}
                  priority
                />
                <div className="episode__player-overlay">
                  <IconPlayerPlay size={64} />
                  <h3 className="white mb-8 mt-16">Coming Soon</h3>
                  <p className="pra">Video will be available shortly</p>
                </div>
              </div>
            )}
          </div>

          {/* Episode Info */}
          <div className="mb-40">
            <h2 className="white mb-16">{episode.title}</h2>
            <div className="episode__meta mb-16">
              <span className="pra fs-14">
                <strong className="white">{episode.views.toLocaleString()}</strong> views
              </span>
              <span className="pra fs-14">•</span>
              <span className="pra fs-14">{episode.releaseDate}</span>
              <span className="pra fs-14">•</span>
              <span className="pra fs-14">{episode.duration}</span>
            </div>
            <p className="pra fs-16 line-height-relaxed">
              {episode.description}
            </p>
          </div>

          {/* Sponsor Section */}
          <div className="episode__sponsor-box p-24 mb-40">
            <p className="pra fs-14 mb-8 text-center">Presented by</p>
            <h4 className="white text-center mb-16">
              {episodeSponsors?.titlePartner ? episodeSponsors.titlePartner.companyName : "Sponsor"}
            </h4>
            <p className="pra fs-14 text-center mb-16">
              {episodeSponsors?.titlePartner 
                ? `Thank you to ${episodeSponsors.titlePartner.companyName} for sponsoring this episode!`
                : "Interested in sponsoring The Hype Cave?"}
            </p>
            <div className="d-flex justify-content-center gap-4 flex-wrap mb-16">
              <div className="text-center">
                <span className="d-block pra fs-12 mb-4">Title Partner</span>
                {episodeSponsors?.titlePartner ? (
                  <a href={episodeSponsors.titlePartner.website} target="_blank" rel="noopener noreferrer" className="sponsor__slot-filled">
                    <Image 
                      src={episodeSponsors.titlePartner.logo} 
                      alt={episodeSponsors.titlePartner.companyName}
                      width={80}
                      height={40}
                      style={{ objectFit: "contain" }}
                    />
                  </a>
                ) : (
                  <div className="sponsor__placeholder sponsor__placeholder--sm">
                    <span className="pra fs-12">Available</span>
                  </div>
                )}
              </div>
              <div className="text-center">
                <span className="d-block pra fs-12 mb-4">Segment Partner</span>
                {episodeSponsors?.segmentPartner ? (
                  <a href={episodeSponsors.segmentPartner.website} target="_blank" rel="noopener noreferrer" className="sponsor__slot-filled">
                    <Image 
                      src={episodeSponsors.segmentPartner.logo} 
                      alt={episodeSponsors.segmentPartner.companyName}
                      width={80}
                      height={40}
                      style={{ objectFit: "contain" }}
                    />
                  </a>
                ) : (
                  <div className="sponsor__placeholder sponsor__placeholder--sm">
                    <span className="pra fs-12">Available</span>
                  </div>
                )}
              </div>
              <div className="text-center">
                <span className="d-block pra fs-12 mb-4">Product Partner</span>
                {episodeSponsors?.productPartner ? (
                  <a href={episodeSponsors.productPartner.website} target="_blank" rel="noopener noreferrer" className="sponsor__slot-filled">
                    <Image 
                      src={episodeSponsors.productPartner.logo} 
                      alt={episodeSponsors.productPartner.companyName}
                      width={80}
                      height={40}
                      style={{ objectFit: "contain" }}
                    />
                  </a>
                ) : (
                  <div className="sponsor__placeholder sponsor__placeholder--sm">
                    <span className="pra fs-12">Available</span>
                  </div>
                )}
              </div>
            </div>
            <div className="text-center">
              <Link href="/pricing" className="cmn--btn">
                <span>View Sponsorship Options</span>
              </Link>
            </div>
          </div>

          {/* Related Episodes */}
          {relatedEpisodes.length > 0 && (
            <>
              <div className="header__text mb-24">
                <h4 className="white">More Episodes</h4>
              </div>
              <div className="row g-4">
                {relatedEpisodes.map((ep) => (
                  <div key={ep.id} className="col-xl-4 col-lg-4 col-md-6">
                    <Link href={`/watch/${ep.episodeNumber}`} className="d-block">
                      <div className="related__episode-card">
                        <div className="related__episode-thumbnail">
                          <Image
                            src={ep.thumbnail}
                            alt={ep.title}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                          <div className="related__episode-duration">
                            <span className="white fs-12">{ep.duration}</span>
                          </div>
                        </div>
                        <div className="related__episode-content">
                          <span className="base fs-12 d-block mb-8">
                            Episode #{ep.episodeNumber} • {ep.releaseDate}
                          </span>
                          <h5 className="white mb-8">{ep.guest} Interview</h5>
                          <p className="pra fs-14">{ep.views.toLocaleString()} views</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default EpisodeWatchPage;
