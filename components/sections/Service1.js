"use client";
import React, { useState, useEffect, useReducer } from "react";
import Link from "next/link";
import axios from "axios";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInternship } from "../../app/context/InternshipContext";
import { useRouter } from "next/navigation";
import { Dialog, Box, IconButton, Button, Card } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faFacebook, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
      name: "Telegram",
      icon: faTelegram,
      link: "https://t.me/+6HxZOtDBk6w0N2Vl",

    },

    {
      id: 4,
      name: "Instagram",
      icon: faInstagram,
      link: "https://bit.ly/45tfDXd",
    },

    {
      id: 5,
      name: "Facebook",
      link: "https://bit.ly/3zciBU0",
      icon: faFacebook,
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
              Browse Internships{" "}
            </span>

            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Enroll Your Ideal Internship 
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
                      marginBottom: '10px'
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
              <Box
                component="ul"
                sx={{
                  display: 'flex',
                  listStyle: 'none',
                  padding: { xs: '10px', md: '30px' },
                  margin: 0,
                  gap: { xs: '10px', md: '20px' },
                  justifyContent: 'center',
                }}
              >

                <Box
                  component="li"
                  sx={{
                    display: { xs: 'none', md: 'none', lg: 'flex' },
                    alignItems: "center",
                    gap: "10px"
                  }}
                >
                  <Link href="http://codestrup.in/">
                    <p style={{ color: "#384bff" }}>Codestrup Infotech Pvt Ltd</p>
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
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: "10px",
                        color: "#384bff",
                        textDecoration: "none",
                      }}
                    >
                      <FontAwesomeIcon icon={item.icon} size="lg" style={{ color: "#384bff" }} />
                    </Link>
                  </Box>
                ))}
              </Box>
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
