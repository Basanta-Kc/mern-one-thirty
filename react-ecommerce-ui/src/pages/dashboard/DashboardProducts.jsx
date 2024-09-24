import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";

// pagination

export default function DashboardProducts() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [search, setSearch] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["products", { page, rowsPerPage, search }],
    queryFn: async () => {
      const res = await axios.get("/api/products", {
        params: {
          page,
          limit: rowsPerPage,
          search,
        },
      });
      return res.data.data;
    },
  });

  const mutation = useMutation({
    mutationFn: async (id) => {
      const res = await axios.delete(`/api/products/${id}`);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
      refetch()
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  return (
    <TableContainer component={Paper}>
      <TextField
        onChange={(e) => setSearch(e.target.value)}
        label="Search Products"
        id="search"
        sx={{ m: 1 }}
      />
      <Table sx={{ minWidth: 650 }} aria-label="product table">
        <TableHead>
          <TableRow>
            <TableCell>S NO.</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <>
              <TableRow>
                <TableCell colSpan={3}>
                  <Skeleton width="100%" height="50px" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3}>
                  <Skeleton width="100%" height="50px" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3}>
                  <Skeleton width="100%" height="50px" />
                </TableCell>
              </TableRow>
            </>
          ) : (
            data.data.map(({ _id, name, price, image }, index) => (
              <TableRow
                key={_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>
                  <Avatar src={`http://localhost:3003/${image}`} alt={name} />
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{price}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary">
                    Edit
                  </Button>
                  <Button
                    onClick={() => {
                      mutation.mutate(_id);
                    }}
                    sx={{ ml: 1 }}
                    variant="contained"
                    color="error"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={data?.total ?? 0}
        page={page - 1}
        rowsPerPageOptions={[4, 8, 12]}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
