import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artist Profile - The Hype Cave",
  description: "Artist profile and tracks on The Hype Cave",
};

type Props = {
  params: { slug: string };
};

const ArtistPage = ({ params }: Props) => {
  const { slug } = params;

  return (
    <section className="artist__profile__section pt-100 pb-100 pr-24 pl-24">
      <div className="container-fluid p-0">
        {/* Artist Header */}
        <div className="artist__header mb-60">
          <div className="artist__avatar">
            <span className="pra">Artist Photo</span>
          </div>
          <div>
            <span className="fs-12 pra mb-8 d-block text-uppercase">
              Artist Profile
            </span>
            <h1 className="white mb-12 text-capitalize">
              {slug.replace(/-/g, " ")}
            </h1>
            <p className="pra fs-16 mb-16">
              Independent artist bio and description will appear here. This
              section will be populated from the database.
            </p>
            <div className="d-flex gap-3 align-items-center">
              <span className="pra fs-14">
                <strong className="white">1.2K</strong> followers
              </span>
              <span className="pra fs-14">
                <strong className="white">24</strong> tracks
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="d-flex gap-3 mb-40">
          <button className="cmn--btn">
            <span>Follow</span>
          </button>
          <button className="cmn--btn btn--outline">
            <span>Share</span>
          </button>
        </div>

        {/* Popular Tracks */}
        <div className="header__text mb-24">
          <h4 className="white">Popular Tracks</h4>
        </div>
        <div className="tracks__list mb-60">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="track__row d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center gap-3">
                <span className="pra fs-14 track__number">
                  {item}
                </span>
                <div className="track__artwork">
                  <span className="pra fs-12">Art</span>
                </div>
                <div>
                  <h6 className="white mb-4">Track Title {item}</h6>
                  <p className="pra fs-12">3:24</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-4">
                <span className="pra fs-14">45.2K plays</span>
                <button className="btn--transparent">
                  <span className="pra">▶</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="header__text mb-24">
          <h4 className="white">About</h4>
        </div>
        <div className="about__section">
          <p className="pra fs-16 line-height-relaxed">
            Full artist biography and background information will be displayed
            here. This content will come from the artist&apos;s profile in the
            database. Artists will be able to edit this section from their
            portal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArtistPage;
