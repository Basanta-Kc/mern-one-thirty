import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .matches(passwordRules, { message: "Please create a stronger password" })
      .required("Required"),
  })
  .required();

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  console.log(errors);

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
          Sign Up
        </Typography>
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
            <FormLabel htmlFor="name">Name</FormLabel>
            <TextField
              id="name"
              type="name"
              name="name"
              placeholder="your name"
              autoComplete="name"
              autoFocus
              fullWidth
              variant="outlined"
              error={Boolean(errors?.name?.message)}
              helperText={errors?.name?.message}
              sx={{ ariaLabel: "name" }}
              {...register("name")}
            />
          </FormControl>
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
            Sign Up
          </Button>
          <Typography sx={{ textAlign: "center" }}>
            Already Have an account{" "}
            <span>
              <Link to="/sign-in">Sign In</Link>
            </span>
          </Typography>
        </Box>
      </Card>
    </Stack>
  );
}
