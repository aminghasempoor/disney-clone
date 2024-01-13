import { Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

function LoginComponent() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("required"),
    password: Yup.string().required("required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {},
  });

  return (
    <Stack>
      <img
        src={"/login.jpg"}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100vw",
          height: "100vh",
        }}
        alt="picture"
      />
      <Stack
        sx={{
          position: "fixed",
          backgroundColor: "#121212",
          opacity: 0.6,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
      />
      <Stack
        sx={{
          position: "absolute",
          px: 4,
          py: 6,
          width: "100%",
          height: "100%",
        }}
      >
        <Stack
          sx={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 450,
            maxWidth: "500px",
            height: 500,
            backgroundColor: "#121212",
            opacity: 0.75,
          }}
        >
          <Stack sx={{ p: 4, height: "100%", width: "100%" }}>
            <Typography
              textAlign={"center"}
              variant="h4"
              fontWeight={"bold"}
              color={"rgb(219, 32, 44)"}
            >
              LOG IN
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default LoginComponent;
