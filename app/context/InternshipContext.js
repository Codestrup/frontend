"use client";
import { createContext, useContext, useState, useEffect } from "react";

const InternshipContext = createContext();

export const useInternship = () => useContext(InternshipContext);

export const InternshipProvider = ({ children }) => {
  const [internshipId, setInternshipIdState] = useState(null);

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

  return (
    <InternshipContext.Provider value={{ internshipId, setInternshipId }}>
      {children}
    </InternshipContext.Provider>
  );
};
