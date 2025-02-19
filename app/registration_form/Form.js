"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  Box,
  TextField,
  FormHelperText,
  Button,
  Grid,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  CircularProgress,
  InputAdornment,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { menuProps } from "../../utils/menuProps";
import { toast } from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaBuilding } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaShare } from "react-icons/fa";
import { PiListNumbersFill } from "react-icons/pi";
import { ApiConfig } from "../Apiconfig";
import Link from "next/link";
import { RiCoupon2Fill } from "react-icons/ri";
import useAppSettings from "@/components/hooks/appSettings";

//validations
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
    .matches(/^[0-9]{10}$/, "WhatsApp number must be exactly 10 digits")
    .required("WhatsApp number is required"),

  email: Yup.string()
    .email("Invalid email address")
    .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Email must be a Gmail address")
    .required("Email is required"),

  collegeName: Yup.string(),

  qaualification: Yup.string(),

  otp: Yup.string().required("OTP is required"),
  coupon: Yup.string(),

  termsConditions: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("Terms and conditions must be accepted"),
});

//styles
const styles = {
  textfield: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "30px",
      paddingLeft: "0px",
      height: "45px",

      "& input::placeholder": {
        fontSize: "14px",
      },

      "& .MuiInputAdornment-positionStart": {
        padding: "10px 10px",
        borderRight: "1px solid darkgray",
      },

      "& fieldset": {
        borderColor: "rgba(0, 0, 0, 0.5)",
      },

      "&:hover fieldset": {
        borderColor: "#384bff",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#384bff",
        borderWidth: "1px",
      },
    },

    "& .MuiInputLabel-shrink": {
      color: "black !important",
    },
  },

  select: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "30px",
      paddingLeft: "0px",
      height: "48px",
      fontSize: "15px",

      "& fieldset": {
        borderColor: "rgba(0, 0, 0, 0.5)",
      },

      "&:hover fieldset": {
        borderColor: "#384bff",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#384bff",
        borderWidth: "1px",
      },
    },

    "& .MuiInputLabel-root": {
      color: "black !important",
    },

    "& .MuiSelect-icon": {
      color: "rgba(0, 0, 0, 0.5)",
      width: "20px",
      height: "20px",
      top: "34%",
      right: "16px",
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiSelect-icon": {
      color: "black !important",
    },
  },

  sendOtpBtn: {
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "1",
    height: "45px",
  },

  sendOtpBtnSmall: {
    fontSize: "16px",
    fontWeight: 600,
    height: "40px",
    padding: "10px",
  },

  appyHeading: {
    textAlign: "center",
    marginBottom: "20px",
  },

  bottomBox: {
    padding: "10px",
    background: "white",
    position: "fixed",
    bottom: "0",
    zIndex: 999,
  },

  termsStyles: {
    position: "relative",
    zIndex: "1",
    alignSelf: "flex-start",
  },

  termsStylesSmall: {
    position: "relative",
    zIndex: "1",
    alignSelf: "flex-start",
    fontSize: "14px",
  },

  termsLabel: {
    lineHeight: 1,

    "& .MuiTypography-root": {
      lineHeight: 1,
    },
  },
};

