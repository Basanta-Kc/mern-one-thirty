import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Product from "../components/Product";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";

function LatestProducts() {
  const { data, isLoading } = useQuery({
    queryKey: ["latest-products"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3003/products/latest");
      return res.data.data;
    },
  });

  return (
    <>
      <Typography variant="h4" textAlign="center" my={5}>
        Latest Products
      </Typography>
      <Grid container spacing={2} justifyContent="space-around">
        {isLoading ? (
          <>
            <Grid size="3">
              <Skeleton height="400px" width="200px" />
            </Grid>
            <Grid size="3">
              <Skeleton height="400px" width="200px" />
            </Grid>
            <Grid size="3">
              <Skeleton height="400px" width="200px" />
            </Grid>
            <Grid size="3">
              <Skeleton height="400px" width="200px" />
            </Grid>
          </>
        ) : (
          <>
            {data.map((product) => {
              return (
                <Grid key={product._id} size="3">
                  <Product product={product} />
                </Grid>
              );
            })}
          </>
        )}
      </Grid>
    </>
  );
}
export default LatestProducts;
