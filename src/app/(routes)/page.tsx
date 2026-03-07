import { productData } from "@/../public/data/productDta";
import Artists from "@/components/pages/home/Artists";
import Banner from "@/components/pages/home/Banner";
import FeaturedShows from "@/components/pages/home/FeaturedShows";
import LatestPost from "@/components/pages/home/LatestPost";
import Podcasts from "@/components/pages/home/Podcast";
import Product from "@/components/pages/home/Product";
import TrendingSlider from "@/components/pages/home/TrendingSlider";

const page = () => {
  return (
    <>
      <Banner />
      <FeaturedShows />
      <TrendingSlider />
      <Artists />
      <Podcasts />
      <Product sectionTitle="Product" componentData={productData} />
      <LatestPost />
    </>
  );
};

export default page;
