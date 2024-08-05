"use client";
import React, { useState, useEffect, useReducer } from "react";
import Link from "next/link";
import axios from "axios";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInternship } from "../../app/context/InternshipContext";
import { useRouter } from "next/navigation";

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
        console.log(response?.data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchInternships();
  }, []);

  const handleApplyNowClick = (id) => {
    console.log("id".id);
    setInternshipId(id);
    router.push("/service-details");
  };

  return (
    <section
      className="service-section fix  bg-cover"
      style={{ backgroundImage: 'url("assets/img/service/service-bg.jpg")', paddingTop: '120px' }}
      id="service"
    >
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span className="wow fadeInUp">Internship Domain</span>

            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Your Journey Starts Now.
            </h2>
          </div>
          {/* <div className="array-button">
            <button className="array-prev">
              <i className="fal fa-arrow-right" />
            </button>
            <button className="array-next">
              <i className="fal fa-arrow-left" />
            </button>
          </div> */}
        </div>
        <div className="service-wrapper">
          <div className="swiper service-slider">
            <Swiper {...swiperOptions} className="swiper-wrapper">
              {internships.map((item) => (
                <SwiperSlide key={item._id}>
                  <div
                    className="service-box-items"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      minHeight: "300px",
                      padding: "20px",
                      boxSizing: "border-box",
                    }}
                  >
                    <div>
                      <div className="" style={{ width: '100%', height: "100%", minHeight: '100px', overflow: "hidden" }}>
                        <img src={item?.imageUrl} alt="icon-img" style={{ width: "100%", height: "100px", objectFit: "contain" }} />
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
                            {item.description.length > 50 && (
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
                            )}
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
                        onClick={() => handleApplyNowClick(item._id)}
                        style={{ cursor: 'pointer' }}
                      >
                        Apply Now
                        <i className="fa-solid fa-arrow-right-long ms-2" />
                      </span>
                      <span className="theme-btn-3 mt-3 d-flex align-items-center">
                        ₹ {item.price}
                      </span>
                    </div>
                  </div>
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
