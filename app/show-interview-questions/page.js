"use client";

import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { toast } from "react-hot-toast";
import axios from "axios";
import { LuListTree } from "react-icons/lu";
import {
  Box,
  Drawer,
  IconButton,
  ListItemButton,
  Typography,
  Container,
} from "@mui/material";
import { ApiConfig } from "../Apiconfig";
import { useInternship } from "../context/InternshipContext";
import Layout from "@/components/layout/Layout";

export default function page() {
  const { interviewData: course } = useInternship();
  const [isOpen, setIsOpen] = useState(false);
  const [key, setKey] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selected, setSelected] = useState("");
  const [theory, setTheory] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [isComplete, setIsCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    // Function to retrieve and parse jsonData
    const retrieveJsonData = () => {
      let initialData = null;

      // Check and parse the course content
      if (course?.course?.content) {
        try {
          initialData = JSON.parse(course.course.content);
        } catch (error) {
          console.error("Error parsing course content:", error);
        }
      }

      // Check sessionStorage for existing jsonData
      const storedData = sessionStorage.getItem("jsonData");
      if (storedData) {
        try {
          initialData = JSON.parse(storedData);
        } catch (error) {
          console.error("Error parsing stored jsonData:", error);
        }
      }

      setJsonData(initialData); // Set the state to parsed data or null
    };

    retrieveJsonData();

    return () => {
      sessionStorage.removeItem("jsonData"); // Cleanup function
    };
  }, [course]);

  useEffect(() => {
    if (jsonData && jsonData.data && jsonData.data.length > 0) {
      const firstSubtopic = jsonData.data[0].subtopics[0];
      if (firstSubtopic) {
        firstSubtopic.done = true;
        setSelected(firstSubtopic.title);
        setTheory(firstSubtopic.theory);
      }
      sessionStorage.setItem("jsonData", JSON.stringify(jsonData));
    }
  }, [jsonData]);

  const handleSelect = (topics, sub) => {
    const mTopic = jsonData?.data.find((topic) => topic.title === topics);

    const mSubTopic = mTopic?.subtopics.find(
      (subtopic) => subtopic.title === sub
    );

    if (!mSubTopic.theory) {
      setLoading(true);
      toast.promise(
        sendPrompt(
          `Explain me about this subtopic of ${course?.mainTopic} with examples :- ${mSubTopic.title}.`,
          `Example of ${mSubTopic.title} in ${course?.mainTopic}`,
          topics,
          sub
        ),
        {
          loading: "Loading...",
          success: "Content loaded successfully!",
          error: "Failed to load content!",
        }
      );
    } else {
      setSelected(mSubTopic.title);
      setTheory(mSubTopic.theory);
    }
  };

  async function sendPrompt(prompt, promptImage, topics, sub) {
    try {
      const res = await axios.post(
        ApiConfig.generate,
        { prompt },
        
      );
      const generatedText = res.data.text;
      sendImage(generatedText, promptImage, topics, sub);
    } catch {
      setLoading(false);
    }
  }

  async function sendImage(theory, promptImage, topics, sub) {
    try {
      const res = await axios.post(
        ApiConfig.image,
        { prompt: promptImage },
     
      );
      sendData(res.data.url, theory, topics, sub);
    } catch {
      setLoading(false);
      toast.error("Something went wrong!");
    }
  }

  async function sendData(image, theory, topics, sub) {
    const mTopic = jsonData?.data.find((topic) => topic.title === topics);
    const mSubTopic = mTopic?.subtopics.find(
      (subtopic) => subtopic.title === sub
    );

    mSubTopic.theory = theory;
    mSubTopic.image = image;
    setSelected(mSubTopic.title);
    setTheory(theory);
    mSubTopic.done = true;
    updateCourse();
  }

  async function updateCourse() {
    sessionStorage.setItem("jsonData", JSON.stringify(jsonData));
    try {
      await axios.post(ApiConfig.updateinterviewQuetion, {
        content: JSON.stringify(jsonData),
        courseId: course.courseId,
      });
      setLoading(false);
    } catch {
      setLoading(false);
      toast.error("Something went wrong!");
    }
  }

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleOpenClose = (key) => {
    setIsOpen(!isOpen);
    setKey(key);
  };

  const renderTopicsAndSubtopics = (topics) => {
    try {
      return (
        <div style={{ borderRight: "1px solid #c4c4c4", height: "100%" }}>
          {console.log("topics", topics)}
          {topics?.map((topic) => (
            <div key={topic.title}>
              <div className="relative inline-block text-left">
                <ListItemButton
                  onClick={() => handleOpenClose(topic.title)}
                  className="inline-flex justify-between text-start text-base w-64 font-bold text-black"
                >
                  {topic.title}
                  <IoIosArrowDown className="-mr-1 ml-2 h-3 w-3 mt-2" />
                </ListItemButton>

                {isOpen && key === topic.title && (
                  <div className="origin-top-right mt-2 pr-4">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      {topic?.subtopics?.map((subtopic) => (
                        <ListItemButton
                          key={subtopic.title}
                          onClick={() => {
                            handleSelect(topic.title, subtopic.title);
                            toggleSidebar();
                          }}
                          className="flex py-2 text-sm items-center font-normal text-black text-start"
                          role="menuitem"
                        >
                          {subtopic.title}
                        </ListItemButton>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    } catch (error) {
      return <div>Error loading topics.</div>;
    }
  };

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <Container maxWidth="xl">
        <div style={{ width: "100%" }}>
          <Typography variant="h4" mb={3}>
            <IconButton onClick={toggleSidebar}>
              <LuListTree color="primary" />
            </IconButton>
            {course?.mainTopic}
          </Typography>

          <Box className="flex gap-4 flex-col md:flex-row">
            <Drawer
              sx={{
                display: `${isSidebarOpen ? "block" : "none"}`,
                zIndex: 100,
              }}
              variant="permanent"
              PaperProps={{
                sx: {
                  position: "relative",
                  width: 270,
                  backgroundColor: "transparent",
                },
              }}
            >
              {loading ? (
                <p>Loading.... </p>
              ) : (
                renderTopicsAndSubtopics(jsonData?.data)
              )}
            </Drawer>

            <Box>
              {loading ? (
                <div className="w-full h-full flex justify-center">
                  <p>Loading.... </p>
                </div>
              ) : (
                <>
                  <Box
                    sx={{ "& p": { whiteSpace: "break-spaces" } }}
                    dangerouslySetInnerHTML={{ __html: theory }}
                  />
                </>
              )}
            </Box>
          </Box>
        </div>
      </Container>
    </Layout>
  );
}