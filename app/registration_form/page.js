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
  RadioGroup,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { menuProps } from "../../utils/menuProps";
import { toast } from "react-hot-toast";
import Image from "next/image";
import internshipImage from "../../public/assets/internship_image.jpg";

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
    .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Email must be a Gmail address')
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
  const [yesNoValue, setYesNoValue] = useState("");
  const [referenceValue, setReferenceValue] = useState("");
  const { setInternshipId, internshipId } = useInternship();
  const [isOTPButtonEnabled, setIsOTPButtonEnabled] = useState(false);

  const validateEmail = (email) => {
    // Enable button if email contains @gmail.com and is not empty
    if (email && email.includes('@gmail.com')) {
      setIsOTPButtonEnabled(true);
    } else {
      setIsOTPButtonEnabled(false);
    }
  };

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get("https://api.codestrup.in/loadjobs");
        setServices(response?.data?.data || []);

        // const internship = response?.data?.data.filter((item) => {
        //   return item?._id === localStorage.getItem("internshipId");
        // });

        const internship = response?.data?.data.filter((item) => {
          return item?._id === internshipId;
        });

        setInternship(internship);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchInternships();
  }, [internshipId]);

  const handleClick = (index) => {
    setActiveItem(index);
  };

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

  const handleYesNoChange = (e) => {
    setYesNoValue(e.target.value);
  };

  const handleReferenceChange = (e) => {
    setReferenceValue(e.target.value);
  };

  const handleApplyNowClick = (id) => {
    setInternshipId(id);
    router.push("/service-details");
  };

  return (
    <>
      {/* 1 */}
      <Layout>
        <section className="service-details-section fix section-padding footer-section footer-bg ">
          <div className="footer-shape-4  d-none d-lg-block">
            <img src="/assets/img/footer-shape-4.png" alt="shape-img" style={{ height: '100%', objectFit: 'contain' }} />
          </div>

          <div className="shape-2">
            <img src="/assets/img/footer-shape-3.png" alt="shape-img" />
          </div>
          <div className="container" style={{ position: 'relative', zIndex: 3 }}>
            <div className="service-details-wrapper">
              <div className="row g-4">


                <div className="col-12 col-lg-8 order-1 order-md-2 center">
                  <div className="service-details-items ">
                    {/* Details content */}

                    <h4 style={{ textAlign: "center", textTransform: 'uppercase', color: 'white' }}>
                      {internship[0]?.jobTitle ?? ""}
                    </h4>

                    <Card
                      sx={{ padding: "20px", marginTop: "20px" }}
                      elevation={3}
                      style={{
                        background: 'linear-gradient(90deg, #5D54A4, #7C78B8)',
                        // background: 'linear-gradient(90deg, #4a486d)',
                        position: 'relative',
                        // boxShadow: '0px 0px 24px #384bff'
                        borderRadius: '50px'
                      }}
                    >
                      <div className="screen__background"
                        style={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          right: '0',
                          bottom: '0',
                          zIndex: '0',
                          WebkitClipPath: 'inset(0 0 0 0)',
                          clipPath: 'inset(0 0 0 0)'
                        }}
                      >
                        <span className="screen__background__shape screen__background__shape4"
                          style={{
                            transform: 'rotate(45deg)',
                            position: 'absolute',
                            height: '532px',
                            width: '289px',
                            background: '#18185e',
                            top: '765px',
                            right: '-147px',
                            borderRadius: '60px'
                          }}
                        ></span>
                        <span className="screen__background__shape screen__background__shape3"
                          style={{
                            transform: 'rotate(45deg)',
                            position: 'absolute',
                            height: '900px',
                            width: '250px',
                            background: 'linear-gradient(270deg, #272777, #6A679E)',
                            top: '103px',
                            right: '-22px',
                            borderRadius: '32px'
                          }}
                        ></span>
                        <span className="screen__background__shape screen__background__shape2"
                          style={{
                            transform: 'rotate(45deg)',
                            position: 'absolute',
                            height: ' 340px',
                            width: '495px',
                            // background: '#272777',
                            background: 'linear-gradient(45deg, #6A679E,  #272777)',
                            top: '-88px',
                            right: '-37px',
                            borderRadius: '32px'
                          }}
                        ></span>
                        <span className="screen__background__shape screen__background__shape1"
                          style={{
                            transform: 'rotate(45deg)',
                            position: 'absolute',
                            height: '700px',
                            width: '700px',
                            background: '#FFF',
                            top: '180px',
                            right: '190px',
                            borderRadius: '0 72px 0 0'
                          }}
                        ></span>

                      </div>
                      <Formik
                        className="container"
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
                        validateOnChange={true}
                        validateOnBlur={true}
                        style={{
                          zIndex: ' 1',
                          position: 'relative',
                          height: '100%'
                        }}

                      >

                        {({
                          values,
                          handleBlur,
                          handleChange,
                          errors,
                          touched,
                          setFieldValue,
                          isValid
                        }) => (

                          <Form style={{
                            // width:'320px',
                            padding: '30px',
                            // paddingTop: '156px'
                          }}>
                            <Box mt={2}>
                              <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={12} lg={6}>
                                  <Box>
                                    <TextField
                                      fullWidth
                                      variant="outlined"
                                      label="First Name"
                                      name="firstName"
                                      value={values.firstName}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      sx={{
                                        "& .MuiOutlinedInput-root": {
                                          "& fieldset": {
                                            borderColor: "rgba(0, 0, 0, 0.5)",
                                          },
                                          "&:hover fieldset": {
                                            borderColor: "black",
                                          },
                                          "&.Mui-focused fieldset": {
                                            borderColor: "black",
                                          },
                                        },
                                        "& .MuiInputLabel-shrink": {
                                          color: "black !important",
                                        },
                                      }}
                                    />
                                    <FormHelperText
                                      error
                                      className="helperText position-relative z-index-1"
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
                                      label="Last Name"
                                      name="lastName"
                                      value={values.lastName}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      sx={{
                                        "& .MuiOutlinedInput-root": {
                                          "& fieldset": {
                                            borderColor: "rgba(0, 0, 0, 0.5)",
                                          },
                                          "&:hover fieldset": {
                                            borderColor: "black",
                                          },
                                          "&.Mui-focused fieldset": {
                                            borderColor: "black",
                                          },
                                        },
                                        "& .MuiInputLabel-shrink": {
                                          color: "black !important",
                                        }
                                      }}
                                    />

                                    <FormHelperText
                                      error
                                      className="helperText position-relative z-index-1"
                                    >
                                      {touched.lastName && errors.lastName}
                                    </FormHelperText>
                                  </Box>
                                </Grid>
                              </Grid>
                              <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={12} lg={6}>
                                  <Box mt={2} sx={{
                                    '& .MuiOutlinedInput-root': {
                                      '& fieldset': {
                                        borderColor: "rgba(0, 0, 0, 0.5)",
                                      },
                                      '&:hover fieldset': {
                                        borderColor: 'black !important',
                                      },
                                      '&.Mui-focused fieldset': {
                                        borderColor: 'black',
                                      },
                                    },
                                    '& .MuiInputLabel-root': {
                                      color: 'black !important',
                                    },
                                    '& .MuiSelect-icon': {
                                      color: 'rgba(0, 0, 0, 0.5)',
                                    },
                                    '& .MuiOutlinedInput-root.Mui-focused .MuiSelect-icon': {
                                      color: 'black !important',
                                    },
                                  }}>
                                    <Select
                                      fullWidth
                                      name="gender"
                                      value={values.gender}
                                      displayEmpty
                                      MenuProps={menuProps}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      style={{ textAlign: 'start' }}

                                    >
                                      <MenuItem value="" disabled>Gender</MenuItem>
                                      <MenuItem value="Male">Male</MenuItem>
                                      <MenuItem value="Female">Female</MenuItem>
                                      <MenuItem value="Other">Other</MenuItem>
                                    </Select>
                                    <FormHelperText error className="helperText position-relative z-index-1">
                                      {touched.gender && errors.gender}
                                    </FormHelperText>
                                  </Box>



                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={6}>
                                  <Box mt={2}>
                                    <TextField
                                      fullWidth
                                      variant="outlined"
                                      label="Contact Number"
                                      name="contactNumber"
                                      value={values.contactNumber}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      sx={{
                                        "& .MuiOutlinedInput-root": {
                                          "& fieldset": {
                                            borderColor: "rgba(0, 0, 0, 0.5)",
                                          },
                                          "&:hover fieldset": {
                                            borderColor: "black",
                                          },
                                          "&.Mui-focused fieldset": {
                                            borderColor: "black",
                                          },
                                        },
                                        "& .MuiInputLabel-shrink": {
                                          color: "black !important",
                                        }
                                      }}
                                    />

                                    <FormHelperText error className="helperText position-relative z-index-1 ">
                                      {touched.contactNumber &&
                                        errors.contactNumber}
                                    </FormHelperText>
                                  </Box>

                                </Grid>

                              </Grid>

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
                                        sx={{
                                          "& .MuiOutlinedInput-root": {
                                            "& fieldset": {
                                              borderColor: "rgba(0, 0, 0, 0.5)",
                                            },
                                            "&:hover fieldset": {
                                              borderColor: "black",
                                            },
                                            "&.Mui-focused fieldset": {
                                              borderColor: "black",
                                            },
                                          },
                                          "& .MuiInputLabel-shrink": {
                                            color: "black !important",
                                          }
                                        }}
                                      />

                                      <FormHelperText
                                        error
                                        className="helperText position-relative z-index-1"
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
                                        disabled={errors.email || !values.email}
                                        onClick={() => sendOtp(values)}
                                        className="theme-btn wow fadeInUp" data-wow-delay=".8s"
                                        style={{
                                          padding: '16.5px 14px',
                                          backgroundColor: '#18185e',
                                          fontSize: '16px',
                                          fontWeight: 600,
                                          lineHeight: "1"
                                        }}
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
                                          className="helperText position-relative z-index-1"
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
                                          className="theme-btn wow fadeInUp" data-wow-delay=".8s"
                                          style={{
                                            padding: '16.5px 14px',
                                            backgroundColor: '#18185e',
                                            fontSize: '16px',
                                            fontWeight: 600,
                                            lineHeight: "1"

                                          }}
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
                                  sx={{
                                    "& .MuiOutlinedInput-root": {
                                      "& fieldset": {
                                        borderColor: "rgba(0, 0, 0, 0.5)",
                                      },
                                      "&:hover fieldset": {
                                        borderColor: "black",
                                      },
                                      "&.Mui-focused fieldset": {
                                        borderColor: "black",
                                      },
                                    },
                                    "& .MuiInputLabel-shrink": {
                                      color: "black !important",
                                    }
                                  }}
                                />

                                <FormHelperText error className="helperText position-relative z-index-1">
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
                                  sx={{
                                    "& .MuiOutlinedInput-root": {
                                      "& fieldset": {
                                        borderColor: "rgba(0, 0, 0, 0.5)",
                                      },
                                      "&:hover fieldset": {
                                        borderColor: "black",
                                      },
                                      "&.Mui-focused fieldset": {
                                        borderColor: "black",
                                      },
                                    },
                                    "& .MuiInputLabel-shrink": {
                                      color: "black !important",
                                    }
                                  }}
                                />
                                <FormHelperText error className="helperText position-relative z-index-1">
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
                                  sx={{
                                    "& .MuiOutlinedInput-root": {
                                      "& fieldset": {
                                        borderColor: "rgba(0, 0, 0, 0.5)",
                                      },
                                      "&:hover fieldset": {
                                        borderColor: "black",
                                      },
                                      "&.Mui-focused fieldset": {
                                        borderColor: "black",
                                      },
                                    },
                                    "& .MuiInputLabel-shrink": {
                                      color: "black !important",
                                    }
                                  }}
                                />

                                <FormHelperText error className="helperText position-relative z-index-1">
                                  {touched.passingYear && errors.passingYear}
                                </FormHelperText>
                              </Box>

                              <Box mt={2}>
                                <h4 style={{
                                  display: 'flex',
                                  justifyContent: "flex-start",
                                  position: 'relative',
                                  zIndex: '1'
                                }}>
                                  Joined our Telegram ,LinkedIn , Whatsapp,
                                  Facebook?
                                </h4>

                                <h6
                                  style={{
                                    fontWeight: 500,
                                    marginBottom: "10px",
                                    display: 'flex',
                                    justifyContent: "flex-start",
                                    position: 'relative',
                                    zIndex: '1'
                                  }}
                                >
                                  Please join the Telegram community for
                                  continued communication
                                </h6>



                                <ul className="row list-unstyled ">
                                  {socialLinks.map((item) => (
                                    <li
                                      key={item.id}
                                      className="col-12 col-md-6 d-flex align-items-center mb-3 z-index-1 position-relative z-index-1"
                                    >
                                      <p className="mb-0">{item.name}</p> -{" "}
                                      <Link href={item.link} className="text-primary text-decoration-underline ms-2   ">
                                        Click Here
                                      </Link>
                                    </li>
                                  ))}
                                </ul>



                                <Box>
                                  <RadioGroup
                                    value={yesNoValue}
                                    onChange={handleYesNoChange}
                                    sx={{
                                      display: "flex",
                                      flexDirection: "row",
                                      position: 'relative',
                                      zIndex: '1',

                                    }}
                                  >
                                    <FormControlLabel
                                      control={<Radio style={{ color: '#18185e' }} />}
                                      label={<p>Yes</p>}
                                      value="yes"
                                    />
                                    <FormControlLabel
                                      control={<Radio style={{ color: '#18185e' }} />}
                                      label={<p>No</p>}
                                      value="no"
                                    />
                                  </RadioGroup>
                                </Box>
                              </Box>

                              <Box mt={2}>
                                <h4 style={{ display: 'flex', justifyContent: 'flex-start', position: 'relative', zIndex: '1' }}>Where did you learn about us?</h4>
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    position: 'relative',
                                    zIndex: '1',

                                  }}

                                >
                                  <RadioGroup
                                    value={referenceValue}
                                    onChange={handleReferenceChange}

                                  >
                                    <FormControlLabel
                                      control={<Radio style={{ color: '#18185e' }} />}
                                      label={
                                        <p>
                                          Social Media - LinkedIn, Facebook,
                                          Instagram etc
                                        </p>
                                      }
                                      value="socialMedia"
                                    />

                                    <FormControlLabel
                                      control={<Radio style={{ color: '#18185e' }} />}
                                      label={
                                        <p>
                                          Referral - Friends, Colleagues,
                                          Relatives etc
                                        </p>
                                      }
                                      value="friends"
                                    />

                                    <FormControlLabel
                                      control={<Radio style={{ color: '#18185e' }} />}
                                      label={
                                        <p>
                                          Job portals - Internshala, Frapp,
                                          LetsIntern, Naukri etc
                                        </p>
                                      }
                                      value="jobPortals"
                                    />

                                    <FormControlLabel
                                      control={<Radio style={{ color: '#18185e' }} />}
                                      label={
                                        <p>
                                          Campus Placement Cell/Coordinators
                                        </p>
                                      }
                                      value="campusPlacement"
                                    />
                                  </RadioGroup>
                                </Box>
                              </Box>

                              <Box mt={2} style={{ display: 'flex', alignItems: "center" }}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      color="primary"
                                      checked={values.termsConditions}
                                      onChange={(e) => setFieldValue("termsConditions", e.target.checked)}
                                      style={{ padding: '0', marginRight: '8px', color: '#18185e' }}
                                    />
                                  }
                                  label={
                                    <span style={{
                                      position: 'relative',
                                      zIndex: '1',
                                      alignSelf: 'flex-start'
                                    }}>
                                      I accept the Codestrup Internship Program terms and conditions as described.
                                    </span>
                                  }
                                  style={{ margin: '0' }}
                                />

                                <FormHelperText error className="helperText position-relative z-index-1">
                                  {touched.termsConditions && errors.termsConditions}
                                </FormHelperText>
                              </Box>



                              <Box
                                mt={2}
                                display="flex"
                                justifyContent="center"
                              >
                                <Button type="submit" variant="contained"
                                  className="theme-btn wow fadeInUp" data-wow-delay=".8s"
                                  style={{
                                    padding: '16.5px 14px',
                                    backgroundColor: '#18185e',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    lineHeight: "1"

                                  }}>
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
        {/* <Footer3 /> */}

        {/* confirmation dialog */}
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
                  className="theme-btn1 wow fadeInUp" data-wow-delay=".8s"
                  style={{
                    padding: '16.5px 14px',

                  }}
                >
                  No
                </Button>
                <Button variant="contained" onClick={() => handleConsentYes()}
                  className="theme-btn wow fadeInUp" data-wow-delay=".8s"
                  style={{
                    padding: '16.5px 14px',
                  }}
                >
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
