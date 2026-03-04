import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watch - The Hype Cave",
  description: "Watch full episodes and shows from The Hype Cave",
};

const WatchPage = () => {
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
        <div className="row mb-60">
          <div className="col-12">
            <div
              className="featured__video ralt"
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
                borderRadius: "16px",
                padding: "60px",
                minHeight: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="text-center">
                <h3 className="white mb-16">Featured Episode Coming Soon</h3>
                <p className="pra fs-16">
                  YouTube episodes will be embedded here
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Episode Grid */}
        <div className="header__text mb-24">
          <h4 className="white">Recent Episodes</h4>
        </div>
        <div className="row g-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="col-xl-4 col-lg-4 col-md-6">
              <div
                className="episode__card"
                style={{
                  background: "#1e1e1e",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    background: "#2a2a2a",
                    borderRadius: "8px",
                    height: "180px",
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span className="pra">Episode {item}</span>
                </div>
                <h5 className="white mb-8">Episode Title {item}</h5>
                <p className="pra fs-14">Episode description placeholder</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WatchPage;
