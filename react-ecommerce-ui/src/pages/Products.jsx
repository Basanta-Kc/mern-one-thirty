import Grid from "@mui/material/Grid2";
import Product from "../components/Product";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Products() {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  const [order, setOrder] = React.useState("");

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };
  const { data, isLoading } = useQuery({
    queryKey: ["products", { order, page, rowsPerPage }],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3003/products", {
        params: {
          order,
          page,
          limit: rowsPerPage,
        },
      });
      return res.data.data;
    },
  });

  console.log(data);
  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="sort-by-label">Sort By</InputLabel>
          <Select
            size="small"
            labelId="sort-by-label"
            id="order"
            value={order}
            label="Sort By"
            onChange={handleOrderChange}
          >
            <MenuItem value={""}>None</MenuItem>
            <MenuItem value={"asc"}>Price Low to High</MenuItem>
            <MenuItem value={"desc"}>Price Hight to Low</MenuItem>
          </Select>
        </FormControl>
      </Box>
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
            {data.data.map((product) => {
              return (
                <Grid key={product._id} size="3">
                  <Product product={product} />
                </Grid>
              );
            })}
          </>
        )}
      </Grid>
      <TablePagination
        component="div"
        count={data?.total ?? 0}
        page={page - 1}
        rowsPerPageOptions={[4, 8, 12]}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
export default Products;
