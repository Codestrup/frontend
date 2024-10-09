"use client";
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { useInternship } from "../../app/context/InternshipContext";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import {Card,useMediaQuery,useTheme} from "@mui/material";
import { ApiConfig } from "../Apiconfig";

const Page = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();
  const searchParams = useSearchParams();
  const refer = searchParams.get("refer");
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
    if (!refer) {
      router.push(`/registration_form`);
    } else {
      router.push(`/registration_form?refer=${refer}`);
    }
  };

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
                          padding: "0px",
                          boxSizing: "border-box",
                          marginTop: "48px",
                          borderRadius: "10px",
                          ...(isMobile
                            ? { maxHeight: "auto" }
                            : { maxHeight: "360px" ,height: "100%",}),
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
                              cursor: "pointer",
                            }}
                            onClick={() => handleApplyNowClick(item)}
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
                            style={{ padding: "20px", marginTop: "0" }}
                          >
                            <h4 style={{ minHeight: "50px" }}>
                              <p
                                onClick={() => handleApplyNowClick(item)}
                                style={{ cursor: "pointer" }}
                              >
                                {item.jobTitle}
                              </p>
                            </h4>

                            <div style={{}}>
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: item?.description
                                    ? item.description.slice(0, 80) + "..."
                                    : "",
                                }}
                                style={{ cursor: "pointer" }}
                              />
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

      
    </div>
  );
};

export default Page;
