"use client";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import React, { Dispatch, SetStateAction } from "react";
import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";
interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function RegisterContent({ setOpen }: Props) {
  const validationSchema = Yup.object({
    password: Yup.string().required("Password is required"),
    confirm_password: Yup.mixed()
      .test(
        "match passwords",
        "Confirm password and password should match",
        function (value) {
          // Ensure value is not undefined before comparing
          if (value !== undefined) {
            return value === this.parent.password;
          }
          return false;
        }
      )
      .required("Confirm Password is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });
  const initialValues = {
    password: "",
    email: "",
    confirm_password: "",
    checkedBox: false,
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, props) => {
      console.log(values);
      props.setSubmitting(false);
      props.resetForm();
      setOpen(true);
    },
  });

  return (
    <Stack sx={{ padding: 2 }} spacing={2}>
      <Stack>
        <TextField
          name="email"
          label="Email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          fullWidth
          variant="outlined"
          onBlur={formik.handleBlur("email")}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Stack>
      <Stack>
        <TextField
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          fullWidth
          variant="outlined"
          onBlur={formik.handleBlur("password")}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </Stack>
      <Stack>
        <TextField
          name="confirm_password"
          label="Confirm Password"
          type="password"
          value={formik.values.confirm_password}
          onChange={formik.handleChange}
          fullWidth
          variant="outlined"
          onBlur={formik.handleBlur("confirm_password")}
          error={
            formik.touched.confirm_password &&
            Boolean(formik.errors.confirm_password)
          }
          helperText={
            formik.touched.confirm_password && formik.errors.confirm_password
          }
        />
      </Stack>
      <Stack>
        <FormControlLabel
          control={
            <Checkbox
              checked={formik.values.checkedBox}
              onChange={(event) => {
                formik.setFieldValue("checkedBox", event.target.checked);
              }}
            />
          }
          label="Accept the terms of policy ?"
        />
      </Stack>
      <Stack>
        <Typography>
          Already sign up ? <Link href={"/login"}>Log In</Link>
        </Typography>
      </Stack>
      <Stack>
        <Button
          fullWidth
          onClick={() => formik.handleSubmit()}
          color="error"
          type="button"
          variant="outlined"
          size="large"
          sx={{ my: 1 }}
          endIcon={<LoginIcon />}
          disabled={
            formik.values.checkedBox
              ? formik.isSubmitting || !formik.dirty || !formik.isValid
              : true
          }
        >
          {formik.isSubmitting ? "Submitting ..." : "Submit"}
        </Button>
      </Stack>
    </Stack>
  );
}

export default RegisterContent;
