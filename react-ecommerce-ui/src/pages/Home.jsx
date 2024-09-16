import BannerImage from "../assets/Banner.jpg";
import FeaturedProducts from "../components/FeaturedProducts";
import LatestProducts from "../components/LatestProducts";

function Home() {
  return (
    <>
      <img src={BannerImage} width="100%" />
      <FeaturedProducts />
      <LatestProducts />
    </>
  );
}
export default Home;
