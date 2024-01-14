"use client";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Stack,
  TextField,
} from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import React, { Dispatch, SetStateAction } from "react";
import LoginIcon from "@mui/icons-material/Login";
interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function LoginContent({ setOpen }: Props) {
  const validationSchema = Yup.object({
    password: Yup.string().required("Password is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });
  const initialValues = {
    password: "",
    email: "",
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
        <FormControl required>
          <FormControlLabel
            control={
              <Checkbox
                checked={formik.values.checkedBox}
                onChange={(event) => {
                  formik.setFieldValue("checkedBox", event.target.checked);
                }}
              />
            }
            label="Accept terms of legacy"
          />
        </FormControl>
      </Stack>
      <Stack>
        <Button
          fullWidth
          onClick={formik.handleSubmit}
          color="error"
          type="submit"
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

export default LoginContent;
