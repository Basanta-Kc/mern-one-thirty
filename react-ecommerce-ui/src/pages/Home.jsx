import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import BannerImage from "../assets/Banner.jpg";
import Product from "../components/Product";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
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
