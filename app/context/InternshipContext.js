"use client";
import { createContext, useContext, useState, useEffect } from "react";

const InternshipContext = createContext();

export const useInternship = () => useContext(InternshipContext);

export const InternshipProvider = ({ children }) => {
  const [internshipId, setInternshipIdState] = useState(null);

  // State to hold course details
  const [courseData, setCourseData] = useState({
    type: null,
    mainTopic: null,
    courseId: null,
    course: null,
  });

  // State to hold aptitude details
  const [aptitudeData, setAptitudeData] = useState({
    type: null,
    mainTopic: null,
    courseId: null,
    course: null,
  });

  // State to hold aptitude details
  const [interviewData, setInterviewData] = useState({
    type: null,
    mainTopic: null,
    courseId: null,
    course: null,
  });

  useEffect(() => {
    const storedInternshipId = localStorage.getItem("internshipId");
    if (storedInternshipId) {
      setInternshipIdState(storedInternshipId);
    }
  }, []);

  const setInternshipId = (id) => {
    setInternshipIdState(id);
    localStorage.setItem("internshipId", id);
  };

  // Function to set course data
  const setCourseDetails = (courseDetails) => {
    setCourseData(courseDetails);
  };

  // Function to set aptitude data
  const setAptitudeDetails = (courseDetails) => {
    setAptitudeData(courseDetails);
  };

  // Function to set interview questions data
  const setInterviewDetails = (courseDetails) => {
    setInterviewData(courseDetails);
  };

  const data = {
    internshipId,
    setInternshipId,
    courseData,
    setCourseDetails,
    aptitudeData,
    setAptitudeDetails,
    interviewData,
    setInterviewDetails,
  };

  return (
    <InternshipContext.Provider value={data}>
      {children}
    </InternshipContext.Provider>
  );
};
