"use client";
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useInternship } from "../context/InternshipContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Card, CardMedia } from "@mui/material";
import {
  faTelegram,
  faInstagram,
  faFacebook,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Page = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
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
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://api.codestrup.in/getblogs");
        setBlogs(response?.data?.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchBlogs();
  }, []);

  const handleApplyNowClick = (internship) => {
    setInternshipId(internship._id);
    setSelectedInternship(internship);
    setInformationDialogOpen(true);
  };

  const handleNextClick = (slug) => {
    setInformationDialogOpen(false);
    router.push(`/blog?${slug}`);
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

  return (
    <div>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blogs">
        <div>
          <section
            className="service-section fix "
            style={{ padding: "60px 0" }}
          >
            {/* <h2
              className="wow fadeInUp"
              data-wow-delay=".3s"
              style={{ display: "flex", justifyContent: "center" }}
            >
              Blogs
            </h2> */}
            <div className="container">
              <div className="service-wrapper mb-0">
                <div className="row">
                  {blogs.map((item) => (
                    <div
                      key={item._id}
                      className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                      data-wow-delay={`${item * 0.2}s`}
                      style={{ height: "100%" }}
                    >
                      <Link href={`/blogs/${item.slug}?id=${item._id}`}>
                        <Card
                          elevation={3}
                          className="service-box-items "
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            minHeight: "300px",
                            padding: "0px",
                            boxSizing: "border-box",
                            marginTop: "48px",
                          }}
                        >
                          <div>
                            {/* <div
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
                                  // objectFit: "contain",
                                }}
                              />
                            </div> */}
                            <CardMedia
                              sx={{ height: 140 }}
                              image={item?.imageUrl}
                              title="green iguana"
                            />
                            <div
                              className="content"
                              style={{ padding: "0 20px " }}
                            >
                              <h4>
                                <p>{item.title}</p>
                              </h4>

                              <div style={{ height: "100%" }}>
                                <p>
                                  {item.metaDescription &&
                                  item?.metaDescription.length > 50
                                    ? item?.metaDescription.slice(0, 50)
                                    : item?.metaDescription}
                                  &nbsp;
                                </p>
                              </div>
                              <div
                                className="content-bottom d-flex align-items-center justify-content-between"
                                style={{
                                  marginTop: "auto",
                                }}
                              ></div>
                            </div>
                          </div>
                        </Card>
                      </Link>
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
