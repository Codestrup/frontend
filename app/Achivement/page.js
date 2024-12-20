"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import CounterUp from "@/components/elements/CounterUp";
import {
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { ApiConfig } from "../Apiconfig";

export default function Achievement() {
  const teamMembers = [
    {
      name: "Vaibhav Kanchi",
      role: "Successfully Completed React Internship",
      imageSrc: "/assets/img/achievers/01.jpeg",
    },
    {
      name: "Tushar Deshmukh",
      role: "Successfully Completed React Internship",
      imageSrc: "/assets/img/achievers/02.jpeg",
    },
    {
      name: "Aniket Yadav",
      role: "Successfully Completed NodeJs Internship",
      imageSrc: "/assets/img/achievers/03.jpeg",
    },
    {
      name: "Abhishek Anand",
      role: "Successfully Completed AWS Internship",
      imageSrc: "/assets/img/achievers/04.jpeg",
    },
    {
      name: "Samarth Bhokare",
      role: "Successfully Completed NodeJs Internship",
      imageSrc: "/assets/img/achievers/10.jpeg",
    },
    {
      name: "Renu Kuratkar",
      role: "Successfully Completed React Internship",
      imageSrc: "/assets/img/achievers/05.jpeg",
    },
    {
      name: "Poonam Rathod",
      role: "Successfully Completed React Internship",
      imageSrc: "/assets/img/achievers/07.jpeg",
    },
    {
      name: "Prajkata Kokate",
      role: "Successfully Completed ReactJs Internship",
      imageSrc: "/assets/img/achievers/06.jpeg",
    },
    {
      name: "Pooja Naitam",
      role: "Successfully Completed ReactJs Internship",
      imageSrc: "/assets/img/achievers/09.jpg",
    },
    {
      name: "Aarti Khandagale",
      role: "Successfully Completed WordPress Internship",
      imageSrc: "/assets/img/achievers/08.jpg",
    },
  ];

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isClient, setisClient] = useState(false);
  const [topAchievers, setTopAchievers] = useState([]);

  async function getAllTopAchievers() {
    try {
      const params = {
        limit:50
      }
      const res = await axios.get(ApiConfig.getAllAchievers,{params});
      if (res.status === 200) {
        setTopAchievers(res?.data?.data?.achievers);
      }
    } catch (error) {
      if (error) {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    getAllTopAchievers();
  }, []);

  const handleOpenDialog = (member) => {
    setSelectedMember(member);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedMember(null);
  };
  useEffect(() => {
    console.log("cient side rendring ");

    setisClient(true);
  }, []);

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Top Achievers">
        <div style={{ paddingTop: "60px" }}>
          <div
            style={{
              textAlign: "center",
              paddingTop: "0",
              paddingBottom: "0",
              alignItems: "center",
              padding: "25px 120px",
            }}
          >
            <h2
              className="wow fadeInUp"
              data-wow-delay=".3s"
              style={{ display: "flex", justifyContent: "center" }}
            >
              Our Top Achievers
            </h2>
          </div>
          <section
            className="team-section-4 section-padding"
            style={{ paddingTop: "16px" }}
          >
            <div className="container">
              <div className="row g-4">
                {topAchievers.map((member, index) => (
                  <div
                    key={index}
                    className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div
                      className="team-card-items mt-0"
                      style={{
                        width: "auto",
                        border: "3px solid #e0e0e0",
                        borderRadius: "20px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        onClick={() => handleOpenDialog(member)}
                        style={{ cursor: "pointer" }}
                      >
                        {/* Wrapping image and content in a single div */}
                        <div
                          className="team-image"
                          style={{
                            width: "100%",
                            // maxWidth:'240px',
                            height: "350px",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={member?.imageUrl}
                            alt="team-img"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div
                          className="team-content"
                          style={{ padding: "10px" }}
                        >
                          <h3>
                            <Link
                              onClick={(e) => {
                                e.preventDefault();
                                handleOpenDialog(member);
                              }}
                              sx={{ textDecoration: "none", color: "black" }}
                            >
                              {member?.name}
                            </Link>
                          </h3>
                          <p style={{ fontSize: "15px", fontWeight: 600 }}>
                            {member?.feedback}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {selectedMember && isClient && (
            <Dialog
              open={dialogOpen}
              onClose={handleCloseDialog}
              maxWidth="md"
              fullWidth
              PaperProps={{
                style: {
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  margin: 0,
                  borderRadius: "12px",
                  height: "auto",
                  maxWidth: "400px",
                  overflow: "hidden",
                  paddingTop: "28px",
                },
              }}
            >
              <DialogActions style={{ padding: "0 8px" }}>
                <IconButton
                  aria-label="close"
                  onClick={handleCloseDialog}
                  style={{
                    position: "absolute",
                    right: 8,
                    top: 1,
                    color: "#000",
                    zIndex: 10,
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogActions>
              <DialogContent>
                <div
                  className="team-card-items mt-0"
                  style={{
                    width: "auto",
                    border: "1px solid #e0e0e0",
                    // padding: "0px 24px",
                    paddingBottom: "10px",
                  }}
                >
                  <div
                    className="team-image"
                    style={{
                      width: "100%",
                      height: "350px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={selectedMember?.imageUrl}
                      alt="team-img"
                      style={{
                        cursor: "pointer",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="team-content">
                    <h3>{selectedMember?.name}</h3>
                    <p style={{ fontSize: "16px", fontWeight: 600 }}>
                      {selectedMember?.feedback}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}

          <section className="achievement-section-3 fix section-bg-2">
            <div className="shape-image">
              <img src="/assets/img/achiv-shape.png" alt="shape-img" />
            </div>
            <div className="container">
              <div className="achievement-wrapper style-2">
                <div className="section-title ">
                  <span className="text-white wow fadeInUp">achievement</span>
                  <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                    Celebrate Major Wins
                  </h2>
                </div>
                <div
                  className="counter-area"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                  }}
                >
                  <div
                    className="counter-items wow fadeInUp"
                    data-wow-delay=".3s"
                    style={{
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="icon">
                      <img
                        src="/assets/img/achievement-icon/01.svg"
                        alt="icon-img"
                      />
                    </div>
                    <div className="content">
                      <h2>
                        <CounterUp count={6561} />+
                      </h2>
                      <p>Students</p>
                    </div>
                  </div>

                  <div
                    className="counter-items wow fadeInUp"
                    data-wow-delay=".5s"
                    style={{
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="icon">
                      <img
                        src="/assets/img/achievement-icon/02.svg"
                        alt="icon-img"
                      />
                    </div>
                    <div className="content">
                      <h2>
                        <CounterUp count={600} />+
                      </h2>
                      <p>Projects</p>
                    </div>
                  </div>

                  <div
                    className="counter-items wow fadeInUp"
                    data-wow-delay=".7s"
                    style={{
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="icon">
                      <img
                        src="/assets/img/achievement-icon/03.svg"
                        alt="icon-img"
                      />
                    </div>
                    <div className="content">
                      <h2>
                        <CounterUp count={150} />+
                      </h2>
                      <p>Skilled Mentors</p>
                    </div>
                  </div>

                  <div
                    className="counter-items wow fadeInUp"
                    data-wow-delay=".9s"
                    style={{
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="icon">
                      <img
                        src="/assets/img/achievement-icon/04.svg"
                        alt="icon-img"
                      />
                    </div>
                    <div className="content">
                      <h2>
                        <CounterUp count={6561} />+
                      </h2>
                      <p>Certified Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