export default function RegistrationForm({
  internship,
  refer,
  isMobileScreen,
}) {
  const [loading, setLoading] = useState(false);
  const [showVerifyTextfield, setShowVerifyTextfield] = useState(false);
  const [cities, setCitites] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [citiesList, setCitiesList] = useState([]);
  const [sendOtpBtnText, setSendOtpBtnText] = useState("Send OTP");
  const [stateName, setStateName] = useState({});
  const [cityName, setCityName] = useState({});
  const [otpVerified, setOtpVerified] = useState(false);
  const [disableCoupon, setDisableCoupon] = useState(false);
  const [internshipPrice, setInternshipPrice] = useState(0);
  const appSetting = useAppSettings();
  const sendOtp = async (values, setFieldValue) => {
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

        if (!showVerifyTextfield) {
          setFieldValue("otp", "");
        }

        setOtpVerified(false);
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

        setTimeout(() => {
          setShowVerifyTextfield(false);
        }, 1000);

        setSendOtpBtnText("Resend OTP");

        setOtpVerified(true);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response?.data?.message);
      }
    }
  };
  const applyCoupon = async (values) => {
    try {
      const res = await axios({
        method: "POST",
        url: ApiConfig?.verifyCouponCode,
        data: {
          couponsCode: values?.coupon,
        },
      });
      if (res.status === 200) {
        toast.success(res.data.message);
        setDisableCoupon(true);
        setInternshipPrice(
          Math.round(
            internship?.price - internship?.price * (res?.data?.discount / 100)
          )
        );
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response?.data?.message);
      }
    }
  };

  const handleSubmit = async (values) => {
    try {
      setLoading(true);

      const res = await axios({
        method: "POST",
        url: ApiConfig.createOrder,
        data: {
          amount: appSetting?.freeInternship === false ? internshipPrice : 0,
          check: "on",
          collegeName: values.collegeName ?? "",
          email: values.email ?? "",
          fieldOfStudy: values.qaualification ?? "",
          firstName: values.firstName ?? "",
          gender: values.gender ?? "",
          inform: "friend",
          job: localStorage.getItem("internshipId") ?? "",
          joined: "yes",
          lastName: values.lastName ?? "",
          phoneNumber: values.contactNumber ?? "",
          state: stateName?.name ?? "",
          city: cityName?.name ?? "",
          referralCode: refer ? refer : "",
          couponCode: values?.coupon,
        },
      });

      if (res.data.success) {
        setLoading(false);
        window.open(res.data?.data?.upiLink, "_blank");
      }
    } catch (error) {
      if (error.response) {
        setLoading(false);
        toast.error(error.response?.data?.message);
      }
    }
  };

  useEffect(() => {
    setInternshipPrice(internship?.price);
    // console.log(internship, "price");
  }, [internship]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const citiesResponse = await axios.get("/json/cities.json");

        if (citiesResponse.status === 200) {
          setCitites(citiesResponse?.data?.cities);
        }

        const statesResponse = await axios.get("/json/states.json");
        if (statesResponse.status === 200) {
          setStates(statesResponse?.data?.states);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleStateChange = (e) => {
    const { value } = e.target;

    setSelectedState(value);

    const selectedStateName = states.find((state) => {
      return state.id === value;
    });

    setStateName(selectedStateName);

    const citiesOfSelectedStates = cities.filter((city) => {
      return city.state_id === value;
    });

    setCitiesList(citiesOfSelectedStates);
  };

  const handleCityChange = (e) => {
    const { value } = e.target;

    setSelectedCity(value);

    const selectedCityName = cities.find((city) => {
      return city.id === value;
    });

    setCityName(selectedCityName);
  };

  return (
    <div className="">
      <div className="service-details-items ">
        <Card
          elevation={3}
          sx={{
            marginTop: "20px",
            borderRadius: "5px",
            background: "#FFF",
          }}
        >
          <Formik
            className="container"
            initialValues={{
              firstName: "",
              lastName: "",
              gender: "",
              contactNumber: "",
              email: "",
              collegeName: "",
              otp: "",
              qaualification: "",
              termsConditions: false,
              coupon: "",
            }}
            validationSchema={formValidationSchema}
            onSubmit={(values) => handleSubmit(values)}
            validateOnChange={true}
            validateOnBlur={true}
            style={{
              zIndex: " 1",
              position: "relative",
              height: "100%",
            }}
          >
            {({
              values,
              handleBlur,
              handleChange,
              errors,
              touched,
              setFieldValue,
              isValid,
            }) => (
              <Form
                style={{
                  padding: isMobileScreen ? "20px" : "30px",
                }}
              >
                <h4 style={styles.appyHeading}>Apply Now</h4>
                <Box mt={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                      <Box mt={isMobileScreen ? 1 : 0}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          label="First Name"
                          name="firstName"
                          placeholder="Enter your firstname"
                          autoComplete="off"
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          sx={styles.textfield}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <FaUser size={18} />
                              </InputAdornment>
                            ),
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
                      <Box mt={isMobileScreen ? 1 : 0}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          autoComplete="off"
                          label="Last Name"
                          name="lastName"
                          placeholder="Enter your lastname"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          sx={styles.textfield}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <FaUser size={18} />
                              </InputAdornment>
                            ),
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
                      <Box mt={2} sx={styles.select}>
                        <Select
                          fullWidth
                          name="gender"
                          value={values.gender}
                          displayEmpty
                          MenuProps={menuProps}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{ textAlign: "start" }}
                          IconComponent={MdKeyboardArrowDown}
                        >
                          <MenuItem value="" disabled>
                            Gender
                          </MenuItem>
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                          <MenuItem value="Other">Other</MenuItem>
                        </Select>
                        <FormHelperText
                          error
                          className="helperText position-relative z-index-1"
                        >
                          {touched.gender && errors.gender}
                        </FormHelperText>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={6}>
                      <Box mt={isMobileScreen ? 1 : 2}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          label="WhatsApp Number"
                          autoComplete="off"
                          name="contactNumber"
                          placeholder="Enter your whatsapp number"
                          value={values.contactNumber}
                          onChange={(e) => {
                            const inputValue = e.target.value;

                            if (
                              /^[1-9]\d{0,9}$/.test(inputValue) ||
                              inputValue === ""
                            ) {
                              handleChange(e);
                            }
                          }}
                          onBlur={handleBlur}
                          sx={styles.textfield}
                          inputProps={{ maxLength: 10 }}
                          inputMode="numeric"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <RiWhatsappFill size={18} />
                              </InputAdornment>
                            ),
                          }}
                        />

                        <FormHelperText
                          error
                          className="helperText position-relative z-index-1 "
                        >
                          {touched.contactNumber && errors.contactNumber}
                        </FormHelperText>
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                      <Box mt={2} sx={styles.select}>
                        <Select
                          fullWidth
                          value={selectedState}
                          displayEmpty
                          MenuProps={menuProps}
                          onChange={(e) => handleStateChange(e)}
                          style={{ textAlign: "start" }}
                          IconComponent={MdKeyboardArrowDown}
                        >
                          <MenuItem value="" disabled>
                            Select State
                          </MenuItem>
                          {states.map((state) => {
                            return (
                              <MenuItem key={state.id} value={state.id}>
                                {state.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={6}>
                      <Box mt={isMobileScreen ? 1 : 2} sx={styles.select}>
                        <Select
                          fullWidth
                          value={selectedCity}
                          displayEmpty
                          MenuProps={menuProps}
                          onChange={(e) => handleCityChange(e)}
                          style={{ textAlign: "start" }}
                          IconComponent={MdKeyboardArrowDown}
                        >
                          <MenuItem value="" disabled>
                            Select City
                          </MenuItem>
                          {citiesList.length > 0 &&
                            citiesList.map((city) => {
                              return (
                                <MenuItem key={city.id} value={city.id}>
                                  {city.name}
                                </MenuItem>
                              );
                            })}
                        </Select>
                      </Box>
                    </Grid>
                  </Grid>

                  <Box mt={2}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={9}>
                        <Box mt={isMobileScreen ? 1 : 0}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            autoComplete="off"
                            label="Email"
                            name="email"
                            placeholder="Enter your email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            sx={styles.textfield}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <MdEmail size={18} />
                                </InputAdornment>
                              ),
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
                        lg={3}
                        alignContent="center"
                      >
                        <Box mb={isMobileScreen ? 1 : 0}>
                          <Button
                            variant="contained"
                            disabled={errors.email || !values.email}
                            onClick={() => sendOtp(values, setFieldValue)}
                            className="theme-btn wow fadeInUp"
                            data-wow-delay=".8s"
                            style={
                              isMobileScreen
                                ? styles.sendOtpBtnSmall
                                : styles.sendOtpBtn
                            }
                          >
                            {sendOtpBtnText}
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>

                  {showVerifyTextfield && (
                    <Box mt={2}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={9}>
                          <Box>
                            <TextField
                              fullWidth
                              variant="outlined"
                              label="Enter OTP"
                              autoComplete="off"
                              name="otp"
                              placeholder="Enter your OTP"
                              value={values.otp}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              sx={styles.textfield}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <PiListNumbersFill size={18} />
                                  </InputAdornment>
                                ),
                              }}
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
                          lg={3}
                          alignContent="center"
                        >
                          <Box mb={isMobileScreen ? 1 : 0}>
                            <Button
                              variant="contained"
                              onClick={() => verifyOtp(values, setFieldValue)}
                              className="theme-btn wow fadeInUp"
                              data-wow-delay=".8s"
                              style={
                                isMobileScreen
                                  ? styles.sendOtpBtnSmall
                                  : styles.sendOtpBtn
                              }
                            >
                              Verify OTP
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  )}

                  <Box mt={2}>
                    <Grid container spacing={2}>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={6}
                        alignContent="center"
                      >
                        <Box mt={isMobileScreen ? 1 : 0}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            autoComplete="off"
                            label="College Name"
                            name="collegeName"
                            placeholder="Enter your college name"
                            value={values.collegeName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            sx={styles.textfield}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <FaBuilding size={18} />
                                </InputAdornment>
                              ),
                            }}
                          />

                          <FormHelperText
                            error
                            className="helperText position-relative z-index-1"
                          >
                            {touched.collegeName && errors.collegeName}
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
                        <Box mt={isMobileScreen ? 1 : 0}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            autoComplete="off"
                            label="Qualification"
                            name="qaualification"
                            placeholder="Enter your highest qualification"
                            value={values.qaualification}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            sx={styles.textfield}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <RiGraduationCapFill size={18} />
                                </InputAdornment>
                              ),
                            }}
                          />
                          <FormHelperText
                            error
                            className="helperText position-relative z-index-1"
                          >
                            {touched.qaualification && errors.qaualification}
                          </FormHelperText>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>

                  {refer !== null && (
                    <Box mt={isMobileScreen ? 3 : 2}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        autoComplete="off"
                        label="Referral Code"
                        placeholder="Referral Code (Optional)"
                        value={refer ? refer : ""}
                        InputProps={{
                          readOnly: true,
                          startAdornment: (
                            <InputAdornment position="start">
                              <FaShare size={18} />
                            </InputAdornment>
                          ),
                        }}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        sx={styles.textfield}
                      />
                    </Box>
                  )}
                  {appSetting?.freeInternship === false ? (
                    <Box mt={2}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={8}>
                          <Box mt={isMobileScreen ? 1 : 0}>
                            <TextField
                              fullWidth
                              variant="outlined"
                              autoComplete="off"
                              label="Coupon"
                              name="coupon"
                              placeholder="Enter coupon"
                              value={values.coupon}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              sx={styles.textfield}
                              disabled={disableCoupon}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <RiCoupon2Fill size={18} />
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Box>
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          lg={4}
                          alignContent="center"
                        >
                          <Box mb={isMobileScreen ? 1 : 0}>
                            <Button
                              variant="contained"
                              disabled={!values.coupon || disableCoupon}
                              onClick={() => applyCoupon(values, setFieldValue)}
                              className="theme-btn wow fadeInUp"
                              data-wow-delay=".8s"
                              style={
                                isMobileScreen
                                  ? styles.sendOtpBtnSmall
                                  : styles.sendOtpBtn
                              }
                            >
                              Apply Coupon
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  ) : (
                    ""
                  )}

                  <Box
                    mt={2}
                    style={{
                      display: "flex",
                      alignItems: "start",
                    }}
                  >
                    <FormControlLabel
                      sx={isMobileScreen ? styles.termsLabel : null}
                      control={
                        <Checkbox
                          color="primary"
                          checked={values.termsConditions}
                          onChange={(e) =>
                            setFieldValue("termsConditions", e.target.checked)
                          }
                          style={{
                            padding: "0",
                            marginRight: "8px",
                            color: "#18185e",
                          }}
                        />
                      }
                      label={
                        <span
                          style={
                            isMobileScreen
                              ? styles.termsStylesSmall
                              : styles.termsStyles
                          }
                        >
                          I accept the{" "}
                          <Link href="/terms-condition" target="_blank">
                            Terms & Conditions
                          </Link>{" "}
                          of the Codestrup Internship Program as described.
                        </span>
                      }
                      style={{ margin: "0" }}
                    />
                  </Box>

                  <FormHelperText
                    error
                    className="helperText position-relative z-index-1"
                  >
                    {touched.termsConditions && errors.termsConditions}
                  </FormHelperText>

                  <Box mt={1} textAlign="center">
                    <span
                      style={{
                        fontSize: "20px",
                        color: "#384bff",
                        fontWeight: 600,
                      }}
                    >
                      {appSetting?.freeInternship === false
                        ? `₹ ${internshipPrice}`
                        : "Free"}{" "}
                      {/* ₹ {internshipPrice} */}
                    </span>
                    &nbsp; &nbsp;
                    <span
                      style={{
                        textDecoration: "line-through",
                      }}
                    >
                      ₹ {internship?.totalInternshipPrice}
                    </span>
                    &nbsp; &nbsp; Limited Period Offer
                  </Box>

                  <Box mt={2} display="flex" justifyContent="center">
                    <Button
                      type="submit"
                      variant="contained"
                      className="theme-btn wow fadeInUp"
                      data-wow-delay=".8s"
                      style={{
                        padding: "16.5px 14px",
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "1",
                      }}
                      disabled={!otpVerified}
                    >
                      Enroll Now{" "}
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
  );
}
