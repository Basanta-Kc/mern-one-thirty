import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import Alert from "@mui/material/Alert";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required("Required"),
  })
  .required();

export default function SignUp() {
  const { setAuthUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async (data) => {
      const res = await axios.post("/api/auth/sign-in", data);
      return res.data;
    },
    onSuccess: (data) => {
      navigate("/");
      toast.success(data.message);
      setAuthUser(data.user);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <Stack
      sx={{ width: "80%", mx: "auto" }}
      direction="column"
      justifyContent="space-between"
    >
      <Card sx={{ p: 10 }} variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
        >
          Sign In
        </Typography>
        {mutation.error && (
          <Alert sx={{ my: 2 }} severity="error">
            {mutation.error.response.data.message}
          </Alert>
        )}
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 2,
          }}
        >
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              autoFocus
              fullWidth
              variant="outlined"
              error={Boolean(errors?.email?.message)}
              helperText={errors?.email?.message}
              sx={{ ariaLabel: "email" }}
              {...register("email")}
            />
          </FormControl>
          <FormControl>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <FormLabel htmlFor="password">Password</FormLabel>
            </Box>
            <TextField
              name="password"
              placeholder="••••••"
              type="password"
              id="password"
              autoComplete="current-password"
              autoFocus
              fullWidth
              error={Boolean(errors?.password?.message)}
              helperText={errors?.password?.message}
              variant="outlined"
              {...register("password")}
            />
          </FormControl>
          <Button type="submit" fullWidth variant="contained">
            Sign In
          </Button>
          <Typography sx={{ textAlign: "center" }}>
            Dont have an account?{" "}
            <span>
              <Link to="/sign-up">Sign Up</Link>
            </span>
          </Typography>
        </Box>
      </Card>
    </Stack>
  );
}
