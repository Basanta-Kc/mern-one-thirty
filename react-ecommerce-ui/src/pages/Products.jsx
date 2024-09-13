import Grid from "@mui/material/Grid2";
import Product from "../components/Product";
import Paginate from "../components/Paginate";
import NavBar from "../components/NavBar";

function Products() {
  return (
    <>
      <NavBar />
      <Grid container spacing={2} justifyContent="space-around">
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
      <Paginate />
    </>
  );
}
export default Products;
