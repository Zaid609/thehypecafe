import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clips - The Hype Cave",
  description: "Watch short clips and highlights from The Hype Cave",
};

const ClipsPage = () => {
  return (
    <section className="clips__section pt-100 pb-100 pr-24 pl-24">
      <div className="container-fluid p-0">
        <div className="header__text mb-40">
          <h2>Clips</h2>
          <p className="pra fs-16 mt-16">
            Short clips, highlights, and viral moments from our shows
          </p>
        </div>

        {/* Clip Grid */}
        <div className="row g-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div key={item} className="col-xl-4 col-lg-4 col-md-6">
              <div className="clip__card">
                <div className="clip__card-thumbnail">
                  <span className="pra">Clip {item}</span>
                  <div className="clip__card-duration">
                    <span className="white">1:30</span>
                  </div>
                </div>
                <div className="clip__card-content">
                  <h6 className="white mb-8">Clip Title {item}</h6>
                  <p className="pra fs-14">12K views • 2 days ago</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-40">
          <button className="cmn--btn">
            <span>Load More Clips</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClipsPage;
