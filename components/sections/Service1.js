"use client";
import React, { useState, useEffect, useReducer } from "react";
import Link from "next/link";
import axios from "axios";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInternship } from "../../app/context/InternshipContext";
import { useRouter } from "next/navigation";
import { Dialog, Box, IconButton, Button, Card } from "@mui/material";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  breakpoints: {
    1199: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

export default function Service1() {
  const router = useRouter();
  const [internships, setInternships] = useState([]);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [informationDialogOpen, setInformationDialogOpen] = useState(false);

  const { setInternshipId } = useInternship();

  // State to manage the toggle for each item
  const [showFullDescription, setShowFullDescription] = useState(
    internships.reduce((acc, item) => ({ ...acc, [item._id]: false }), {})
  );

  // Function to toggle the description
  const toggleDescription = (id) => {
    setShowFullDescription((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get("https://api.codestrup.in/loadjobs");
        setInternships(response?.data?.data || []);
     
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchInternships();
  }, []);

  // const handleApplyNowClick = (id) => {
  //   setInternshipId(id);
  //   router.push("/internship");
  // };

  const handleApplyNowClick = (internship) => {
    setInternshipId(internship._id);
    setSelectedInternship(internship);
    setInformationDialogOpen(true);
  };

  const handleNextClick = () => {
    setInformationDialogOpen(false);
    router.push("/registration_form");
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
      name: "Appreciation Letter (Best Performer Recognition).",
    },

    {
      id: 5,
      name: "Network Opportunities - Connect with  members and interns from around the world experiencing a multicultural and rare diverse working environment.",
    },

    {
      id: 6,
      name: "Learning Opportunities - As an intern at  Codestrup infotech Pvt Ltd  , you'll dive into a collaborative, intellectually stimulating environment, gaining hands-on experience with cutting-edge projects at the forefront of technological advancement",
    },

    {
      id: 7,
      name: "Network Opportunities - Connect with  members and interns from around the world experiencing a multicultural and rare diverse working environment.",
    },

    {
      id: 8,
      name: "Job Opportunities - Access employment opportunities with us. This form is for  INTERNSHIP in Codestrup Infotech Pvt Ltd for JUNE 2024 Batch.",
    },
  ];

  return (
    <section
      className="service-section fix  bg-cover"
      style={{
        backgroundImage: 'url("assets/img/service/service-bg.jpg")',
        paddingTop: "120px",
      }}
      id="service"
    >
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span className="wow fadeInUp" style={{ fontWeight: "600" }}>
              Browse Internship{" "}
            </span>

            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Discover Your Ideal Internship
            </h2>
          </div>
          
        </div>
        <div className="service-wrapper">
          <div className="swiper service-slider">
            <Swiper {...swiperOptions} className="swiper-wrapper">
              {internships.map((item) => (
                <SwiperSlide key={item._id}>
                  <Card
                    elevation={3}
                    className="service-box-items"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      minHeight: "300px",
                      padding: "20px",
                      boxSizing: "border-box",
                      marginBottom:'10px'
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
                        }}
                      >
                        <img
                          src={item?.imageUrl}
                          alt="icon-img"
                          style={{
                            width: "100%",
                            height: "100px",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                      <div className="content">
                        <h4>
                          <Link href="/internship">{item.jobTitle}</Link>
                        </h4>
                        <div style={{ height: "100%", minHeight: "100px" }}>
                          <p>
                            {showFullDescription[item._id]
                              ? item.description
                              : `${item.description.substring(0, 50)}...`}
                            &nbsp;
                            {/* {item.description.length > 50 && (
                              <span>
                                <button
                                  onClick={() => toggleDescription(item._id)}
                                  className="read-more-less-btn"
                                >
                                  {showFullDescription[item._id]
                                    ? "Read Less"
                                    : "Read More"}
                                </button>
                              </span>
                            )} */}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-bottom d-flex align-items-center justify-content-between"
                      style={{
                        marginTop: "auto",
                      }}
                    >
                      <span
                        className="theme-btn-3 apply-now-btn mt-3 d-flex align-items-center "
                        onClick={() => handleApplyNowClick(item)}
                        style={{ cursor: "pointer" }}
                      >
                        Apply Now
                        <i className="fa-solid fa-arrow-right-long ms-2" />
                      </span>
                      <span className="theme-btn-3 mt-3 d-flex align-items-center">
                        ₹ {item.price}
                      </span>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="service-text wow fadeInUp" data-wow-delay=".4s">
            <Link
              href="/internship"
              className="theme-btn wow fadeInUp"
              data-wow-delay=".8s"
              style={{
                padding: "20px 20px",
              }}
            >
              View Internship
            </Link>
          </div>
        </div>
      </div>

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
              {/* <h5 variant="h4">Perks you will receive are:</h5> */}
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

            <Box>
              <ul>
                <li
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <p>Visit Our Website First</p> -{" "}
                  <Link
                    href="http://codestrup.in/"
                    style={{
                      color: "#384bff",
                      textDecoration: "underline",
                    }}
                  >
                    Click Here
                  </Link>
                </li>
                {socialLinks.map((item) => (
                  <li
                    key={item.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      justifyContent: "start",
                      width: "100%",
                    }}
                  >
                    <p>{item.name}</p>-
                    <Link
                      href={item.link}
                      style={{
                        color: "#384bff",
                        textDecoration: "underline",
                        marginLeft: "10px",
                      }}
                    >
                      Click Here
                    </Link>
                  </li>
                ))}
              </ul>
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
          </Box>
        </Dialog>
      )}
    </section>
  );
}
