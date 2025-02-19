"use client";

import Layout from "@/components/layout/Layout";
import React, { useState, useEffect } from "react";
import { ApiConfig } from "../Apiconfig";
import axios from "axios";
import { Box, Card, Container, Typography } from "@mui/material";
import { useInternship } from "../context/InternshipContext";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const [courses, setCourses] = useState([]);
  const { setAptitudeDetails } = useInternship();

  const handleCourseClick = (course) => {
    setAptitudeDetails({
      type: course?.type,
      mainTopic: course?.mainTopic,
      courseId: course?._id,
      course: course,
    });
    router.push("/show-aptiude");
  };

  const fetchUserCourses = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: ApiConfig.getAppAptitude,

        params: {
          limit: 100,
        },
      });

      if (response.status === 200) {
        setCourses(response.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserCourses();
  }, []);

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle={"aptitude preparation"}
      type="aptitudePreparation"
    >
      <Container maxWidth="xl">
        <Box mt={2} className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
          {courses &&
            courses.length > 0 &&
            courses.map((course) => (
              <Card
                className="course-card relative cursor-pointer"
                elevation={3}
                onClick={() => router.push("/internship")}
              >
                <Box
                  style={{
                    height: "225px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={course?.photo}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </Box>

                <Box className="p-4 ">
                  <p
                    className="font-bold "
                    onClick={() => handleCourseClick(course)}
                  >
                    {course.mainTopic && course?.mainTopic.toUpperCase()}
                  </p>
                </Box>
              </Card>
            ))}
        </Box>
      </Container>
    </Layout>
  );
}
