"use client";
import { ApiConfig } from "@/app/Apiconfig";
import { useInternship } from "@/app/context/InternshipContext";
import Layout from "@/components/layout/Layout";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Rating,
  styled,
  Typography,
} from "@mui/material";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const StyledBox = styled(Box)(({ theme }) => ({
  "& .imageBox": {
    width: "100%",
    border: "1px solid #c6c5c5",
    padding: "10px",
  },
  "& .highlight": {
    color: "#384bff",
    fontWeight: 600,
  },
  "& .recep-hl": {
    fontSize: "20px",
    fontWeight: 700,
    color: "#000",
  },
}));

const page = async ({ params }) => {
  const [certificate, setCertificate] = useState({});
  const [internship, setInternship] = useState([]);
  const [averageRatings, setAverageRating] = useState(4.5);
  const [type, setType] = useState(true);
  const { setInternshipId } = useInternship();
  const router = useRouter();
  const handleApplyNowClick = async (internship) => {
    await setInternshipId(internship._id);
    handleNextClick();
  };
  const handleNextClick = () => {
    router.push(`/registration_form`);
  };
  function stringAvatar(name) {
    if (!name || typeof name !== "string") {
      return {
        sx: {
          bgcolor: "#ccc",
        },
        children: "?",
      };
    }
    const initials = name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();

    return {
      sx: {
        bgcolor: "#000",
        fontSize: "15px",
        fontWeight: 700,
      },
      children: initials,
    };
  }

  async function fetchCertificate(certificateNumber) {
    try {
      const response = await axios.post(ApiConfig.verifyCertificateCode, {
        certificateId: certificateNumber,
      });
      setCertificate(response?.data || {});
      if (response?.data?.certificate?.fileName.includes("Course")) {
        setType(true);
        console.log("....");
      } else {
        setType(false);
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
      setCertificate({});
    }
  }
  useEffect(() => {
    fetchCertificate(params?.id);
  }, [params?.id]);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get(
          `${ApiConfig.getJobById}/${certificate?.certificate?.internship?._id}`
        );
        setInternship(response?.data?.job);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const getReviews = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `${ApiConfig.getRatingByIntershipId}/${certificate?.certificate?.internship?._id}`,
        });
        if (res.status === 200) {
          const data = res?.data?.rating;

          const averageRating = data.reduce((acc, curr) => {
            return acc + curr?.rating / data.length;
          }, 0);

          setAverageRating(averageRating.toFixed(1));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchInternships();
    getReviews();
  }, [certificate]);
  return (
    <StyledBox>
      <Layout headerStyle={1} footerStyle={1}>
        <Box padding={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={9}>
              <Box className="imageBox">
                <img
                  src={certificate?.certificate?.certificateUrl}
                  alt="Certificate"
                  width="100%"
                  loading="lazy"
                />
              </Box>
              {type ? (
                <Typography mt={1}>
                  This certificate verifies that{" "}
                  <span className="highlight">
                    {certificate?.certificate?.user?.name}
                  </span>{" "}
                  successfully completed the course{" "}
                  <span className="highlight">
                    {certificate?.certificate?.internship?.jobTitle.replace(
                      "Internship",
                      ""
                    )}{" "}
                  </span>
                  on{" "}
                  <span className="highlight">
                    {moment(certificate?.certificate?.issueDate).format(
                      "DD/MM/YYYY"
                    )}
                  </span>
                  . The certificate indicates the entire course was completed as
                  validated by the student.
                </Typography>
              ) : (
                <Typography mt={1}>
                  This internship certificate verifies that{" "}
                  <span className="highlight">
                    {certificate?.certificate?.user?.name}
                  </span>{" "}
                  successfully completed the{" "}
                  <span className="highlight">
                    {certificate?.certificate?.internship?.jobTitle.replace(
                      "Internship",
                      ""
                    )}{" "}
                  </span>
                  internship program on{" "}
                  <span className="highlight">
                    {moment(certificate?.certificate?.issueDate).format(
                      "DD/MM/YYYY"
                    )}
                  </span>
                  . The certificate confirms the completion of all tasks and
                  projects as part of the internship, as validated by the
                  supervising authority. The internship had a total duration of{" "}
                  <span className="highlight">{internship?.duration}</span>
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3}>
              <Typography className="recep-hl">
                Certificate Recipient:{" "}
              </Typography>
              <div className="flex mt-2 gap-3 items-center">
                <Avatar
                  {...stringAvatar(certificate?.certificate?.user?.name)}
                />
                <Typography
                  fontWeight={700}
                  color="black"
                  className="leading-3"
                >
                  {certificate?.certificate?.user?.name}
                </Typography>
              </div>

              <Typography mt={3} className="recep-hl">
                About the Course:
              </Typography>

              <Card
                sx={{
                  width: "100%",
                  boxShadow: 2,
                  borderRadius: 2,
                  mt: 2,
                  cursor: "pointer",
                }}
                onClick={() => handleApplyNowClick(internship)}
              >
                {/* Card Media */}
                <CardMedia
                  component="img"
                  height="140"
                  image={internship?.imageUrl} // Replace with your image URL
                  alt="Course Image"
                  loading="lazy"
                />

                {/* Card Content */}
                <CardContent>
                  <Typography fontWeight={700} gutterBottom>
                    {internship?.jobTitle}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    display="flex"
                    alignItems="center"
                    sx={{ gap: 0.5 }}
                  >
                    <Rating readOnly precision={0.5} value={averageRatings} />
                    4.6{" "}
                    <span style={{ marginLeft: 4 }}>
                      {" "}
                      ({internship?.enrollmentStudentCount})
                    </span>
                  </Typography>
                  {/* 
                  <Typography variant="body2" sx={{ marginTop: 1 }}>
                    40.5 total hours • 544 lectures
                  </Typography> */}
                </CardContent>

                {/* Card Footer */}
                {/* <CardActions
                  sx={{
                    flexDirection: "column",
                    alignItems: "start",
                    px: 2,
                    pb: 2,
                    pt: 0,
                    "& .MuiChip-root": {
                      margin: "0px",
                    },
                  }}
                >
                  <Typography mb="5px" color="primary">
                    ₹{internship?.price}
                  </Typography>

                  <Chip label="Bestseller" />
                </CardActions> */}
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </StyledBox>
  );
};

export default page;
