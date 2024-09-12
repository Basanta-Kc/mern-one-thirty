import * as React from "react";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import BannerImage from "../assets/Banner.jpg";
import Product from "../components/Product";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <img src={BannerImage} width="100%" />

      <Typography variant="h4" textAlign="center" my={5}>
        Featured Products
      </Typography>
      <Grid container spacing={2}>
        <Grid size="3">
          <Product />
        </Grid>
        <Grid size="3">
          <Product />
        </Grid>
        <Grid size="3">
          <Product />
        </Grid>
        <Grid size="3">
          <Product />
        </Grid>
      </Grid>

      <Typography variant="h4" textAlign="center" my={5}>
        Latest Products
      </Typography>
      <Grid container spacing={2}>
        <Grid size="3">
          <Product />
        </Grid>
        <Grid size="3">
          <Product />
        </Grid>
        <Grid size="3">
          <Product />
        </Grid>
        <Grid size="3">
          <Product />
        </Grid>
      </Grid>
    </>
  );
}
export default Home;
