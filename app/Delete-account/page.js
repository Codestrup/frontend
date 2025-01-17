"use client";
import Layout from "@/components/layout/Layout";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { Email } from "@mui/icons-material";
import {
  MenuItem,
  Select,
  FormHelperText,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { menuProps } from "@/utils/menuProps";
import toast from "react-hot-toast";

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Delete Account">
        <div>
          <section
            className="contact-section fix "
            style={{ padding: "60px 0" }}
          >
            <Typography variant="h3" textAlign="center">
              Delete Account
            </Typography>
            <Grid container justifyContent="center">
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  sx={{ mt: "10px" }}
                  fullWidth
                  variant="outlined"
                  label="Name"
                  value={values.name}
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                />
                <TextField
                  sx={{ mt: "10px" }}
                  fullWidth
                  variant="outlined"
                  label="Email"
                  value={values.email}
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                />
                <TextField
                  sx={{ mt: "10px" }}
                  fullWidth
                  variant="outlined"
                  label="Reason"
                  value={values.message}
                  onChange={(e) =>
                    setValues({ ...values, message: e.target.value })
                  }
                  multiline
                  rows={4}
                />

                <Button
                  variant="contained"
                  className="mt-3"
                  onClick={() => {
                    if (
                      values.name === "" &&
                      values.email === "" &&
                      values.message === ""
                    ) {
                      toast.error("Please fill all fields");
                    } else {
                      setValues({ name: "", email: "", message: "" });
                      toast.success("Account deleted successfully");
                    }
                  }}
                >
                  Delete Account
                </Button>
              </Grid>
            </Grid>
          </section>
        </div>
      </Layout>
    </>
  );
}
