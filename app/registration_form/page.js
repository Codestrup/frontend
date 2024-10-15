"use client";

import React, { useState, useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
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
  stickyForm: {
    position: "fixed",

    maxHeight: "calc(100vh - 40px)",
    overflowY: "auto",
    right: 0,
    width: "50%",
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
  const [averageRating, setAverageRating] = useState(4.5);
  const formRef = useRef(null);
  const footerRef = useRef(null);
  const [scroll, setScroll] = useState(0);
  const [scroll1, setScroll1] = useState(0);

  const handleMobileScreenForm = () => {
    setMobileScreenDialogOpen(!mobileScreenDialogOpen);
  };

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get(ApiConfig.getFeaturedJobData);
        const internship = response?.data?.data.find(
          (item) => item?._id === internshipId
        );
        setInternship(internship);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchInternships();
  }, [internshipId]);

  useEffect(() => {
    if (width) {
      setIsMobileScreen(width < 900);
      setScroll1(width < 991);
    }
  }, [width]);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (formRef.current && footerRef.current) {
        const formRect = formRef.current.getBoundingClientRect();
        const footerRect = footerRef.current.getBoundingClientRect();

        // Check if the footer overlaps with the form
        if (footerRect.top < window.innerHeight) {
          formRef.current.style.position = "absolute";
          formRef.current.style.bottom = `${
            window.innerHeight - footerRect.top
          }px`;
          formRef.current.style.top = "auto";
          formRef.current.style.right = "0";
        } else {
          formRef.current.style.position = "fixed";
          formRef.current.style.top = scroll || scroll1 ? "80px" : "120px";
          formRef.current.style.bottom = "auto";
          formRef.current.style.right = "0";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll, scroll1]);
  const InternshipBackgroundImage = internship?.imageUrl ?? "";
  console.log(scroll1);
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <section
        className="service-details-section fix footer-section footer-bg"
        style={{
          position: "relative",
          height: "100%",
          overflowY: "auto",
        }}
      >
        <div className="shape-2">
          <img src="/assets/img/footer-shape-3.png" alt="shape-img" />
        </div>

        <div
          className="registration-grid-container"
          style={{ position: "relative", zIndex: 3 }}
        >
          <div style={{ padding: "15px" }}>
            <div style={{ width: "100%", height: "200px" }}>
              <img
                src={InternshipBackgroundImage}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
                alt="Internship background"
              />
            </div>

            <div style={{ marginTop: "25px" }}>
              <div style={styles.flexItemsCenterJustifyBetween}>
                <h4 style={{ textAlign: "left", textTransform: "uppercase" }}>
                  {internship?.jobTitle ?? ""}
                </h4>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
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
                    <p>{averageRating}</p>
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
            <div
              className="service-details-wrapper"
              ref={formRef}
              style={{
                ...styles.stickyForm,
              }}
            >
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
                style={{ fontSize: "20px", color: "#384bff", fontWeight: 600 }}
              >
                ₹ {internship?.price}
              </span>
              &nbsp; &nbsp;
              <span style={{ textDecoration: "line-through" }}>₹ 1499</span>
              &nbsp; &nbsp; Limited Period Offer
            </div>

            <Box mt={1} onClick={handleMobileScreenForm}>
              <Button variant="contained">Enroll Now</Button>
            </Box>
          </Box>
        )}
        <div style={{ backgroundColor: "#f7f7f7", padding: "15px" }}>
          {internship && (
            <Review
              id={internship}
              setAverageRating={setAverageRating}
              footerRef={footerRef}
            />
          )}
        </div>
      </section>

      {mobileScreenDialogOpen && isMobileScreen && (
        <MobileScreenRegistrationFormDialog
          open={mobileScreenDialogOpen}
          onClose={handleMobileScreenForm}
          internship={internship}
          refer={refer}
          isMobileScreen={isMobileScreen}
        />
      )}
    </Layout>
  );
}
