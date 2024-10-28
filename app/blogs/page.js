"use client";
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import axios from "axios";
import { Card, CardMedia } from "@mui/material";

const Page = () => {
  const [blogs, setBlogs] = useState([]);

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

  return (
    <div>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blogs">
        <div>
          <section
            className="service-section fix "
            style={{ padding: "60px 0" }}
          >
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
                      <div className="h-full">
                        <Link href={`/blogs/${item.slug}?id=${item._id}`}>
                          <Card
                            elevation={3}
                            className="service-box-items "
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                              height: "280px",
                              padding: "0px",
                              boxSizing: "border-box",
                              marginTop: "48px",
                            }}
                          >
                            <div>
                              <CardMedia
                                sx={{ height: 140 }}
                                image={item?.imageUrl}
                                title="green iguana"
                              />
                              <div
                                className="content"
                                style={{ padding: "0 20px " }}
                              >
                                <h4 style={{ fontSize: "14px" }}>
                                  {item.title && item?.title.length > 60
                                    ? item.title.slice(0, 60)
                                    : item?.title}
                                </h4>

                                <div style={{ height: "100%" }}>
                                  <p style={{ fontSize: "14px" }}>
                                    {item.metaDescription &&
                                    item?.metaDescription.length > 50
                                      ? `${item?.metaDescription.slice(
                                          0,
                                          50
                                        )}...Read`
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
