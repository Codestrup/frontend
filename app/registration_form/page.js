"use client";

import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useInternship } from "../context/InternshipContext";
import { Box, Button, IconButton, Rating } from "@mui/material";
import useScreenWidth from "@/components/hooks/useScreenWidth";
import RegistrationForm from "./Form";
import MobileScreenRegistrationFormDialog from "./MobileForm";
import Review from "@/components/sections/Review";
import { ApiConfig } from "../Apiconfig";
import { HiUsers } from "react-icons/hi";

//styles
const styles = {
  bottomBox: {
    width: "100%",
    padding: "10px",
    background: "white",
    position: "fixed",
    bottom: "0",
    zIndex: 999,
  },

  flexItemsCenterJustifyBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export default function ServiceDetails() {
  const width = useScreenWidth();
  const searchParams = useSearchParams();
  const refer = searchParams.get("refer");
  const [internship, setInternship] = useState([]);
  const { internshipId } = useInternship();
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [mobileScreenDialogOpen, setMobileScreenDialogOpen] = useState(false);

  const handleMobileScreenForm = () => {
    setMobileScreenDialogOpen(!mobileScreenDialogOpen);
  };

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get(ApiConfig.getFeaturedJobData);

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
              }}
            >
              <img
                src={InternshipBackgroundImage}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
            </div>

            <div style={{ marginTop: "25px" }}>
              <div style={styles.flexItemsCenterJustifyBetween}>
                <h4
                  style={{
                    textAlign: "left",
                    textTransform: "uppercase",
                  }}
                >
                  {internship?.jobTitle ?? ""}
                </h4>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      paddingRight: "15px",
                      borderRight: "1px solid",
                    }}
                  >
                    <Rating
                      name="read-only"
                      precision={0.5}
                      value={1}
                      max={1}
                      readOnly
                    />
                    <p>4.5</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <IconButton>
                      <HiUsers />
                    </IconButton>
                    <p>{internship?.enrollmentStudentCount}</p>
                    <p>Enrolled Students</p>
                  </div>
                </div>
              </div>

              <div
                className="internship-description"
                style={{ marginTop: "10px" }}
                dangerouslySetInnerHTML={{ __html: internship?.description }}
              />
            </div>
          </div>

          {!isMobileScreen && (
            <div className="service-details-wrapper">
              <div className="g-4">
                <RegistrationForm
                  internship={internship}
                  refer={refer}
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

      {/* mobile screen registration form */}
      {mobileScreenDialogOpen && isMobileScreen && (
        <MobileScreenRegistrationFormDialog
          open={mobileScreenDialogOpen}
          onClose={handleMobileScreenForm}
          internship={internship}
          refer={refer}
          isMobileScreen={isMobileScreen}
        />
      )}

      {/* rating and review */}
      {internship && <Review id={internship} />}
    </Layout>
  );
}
