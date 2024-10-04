"use client";
import React, { useState, useEffect } from "react";
import Accordion1 from "@/components/elements/Accordion1";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useInternship } from "../../app/context/InternshipContext";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { Dialog, Box, IconButton, Button, Card } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faInstagram,
  faFacebook,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const refer = searchParams.get("refer");
  const [internships, setInternships] = useState([]);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const { setInternshipId } = useInternship();
  const [informationDialogOpen, setInformationDialogOpen] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState({});

  const toggleDescription = (id) => {
    setShowFullDescription((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: "https://api.codestrup.in/loadjobs",
          params: {
            limit: 100,
          },
        });
        setInternships(response?.data?.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchInternships();
  }, []);

  const handleApplyNowClick = async (internship) => {
    await setInternshipId(internship._id);
    await setSelectedInternship(internship);
    // setInformationDialogOpen(true);
    handleNextClick();
  };

  const handleNextClick = () => {
    setInformationDialogOpen(false);
    if (!refer) {
      router.push(`/registration_form`);
    } else {
      router.push(`/registration_form?refer=${refer}`);
    }
  };

  const socialLinks = [
    {
      id: 1,
      name: "LindkeIn",
      link: "https://bit.ly/4erKOpQ",
      icon: faLinkedin,
    },
    {
      id: 2,
      name: "Whatsapp",
      link: "https://bit.ly/4cn7J3I",
      icon: faWhatsapp,
    },
    {
      id: 3,
      name: "Facebook",
      link: "https://bit.ly/3zciBU0",
      icon: faFacebook,
    },
    {
      id: 4,
      name: "Instagram",
      link: "https://bit.ly/45tfDXd",
      icon: faInstagram,
    },
    {
      id: 5,
      name: "Telegram",
      link: "https://t.me/+6HxZOtDBk6w0N2Vl",
      icon: faTelegram,
    },
  ];

  const internshipPerks = [
    {
      id: 1,
      name: "Offer Letter from Codestrup infotech Pvt Ltd.",
    },

    {
      id: 2,
      name: "Internship Certificate - A verifiable completion certificate is provided after successful completion of one month of internship.",
    },

    {
      id: 3,
      name: "Letter of recommendation (based on Performance) - A verifiable recommendation letter is provided to top performing interns based on various assessment parameters.",
    },

    {
      id: 4,
      name: "Learning Opportunities - As an intern at  Codestrup infotech Pvt Ltd  , you'll dive into a collaborative, intellectually stimulating environment, gaining hands-on experience with cutting-edge projects at the forefront of technological advancement",
    },

    {
      id: 5,
      name: "Job Opportunities - Access employment opportunities with us.                              This form is for INTERNSHIP in Codestrup Infotech Pvt Ltd ",
    },
  ];

  //  const testbg = "https://codestrupinfotech.com/reactjs.jpg"
  return (
    <div>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Internship">
        <div>
          <section
            className="service-section fix "
            style={{ padding: "60px 0" }}
          >
            <h2
              className="wow fadeInUp"
              data-wow-delay=".3s"
              style={{ display: "flex", justifyContent: "center" }}
            >
              Enroll Your Ideal Internship
            </h2>
            <div className="container">
              <div className="service-wrapper mb-0">
                <div className="row">
                  {internships.map((item) => (
                    <div
                      key={item._id}
                      className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                      data-wow-delay={`${item * 0.2}s`}
                    >
                      <Card
                        elevation={3}
                        className="service-box-items "
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          minHeight: "360px",
                          padding: "20px",
                          boxSizing: "border-box",
                          marginTop: "48px",
                        }}
                      >
                        <div>
                          <div
                            className=""
                            style={{
                              width: "100%",
                              height: "100%",
                              minHeight: "100px",
                              overflow: "hidden",
                              cursor: "pointer",
                            }}
                            onClick={() => handleApplyNowClick(item)}
                          >
                            <img
                              src={item?.imageUrl}
                              // src={testbg}
                              alt="icon-img"
                              style={{
                                width: "100%",
                                height: "100px",
                                objectFit: "contain",
                              }}
                            />
                          </div>

                          <div className="content">
                            <h4 style={{ minHeight: "50px" }}>
                              <p
                                onClick={() => handleApplyNowClick(item)}
                                style={{ cursor: "pointer" }}
                              >
                                {item.jobTitle}
                              </p>
                            </h4>

                            <div style={{ height: "100%", minHeight: "100px" }}>
                              <p
                                onClick={() => handleApplyNowClick(item)}
                                style={{ cursor: "pointer" }}
                              >
                                {showFullDescription[item._id]
                                  ? item.description
                                  : `${item.description.substring(0, 50)}...`}
                                &nbsp;
                              </p>
                            </div>
                            <div
                              className="content-bottom d-flex align-items-center justify-content-between"
                              style={{
                                marginTop: "auto",
                              }}
                            >
                              <span
                                className="theme-btn-2 apply-now-btn mt-3 d-flex align-items-center"
                                onClick={() => handleApplyNowClick(item)}
                                style={{ cursor: "pointer" }}
                              >
                                Apply Now
                                <i className="fa-solid fa-arrow-right-long ms-2" />
                              </span>
                              <span className="theme-btn-2 mt-3 d-flex align-items-center">
                                ₹ {item.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>

      {selectedInternship && informationDialogOpen && (
        <Dialog
          open={informationDialogOpen}
          onClose={() => setInformationDialogOpen(false)}
          sx={{
            "& .MuiDialog-paperWidthSm": {
              width: "100%",
              maxWidth: "700px",
            },
          }}
        >
          <Box sx={{ padding: "30px", position: "relative" }}>
            <h2 variant="h4" style={{ textAlign: "center" }}>
              {selectedInternship.jobTitle}
            </h2>

            <IconButton
              sx={{ position: "absolute", top: 0, right: "5px" }}
              onClick={() => setInformationDialogOpen(false)}
            >
              <i className="fas fa-times" />
            </IconButton>

            <Box mt={2}>
              <ol>
                {internshipPerks.map((item) => (
                  <div
                    className="d-flex justify-content-start "
                    style={{ gap: "6px" }}
                  >
                    <li key={item.id}></li>
                    <span>{item.name}</span>
                  </div>
                ))}
              </ol>
            </Box>

            <Box mt={2} display="flex" justifyContent="center">
              <Button
                variant="contained"
                onClick={handleNextClick}
                className="theme-btn wow fadeInUp"
                data-wow-delay=".8s"
                style={{
                  padding: "10px 14px",
                  backgroundColor: "#384bff",
                }}
              >
                Next
              </Button>
            </Box>

            <Box mt={2}>
              <Box
                component="ul"
                sx={{
                  display: "flex",
                  listStyle: "none",
                  padding: { xs: "0px", md: "0px" },
                  margin: 0,
                  gap: { xs: "10px", md: "20px" },
                  justifyContent: "center",
                }}
              >
                <Box
                  component="li"
                  sx={{
                    display: { xs: "none", md: "none", lg: "flex" },
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Link href="http://codestrup.in/">
                    <p style={{ color: "#384bff" }}>
                      Codestrup Infotech Pvt Ltd
                    </p>
                  </Link>
                  |
                </Box>

                {socialLinks.map((item) => (
                  <Box
                    component="li"
                    key={item.id}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "auto",
                    }}
                  >
                    <Link
                      href={item.link}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "10px",
                        color: "#384bff",
                        textDecoration: "none",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        size="lg"
                        style={{ color: "#384bff" }}
                      />
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Dialog>
      )}
    </div>
  );
};

export default Page;
