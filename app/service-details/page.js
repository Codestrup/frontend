"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer3 from "@/components/layout/footer/Footer3";
import { useRouter } from "next/navigation";
import { useInternship } from "../context/InternshipContext";
import {
  Card,
  Box,
  TextField,
  FormHelperText,
  Button,
  Grid,
  Select,
  MenuItem,
  Typography,
  List,
  ListItem,
  ListItemText,
  FormControlLabel,
  Radio,
  Checkbox,
  Dialog,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { menuProps } from "../../utils/menuProps";
import { toast } from "react-hot-toast";

const formValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, "First name should contain only letters")
    .required("First name is required"),

  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Last name should contain only letters")
    .required("Last name is required"),

  gender: Yup.string()
    .oneOf(["Male", "Female", "Other"], "Invalid gender")
    .required("Gender is required"),

  contactNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Contact number must be exactly 10 digits")
    .required("Contact number is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  collegeName: Yup.string()
    .min(2, "College name must be at least 2 characters")
    .required("College name is required"),

  fieldOfStudy: Yup.string().required("Field is required"),

  passingYear: Yup.number()
    .integer("Passing year must be a valid year")
    .min(1900, "Passing year must be after 1900")
    .max(new Date().getFullYear(), "Passing year cannot be in the future")
    .required("Passing year is required"),

  otp: Yup.string().required("OTP is required"),
  termsConditions: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("Terms and conditions must be accepted"),
});

const socialLinks = [
  {
    id: 1,
    name: "Telegram",
    link: "https://t.me/+6HxZOtDBk6w0N2Vl",
  },
  {
    id: 2,
    name: "Instagram",
    link: "https://bit.ly/45tfDXd",
  },

  {
    id: 3,
    name: "Facebook",
    link: "https://bit.ly/3zciBU0",
  },

  {
    id: 4,
    name: "Whatsapp",
    link: "https://bit.ly/4cn7J3I",
  },

  {
    id: 5,
    name: "Lindkdin",
    link: "https://bit.ly/4erKOpQ",
  },
];

