"use client";
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { useInternship } from "../../app/context/InternshipContext";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ApiConfig } from "../Apiconfig";
import useAppSettings from "@/components/hooks/appSettings";
import { Close } from "@mui/icons-material";

const Page = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();
  const searchParams = useSearchParams();
  const refer = searchParams.get("refer");
  const [internships, setInternships] = useState([]);
  const { setInternshipId } = useInternship();
  const [openDialog, setOpenDialog] = useState(false);
  const [internshipDuration, setInternshipDuration] = useState([]);
  const appSetting = useAppSettings();
  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: ApiConfig.groupInternshipData,
          params: {
            limit: 100,
          },
        });
        setInternships(response?.data?.data?.internship || []);
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

  const handleInternshipSelect = async (internship) => {
    await setInternshipDuration(internship);
    setOpenDialog(true);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
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
                      style={{ marginTop: "48px" }}
                    >
                      <Card
                        elevation={3}
                        className="service-box-items"
                        onClick={() =>
                          handleInternshipSelect(item?.internships)
                        }
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          padding: "0px",
                          boxSizing: "border-box",
                          marginTop: "0px",
                          borderRadius: "10px",
                          cursor: "pointer",
                          ...(isMobile
                            ? { maxHeight: "auto" }
                            : { maxHeight: "350px", height: "100%" }),
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
                              : { maxHeight: "350px" }),
                          }}
                        >
                          <div
                            className=""
                            style={{
                              width: "100%",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              handleInternshipSelect(item?.internships)
                            }
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
                            style={{
                              padding: "20px",
                              marginTop: "0",
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <h4>
                              <p
                                onClick={() =>
                                  handleInternshipSelect(item?.internships)
                                }
                                style={{ cursor: "pointer" }}
                              >
                                {item.jobTitle}
                              </p>
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

                            {/* <p>{item?.duration}</p> */}
                            <div
                              className="content-bottom d-flex align-items-center justify-content-between"
                              style={{
                                marginTop: "auto",
                              }}
                            >
                              <span
                                className="theme-btn-2 apply-now-btn mt-3 d-flex align-items-center"
                                onClick={() =>
                                  handleInternshipSelect(item?.internships)
                                }
                                style={{ cursor: "pointer" }}
                              >
                                Apply Now
                                <i className="fa-solid fa-arrow-right-long ms-2" />
                              </span>
                              {/* <span className="theme-btn-2 mt-3 d-flex align-items-center">
                                ₹ {item.price}
                              </span> */}
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

      <Dialog
        maxWidth="md"
        sx={{
          width: "100%",
          "& .MuiDialog-paper": {
            width: "100% !important",
            maxWidth: "640px",
            borderRadius: "12px",
            // padding: "16px",
            padding: { xs: "10px", md: "20px" },

            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          },
        }}
        open={openDialog}
        onClose={handleDialogClose}
      >
        {/* <div className="flex justify-center w-full "> */}
        <DialogTitle
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
            marginBottom: "8px",
            position: "relative",
          }}
        >
          {internshipDuration[0]?.jobTitle || "Internship Details"}
          <IconButton
            sx={{ position: "absolute", right: "20px" }}
            onClick={handleDialogClose}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        {/* </div> */}
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <img
            src={internshipDuration[0]?.imageUrl || "/placeholder-image.png"}
            alt="Internship Icon"
            style={{
              width: "80%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
          />
          <Typography
            sx={{
              fontSize: "1rem",
              color: "#666",
              textAlign: "center",
              marginTop: "8px",
            }}
          >
            Choose your preferred duration below:
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              justifyContent: "center",
            }}
          >
            {internshipDuration?.map((item, index) => (
              <div className="flex flex-col items-center">
                <Typography className="font-bold">
                  {appSetting?.freeInternship === false
                    ? `₹ ${item?.price}`
                    : "Free"}{" "}
                </Typography>
                <Button
                  onClick={() => handleApplyNowClick(item)}
                  key={index}
                  variant="outlined"
                  sx={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    textTransform: "capitalize",
                    borderColor: "#007BFF",
                    color: "#007BFF",
                    "&:hover": {
                      backgroundColor: "#EAF4FF",
                      borderColor: "#0056b3",
                    },
                  }}
                >
                  {item?.duration}
                </Button>
              </div>
            ))}
          </Box>
        </DialogContent>
        {/* <DialogActions
          sx={{
            justifyContent: "center",
          }}
        >
          <Button
            onClick={handleDialogClose}
            variant="contained"
            sx={{
              backgroundColor: "#007BFF",
              color: "#fff",
              textTransform: "capitalize",
              padding: "8px 24px",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#0056b3",
              },
            }}
          >
            Close
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
};

export default Page;
