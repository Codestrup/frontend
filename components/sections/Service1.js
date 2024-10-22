"use client";
import React, { useState, useEffect, useReducer } from "react";
import Link from "next/link";
import axios from "axios";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInternship } from "../../app/context/InternshipContext";
import { useRouter } from "next/navigation";
import { Card, useMediaQuery, useTheme } from "@mui/material";
import { ApiConfig } from "@/app/Apiconfig";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();
  const [internships, setInternships] = useState([]);
  const { setInternshipId } = useInternship();

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: ApiConfig.getFeaturedJobData,
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
    handleNextClick();
  };

  const handleNextClick = () => {
    router.push("/registration_form");
  };

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
                    onClick={() => handleApplyNowClick(item)}
                    style={{
                      height: "100%",
                      padding: "0px",
                      boxSizing: "border-box",
                      marginBottom: "10px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      minWidth:'265px',
                      ...(isMobile
                        ? { maxHeight: "auto" }
                        : { maxHeight: "360px", overflow: "hidden" }),
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        boxSizing: "border-box",

                        ...(isMobile
                          ? { maxHeight: "auto" }
                          : { maxHeight: "360px" }),
                      }}
                    >
                      <div
                        className=""
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                      >
                        <img
                          src={item?.imageUrl}
                          alt="icon-img"
                          style={{
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>

                      <div
                        className="content"
                        style={{ padding: "20px", marginTop: "0px" }}
                      >
                        <h4 style={{}}>
                          <Link href="/internship">{item.jobTitle}</Link>
                        </h4>
                        {/* <div style={{}}>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item?.description
                                ? item.description.slice(0, 80) + "..."
                                : "",
                            }}
                            style={{ cursor: "pointer" }}
                          />
                        </div> */}

                        <p>{item?.duration}</p>

                        <div className="content-bottom d-flex align-items-center justify-content-between">
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
                      </div>
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
    </section>
  );
}