export default function ServiceDetails() {
  const router = useRouter();
  // const { internshipId } = useInternship();
  const [loading, setLoading] = useState(false);
  const [activeItem, setActiveItem] = useState(1);
  const [services, setServices] = useState([]);
  const [internship, setInternship] = useState([]);
  const [selectedGender, setSelectedGender] = useState("");
  const [formValues, setFormValues] = useState(null);
  const [showVerifyTextfield, setShowVerifyTextfield] = useState(false);
  const [consentDialogOpen, setConsentDialogOpen] = useState(false);
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get("https://api.codestrup.in/loadjobs");
        setServices(response?.data?.data || []);

        const internship = response?.data?.data.filter((item) => {
          return item?._id === localStorage.getItem("internshipId");
        });

        setInternship(internship);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchInternships();
  }, []);

  const handleClick = (index) => {
    setActiveItem(index);
  };
  console.log("intership", internship);

  const sendOtp = async (values) => {
    try {
      const res = await axios({
        method: "POST",
        url: "https://api.codestrup.in/users/sendEmailOTP",
        data: {
          email: values.email,
        },
      });
      if (res.data.status === 201) {
        toast.success(res.data.message);
        setShowVerifyTextfield(true);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response?.data?.message);
      }
    }
  };

  const verifyOtp = async (values) => {
    try {
      const res = await axios({
        method: "POST",
        url: "https://api.codestrup.in/users/varifyEmailOTP",
        data: {
          email: values.email,
          otp: values.otp,
        },
      });
      if (res.data.status === 200) {
        toast.success(res.data.message);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response?.data?.message);
      }
    }
  };

  const handleConsentYes = async () => {
    setConsentDialogOpen(false);
    try {
      setLoading(true);
      const res = await axios({
        method: "POST",
        url: "https://api.codestrup.in/create-order",
        data: {
          amount: internship[0]?.price ?? "",
          check: "on",
          collegeName: formValues.collegeName ?? "",
          email: formValues.email ?? "",
          fieldOfStudy: formValues.fieldOfStudy ?? "",
          firstName: formValues.firstName ?? "",
          gender: formValues.gender ?? "",
          inform: "friend",
          job: localStorage.getItem("internshipId") ?? "",
          joined: "yes",
          lastName: formValues.lastName ?? "",
          passingYear: formValues.passingYear ?? "",
          phoneNumber: formValues.contactNumber ?? "",
        },
      });

      console.log("submit response", res);
      if (res.data.success) {
        setLoading(false);
        window.open(res.data.data.upiLink, "_blank");
      }
    } catch (error) {
      if (error.response) {
        setLoading(false);
        toast.error(error.response.data.message);
      }
    }
  };

  const handleConsentNo = () => {
    setConsent(false);
    setConsentDialogOpen(false);
    toast.error("We need your consent for the payment");
  };

  const handleSubmit = async (values) => {
    setConsentDialogOpen(true);
    setFormValues(values);
  };

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={2}
        breadcrumbTitle="Intership Details"
      >
        <section className="service-details-section fix section-padding">
          <div className="container">
            <div className="service-details-wrapper">
              <div className="row g-4">
                <div className="col-12 col-lg-4 order-2 order-md-1">
                  <div className="main-sidebar">
                    <div className="single-sidebar-widget">
                      <div className="wid-title">
                        <h3>All Services</h3>
                      </div>
                      <div className="widget-categories">
                        <ul>
                          {services.map((service) => (
                            <li
                              key={service._id}
                              className={
                                activeItem === service._id ? "active" : ""
                              }
                            >
                              <Link href={`/service-details`}>
                                {service.jobTitle}
                              </Link>
                              <i className="fa-solid fa-arrow-right-long" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="single-sidebar-widget">
                      <div className="wid-title">
                        <h3>Opening Hours</h3>
                      </div>
                      <div className="opening-category">
                        <ul>
                          <li>
                            <i className="fa-regular fa-clock" />
                            Mon - Sat: 10.00 AM - 4.00 PM
                          </li>
                          <li>
                            <i className="fa-regular fa-clock" />
                            Sun: 09.00 AM - 4.00 PM
                          </li>
                          <li>
                            <i className="fa-regular fa-clock" />
                            Friday: Closed
                          </li>
                          <li>
                            <i className="fa-regular fa-clock" />
                            Emergency: 24 hours
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="single-sidebar-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/service/post.jpg")',
                      }}
                    >
                      <div className="contact-text">
                        <div className="icon">
                          <i className="fa-solid fa-phone" />
                        </div>
                        <h4>Need Help? Call Here</h4>
                        <h5>
                          <Link href="/tel:+2085550112">+208-555-0112</Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-8 order-1 order-md-2">
                  <div className="service-details-items">
                    {/* Details content */}

                    <h4 style={{ textAlign: "center" }}>
                      {internship[0]?.jobTitle ?? ""}
                    </h4>

                    <Card sx={{ padding: "20px", marginTop: "20px" }}>
                      <Formik
                        initialValues={{
                          firstName: "",
                          lastName: "",
                          gender: selectedGender ?? "",
                          contactNumber: "",
                          email: "",
                          collegeName: "",
                          passingYear: "",
                          otp: "",
                          fieldOfStudy: "",
                          termsConditions: false,
                        }}
                        validationSchema={formValidationSchema}
                        onSubmit={(values) => handleSubmit(values)}
                      >
                        {({
                          values,
                          handleBlur,
                          handleChange,
                          errors,
                          touched,
                          setFieldValue,
                        }) => (
                          <Form>
                            <Box mt={2}>
                              <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={12} lg={6}>
                                  <Box>
                                    <TextField
                                      fullWidth
                                      variant="outlined"
                                      label="FirstName"
                                      name="firstName"
                                      value={values.firstName}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                    />
                                    <FormHelperText
                                      error
                                      className="helperText"
                                    >
                                      {touched.firstName && errors.firstName}
                                    </FormHelperText>
                                  </Box>
                                </Grid>

                                <Grid item xs={12} sm={12} md={12} lg={6}>
                                  <Box>
                                    <TextField
                                      fullWidth
                                      variant="outlined"
                                      label="LastName"
                                      name="lastName"
                                      value={values.lastName}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                    />

                                    <FormHelperText
                                      error
                                      className="helperText"
                                    >
                                      {touched.lastName && errors.lastName}
                                    </FormHelperText>
                                  </Box>
                                </Grid>
                              </Grid>
                              <Box mt={2}>
                                <Select
                                  fullWidth
                                  name="gender"
                                  value={values.gender}
                                  displayEmpty
                                  MenuProps={menuProps}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                >
                                  <MenuItem value="">Gender</MenuItem>
                                  <MenuItem value="Male">Male</MenuItem>
                                  <MenuItem value="Female">Female</MenuItem>
                                  <MenuItem value="Other">Other</MenuItem>
                                </Select>
                                <FormHelperText error className="helperText">
                                  {touched.gender && errors.gender}
                                </FormHelperText>
                              </Box>

                              <Box mt={2}>
                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  label="Contact Number"
                                  name="contactNumber"
                                  value={values.contactNumber}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />

                                <FormHelperText error className="helperText">
                                  {touched.contactNumber &&
                                    errors.contactNumber}
                                </FormHelperText>
                              </Box>

                              <Box mt={2}>
                                <Grid container spacing={2}>
                                  <Grid item xs={12} sm={12} md={12} lg={6}>
                                    <Box>
                                      <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                      />

                                      <FormHelperText
                                        error
                                        className="helperText"
                                      >
                                        {touched.email && errors.email}
                                      </FormHelperText>
                                    </Box>
                                  </Grid>

                                  <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    lg={6}
                                    alignContent="center"
                                  >
                                    <Box>
                                      <Button
                                        variant="contained"
                                        onClick={() => sendOtp(values)}
                                      >
                                        Send OTP
                                      </Button>
                                    </Box>
                                  </Grid>
                                </Grid>
                              </Box>

                              {showVerifyTextfield && (
                                <Box mt={2}>
                                  <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12} md={12} lg={6}>
                                      <Box>
                                        <TextField
                                          fullWidth
                                          variant="outlined"
                                          label="Enter OTP"
                                          name="otp"
                                          value={values.otp}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                        />
                                        <FormHelperText
                                          error
                                          className="helperText"
                                        >
                                          {touched.otp && errors.otp}
                                        </FormHelperText>
                                      </Box>
                                    </Grid>

                                    <Grid
                                      item
                                      xs={12}
                                      sm={12}
                                      md={12}
                                      lg={6}
                                      alignContent="center"
                                    >
                                      <Box>
                                        <Button
                                          variant="contained"
                                          onClick={() => verifyOtp(values)}
                                        >
                                          Verify OTP
                                        </Button>
                                      </Box>
                                    </Grid>
                                  </Grid>
                                </Box>
                              )}

                              <Box mt={2}>
                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  label="College Name"
                                  name="collegeName"
                                  value={values.collegeName}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />

                                <FormHelperText error className="helperText">
                                  {touched.collegeName && errors.collegeName}
                                </FormHelperText>
                              </Box>

                              <Box mt={2}>
                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  label="Field Of Study"
                                  name="fieldOfStudy"
                                  value={values.fieldOfStudy}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <FormHelperText error className="helperText">
                                  {touched.fieldOfStudy && errors.fieldOfStudy}
                                </FormHelperText>
                              </Box>

                              <Box mt={2}>
                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  label="Passing Year"
                                  name="passingYear"
                                  value={values.passingYear}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />

                                <FormHelperText error className="helperText">
                                  {touched.passingYear && errors.passingYear}
                                </FormHelperText>
                              </Box>

                              <Box mt={2}>
                                <Typography variant="h6">
                                  Joined our Telegram ,LinkedIn , Whatsapp,
                                  Facebook?
                                </Typography>

                                <Typography variant="body2">
                                  Please join the Telegram community for
                                  continued communication
                                </Typography>

                                <List>
                                  {socialLinks.map((item) => (
                                    <ListItem key={item.id}>
                                      <ListItemText
                                        sx={{
                                          display: "flex",
                                          alignItems: "center",
                                          gap: "20px",
                                        }}
                                        primary={item.name}
                                        secondary={
                                          <Link
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                              color: "blue",
                                              fontWeight: 500,
                                            }}
                                          >
                                            Click Here
                                          </Link>
                                        }
                                      />
                                    </ListItem>
                                  ))}
                                </List>
                                <Box>
                                  <FormControlLabel
                                    control={<Radio />}
                                    label={"Yes"}
                                  />
                                  <FormControlLabel
                                    control={<Radio />}
                                    label={"No"}
                                  />
                                </Box>
                              </Box>

                              <Box mt={2}>
                                <Typography variant="h6">
                                  Where did you learn about us?
                                </Typography>
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  <FormControlLabel
                                    control={<Radio />}
                                    label={
                                      <Typography variant="body2">
                                        Social Media - LinkedIn, Facebook,
                                        Instagram etc
                                      </Typography>
                                    }
                                  />

                                  <FormControlLabel
                                    control={<Radio />}
                                    label={
                                      <Typography variant="body2">
                                        Referral - Friends, Colleagues,
                                        Relatives etc
                                      </Typography>
                                    }
                                  />

                                  <FormControlLabel
                                    control={<Radio />}
                                    label={
                                      <Typography variant="body2">
                                        Job portals - Internshala, Frapp,
                                        LetsIntern, Naukri et
                                      </Typography>
                                    }
                                  />

                                  <FormControlLabel
                                    control={<Radio />}
                                    label={
                                      <Typography variant="body2">
                                        Campus Placement Cell/Coordinators
                                      </Typography>
                                    }
                                  />
                                </Box>
                              </Box>

                              <Box mt={2}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      color="primary"
                                      checked={values.termsConditions}
                                      onChange={(e) =>
                                        setFieldValue(
                                          "termsConditions",
                                          e.target.checked
                                        )
                                      }
                                    />
                                  }
                                  label={
                                    <Typography variant="body2">
                                      I have understood the internship details
                                      and I hereby acknowledge and accept the
                                      terms and conditions of Codestrup
                                      Internship Program
                                    </Typography>
                                  }
                                />

                                <FormHelperText error className="helperText">
                                  {touched.termsConditions &&
                                    errors.termsConditions}
                                </FormHelperText>
                              </Box>

                              <Box
                                mt={2}
                                display="flex"
                                justifyContent="center"
                              >
                                <Button type="submit" variant="contained">
                                  Submit{" "}
                                  {loading && (
                                    <CircularProgress
                                      size={20}
                                      sx={{ color: "#FFF", marginLeft: "5px" }}
                                    />
                                  )}
                                </Button>
                              </Box>
                            </Box>
                          </Form>
                        )}
                      </Formik>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer3 />

        {consentDialogOpen && (
          <Dialog
            open={consentDialogOpen}
            onClose={() => setConsentDialogOpen(false)}
          >
            <Box sx={{ padding: "30px", position: "relative" }}>
              <Typography variant="h4">Confirmation Required!</Typography>
              <IconButton
                sx={{ position: "absolute", top: 0, right: "5px" }}
                onClick={() => setConsentDialogOpen(false)}
              >
                <i className="fas fa-times" />
              </IconButton>
              <Typography mt={2} variant="h6">
                Do you want to continue with the payment?
              </Typography>
              <Box mt={2} display="flex" justifyContent="center" gap="20px">
                <Button
                  variant="outlined"
                  onClick={() => {
                    handleConsentNo();
                  }}
                >
                  No
                </Button>
                <Button variant="contained" onClick={() => handleConsentYes()}>
                  Yes
                </Button>
              </Box>
            </Box>
          </Dialog>
        )}
      </Layout>
    </>
  );
}