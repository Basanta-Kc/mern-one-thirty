import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Chip from "@mui/material/Chip";

const STATUS_COLOR = {
  pending: "secondary",
  cancelled: "error",
  completed: "success",
};

// pagination
// 

export default function Orders() {
  const { data, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await axios.get("/api/products/order", {
        params: {},
      });
      return res.data.data;
    },
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S NO.</TableCell>
            <TableCell>Total Price</TableCell>
            <TableCell>Status</TableCell>
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
            data.data.map(({ _id, totalPrice, status }, index) => (
              <TableRow
                key={_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{totalPrice}</TableCell>
                <TableCell>
                  <Chip label={status} color={STATUS_COLOR[status]} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
