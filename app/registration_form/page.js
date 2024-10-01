"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer3 from "@/components/layout/footer/Footer3";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
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
  InputAdornment,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { menuProps } from "../../utils/menuProps";
import { toast } from "react-hot-toast";
// import bannerImage from "../../public/assets/img/banner.webp"
import { TiUser } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaBuilding } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaShare } from "react-icons/fa";
import { PiListNumbersFill } from "react-icons/pi";
import useScreenWidth from "@/components/hooks/useScreenWidth";
import RegistrationForm from "./Form";
import MobileScreenRegistrationFormDialog from "./MobileForm";

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

  collegeName: Yup.string()
    .min(2, "College name must be at least 2 characters")
    .required("College name is required"),

  qaualification: Yup.string().required("Qualification is required"),

  // state: Yup.string().required("State is required"),

  // city: Yup.string().required("City is required"),

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

const internshipHighLights = [
  {
    id: 1,
    text: "Working on live projects",
  },

  {
    id: 2,
    text: "Completed task review & approval by experts",
  },

  {
    id: 3,
    text: "Ask Us, Ai to help you to learn & guide to complete the project tasks",
  },

  {
    id: 4,
    text: "Video and Text courses",
  },

  {
    id: 5,
    text: "Courses Certification",
  },

  {
    id: 6,
    text: "Get new job openings alerts",
  },

  {
    id: 7,
    text: "Internship Certificate after completing all the projects & task",
  },

  {
    id: 8,
    text: "Share your Internship certificate directly on your Linkedin profile",
  },
];

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

  appyHeading: {
    textAlign: "center",
  },

  bottomBox: {
    width: "100%",
    padding: "10px",
    background: "white",
    position: "fixed",
    bottom: "0",
    zIndex: 999,
  },
};

export default function ServiceDetails() {
  const width = useScreenWidth();
  const searchParams = useSearchParams();
  const refer = searchParams.get("refer");
  const [loading, setLoading] = useState(false);
  const [internship, setInternship] = useState([]);
  const [formValues, setFormValues] = useState(null);
  const [consentDialogOpen, setConsentDialogOpen] = useState(false);
  const { internshipId } = useInternship();
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [stateName, setStateName] = useState({});
  const [cityName, setCityName] = useState({});

  const [mobileScreenDialogOpen, setMobileScreenDialogOpen] = useState(false);

  const handleMobileScreenForm = () => {
    setMobileScreenDialogOpen(!mobileScreenDialogOpen);
  };

  const handleConsentYes = async () => {
    setConsentDialogOpen(false);

    try {
      setLoading(true);

      console.log("formValues", formValues);

      const res = await axios({
        method: "POST",
        url: "https://api.codestrup.in/create-order",
        data: {
          amount: internship?.price ?? "",
          check: "on",
          collegeName: formValues.collegeName ?? "",
          email: formValues.email ?? "",
          fieldOfStudy: formValues.qaualification ?? "",
          firstName: formValues.firstName ?? "",
          gender: formValues.gender ?? "",
          inform: "friend",
          job: localStorage.getItem("internshipId") ?? "",
          joined: "yes",
          lastName: formValues.lastName ?? "",
          phoneNumber: formValues.contactNumber ?? "",
          state: stateName?.name ?? "",
          city: cityName?.name ?? "",
          referralCode: refer ? refer : "",
        },
      });

      if (res.data.success) {
        setLoading(false);
        window.open(res.data.data.upiLink, "_blank");
      }
    } catch (error) {
      if (error.response) {
        setLoading(false);
        toast.error(error.response?.data?.message);
      }
    }
  };

  const handleConsentNo = () => {
    setConsentDialogOpen(false);
    toast.error("We need your consent for the payment");
  };

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get("https://api.codestrup.in/loadjobs");

        const internship = response?.data?.data.find((item) => {
          return item?._id === internshipId;
        });

        setInternship(internship);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchInternships();
  }, [internshipId]);

  useEffect(() => {
    if (width) {
      setIsMobileScreen(width < 500);
    }
  }, [width]);

  const InternshipBackgroundImage = internship?.imageUrl ?? "";

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <section
        className="service-details-section fix  footer-section footer-bg"
        style={{
          position: "relative",
        }}
      >
        <div className="shape-2">
          <img src="/assets/img/footer-shape-3.png" alt="shape-img" />
        </div>

        <div
          className="registration-grid-container"
          style={{ position: "relative", zIndex: 3 }}
        >
          <div
            style={{
              padding: "15px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "200px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={InternshipBackgroundImage}
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "contain",
                }}
              />
            </div>

            <div style={{ marginTop: "15px" }}>
              <h4
                style={{
                  textAlign: "left",
                  textTransform: "uppercase",
                }}
              >
                {internship?.jobTitle ?? ""}
              </h4>

              <p>{internship?.description ?? ""}</p>
            </div>

            {/* <div style={{ marginTop: "15px" }}>
              <h6
                style={{
                  textAlign: "left",
                  textTransform: "uppercase",
                }}
              >
                Highligths
              </h6>

              <ol style={{ paddingLeft: "0.9rem" }}>
                {internshipHighLights.map((hightlight) => (
                  <li key={hightlight?.id}>{hightlight?.text}</li>
                ))}
              </ol>
            </div> */}
          </div>

          {!isMobileScreen && (
            <div className="service-details-wrapper">
              <div className="g-4">
                <RegistrationForm
                  internship={internship}
                  refer={refer}
                  setConsentDialogOpen={setConsentDialogOpen}
                  setFormValues={setFormValues}
                  loading={loading}
                  setStateName={setStateName}
                  setCityName={setCityName}
                  isMobileScreen={isMobileScreen}
                />
              </div>
            </div>
          )}
        </div>

        {isMobileScreen && (
          <Box mt={1} textAlign="center" sx={styles.bottomBox}>
            <div>
              <span
                style={{
                  fontSize: "20px",
                  color: "#384bff",
                  fontWeight: 600,
                }}
              >
                ₹ {internship?.price}
              </span>
              &nbsp; &nbsp;
              <span
                style={{
                  textDecoration: "line-through",
                }}
              >
                ₹ 1499
              </span>
              &nbsp; &nbsp; Limited Period Offer
            </div>

            <Box mt={1} onClick={handleMobileScreenForm}>
              <Button variant="contained">Enroll Now</Button>
            </Box>
          </Box>
        )}
      </section>

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
                className="theme-btn1 wow fadeInUp"
                data-wow-delay=".8s"
                style={{
                  padding: "16.5px 14px",
                }}
              >
                No
              </Button>
              <Button
                variant="contained"
                onClick={() => handleConsentYes()}
                className="theme-btn wow fadeInUp"
                data-wow-delay=".8s"
                style={{
                  padding: "16.5px 14px",
                }}
              >
                Yes
              </Button>
            </Box>
          </Box>
        </Dialog>
      )}

      {/* mobile screen registration form */}
      {mobileScreenDialogOpen && isMobileScreen && (
        <MobileScreenRegistrationFormDialog
          open={mobileScreenDialogOpen}
          onClose={handleMobileScreenForm}
          internship={internship}
          refer={refer}
          setConsentDialogOpen={setConsentDialogOpen}
          setFormValues={setFormValues}
          loading={loading}
          setStateName={setStateName}
          setCityName={setCityName}
          isMobileScreen={isMobileScreen}
        />
      )}
    </Layout>
  );
}
