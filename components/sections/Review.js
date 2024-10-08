import { Card, Container, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import axios from "axios";
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
  navigation: {
    nextEl: ".array-prev",
    prevEl: ".array-next",
  },
  breakpoints: {
    1199: {
      slidesPerView: 3,
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
const Review = ({ id }) => {
  const [reviews, setReviwes] = useState([]);
  const getReviews = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `${ApiConfig.getRatingByIntershipId}/${id?._id}`,
      });
      if (res.status === 200) {
        setReviwes(res?.data?.rating);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (id) {
      getReviews();
    }
  }, [id]);

 
  return (
    <Container>
      <div style={{ marginTop: "30px" }}>
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          Reviews from students
        </h3>

        <div className="service-wrapper">
          <div className="swiper service-slider">
            <Swiper {...swiperOptions} className="swiper-wrapper">
              {reviews?.map((item) => (
                <SwiperSlide key={item._id}>
                  <div
                    style={{
                      border: "1px solid #d7d7d7",
                      borderRadius: "15px",
                      padding: " 20px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Typography fontWeight={700} fontSize="20px">
                        {item?.rating}{" "}
                      </Typography>
                      <Rating
                        name="read-only"
                        precision={0.5}
                        value={item?.rating}
                        readOnly
                      />
                    </div>
                    <Typography mt={1}>{item?.review}</Typography>

                    <div
                      style={{
                        display: "flex",
                        marginTop: "20px",
                        gap: "15px",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={item?.userProfileUrl}
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <Typography fontWeight={700}>
                          {item?.userName}
                        </Typography>
                        <Typography fontSize="12px">{id?.jobTitle}</Typography>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div
            className="array-button"
            style={{ justifyContent: "center", marginTop: "20px" }}
          >
            <button className="array-prev">
              <i className="fal fa-arrow-left" />
            </button>
            <button className="array-next">
              <i className="fal fa-arrow-right" />
            </button>
          </div>
          <div className="service-text wow fadeInUp" data-wow-delay=".4s">
            {/* <Link
            href="/internship"
            className="theme-btn wow fadeInUp"
            data-wow-delay=".8s"
            style={{
              padding: "20px 20px",
            }}
          >
            View Internship
          </Link> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Review;
