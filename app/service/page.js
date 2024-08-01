"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import BrandSlider1 from "@/components/slider/BrandSlider1";
import Footer3 from "@/components/layout/footer/Footer3";
import { useInternship } from "../context/InternshipContext";
import { useRouter } from "next/navigation";

export default function Service() {
  const [activeItem, setActiveItem] = useState(1);
  const [internships, setInternships] = useState([]);
  const router = useRouter();
  const {setInternshipId,internshipId} = useInternship();

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

  const handleClick = (index) => {
    setActiveItem(index);
  };

  const handleApplyNowClick = (id) => {
    console.log("id".id)
    setInternshipId(id);
    router.push("/service-details")
  }

  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Internship">
        <div>
          <section className="service-section fix section-padding">
            <div className="container">
              <div className="section-title text-center">
                <span className="wow fadeInUp">OUR SERVICES</span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  We Provide the Best Quality
                </h2>
              </div>
              <div className="service-wrapper mb-0">
                <div className="row">
                  {internships.map((item, index) => (
                    <div
                      key={item._id}
                      className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                      data-wow-delay={`${0.3 + index * 0.2}s`}
                    >
                      <div className="service-box-items box-shadow">
                        <div className="icon">
                          <img
                            // src={`/assets/img/service/icon/s-icon-${internship.icon}.svg`}
                            alt="icon-img"
                          />
                        </div>
                        <div className="content">
                          <h4>
                            <Link href={`/service-details`}>
                              {item.jobTitle}
                            </Link>
                          </h4>
                          <p>{item.description}</p>
                          <div className="d-flex align-items-center justify-content-between">
                          <button
                            // href={`/service-details/?internshipId=${item._id}`}
                            className="theme-btn-2 mt-3 d-flex align-items-center"
                            onClick={() => handleApplyNowClick(item._id)}
                          >
                            Apply Now
                            <i className="fa-solid fa-arrow-right-long ms-2" />
                          </button>

                            <Link href={`/service-details`}>
                              <span className="theme-btn-2 mt-3 d-flex align-items-center">
                                ₹ {item.price}
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Brand Section */}
          <section className="style-2 fix section-padding">
            <div className="brand-section fix section-padding pt-0 mt-5">
              <div className="container">
                <div className="brand-wrapper">
                  <h6 className="text-center wow fadeInUp" data-wow-delay=".3s">
                    1k + Brands Trust Us
                  </h6>
                  <BrandSlider1 />
                </div>
              </div>
            </div>
          </section>

          {/* Service Details Section */}
          {/* <section className="service-details-section fix section-padding">
                        <div className="container">
                            <div className="service-details-wrapper">
                               
                            </div>
                        </div>
                    </section> */}
        </div>
        <Footer3 />
      </Layout>
    </>
  );
}
