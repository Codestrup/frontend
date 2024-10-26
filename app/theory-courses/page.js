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
  const { setCourseDetails } = useInternship();

  const handleCourseClick = (course) => {
    setCourseDetails({
      type: course?.type,
      mainTopic: course?.mainTopic,
      courseId: course?._id,
      course: course,
    });
    router.push("/show-course");
  };

  const fetchUserCourses = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: ApiConfig.courses,

        params: {
          limit: 100,
        },
      });

      if (response.status === 200) {
        setCourses(response.data?.courses);
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
      breadcrumbTitle={"theory courses"}
      type="theoryCourses"
    >
      <Container maxWidth="xl">
        <Box mt={2} className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
          {courses &&
            courses.length > 0 &&
            courses.map((course) => (
              <Card className="course-card relative" elevation={3}>
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
                    className="font-bold cursor-pointer"
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
