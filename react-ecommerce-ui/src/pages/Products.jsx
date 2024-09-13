import Grid from "@mui/material/Grid2";
import Product from "../components/Product";
import Paginate from "../components/Paginate";

function Products() {
  return (
    <>
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
