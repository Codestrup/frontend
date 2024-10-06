"use client";

import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
} from "@mui/material";
import { CheckCircleOutline, CancelOutlined } from "@mui/icons-material";
import { keyframes } from '@mui/system';
import axios from "axios";
import Layout from "@/components/layout/Layout";
import { ApiConfig } from "../Apiconfig";

// Keyframes for animations
const successAnimation = keyframes`
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

const errorAnimation = keyframes`
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

const CertificateValidator = () => {
  const [certificateNumber, setCertificateNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  // Handle certificate number input change
  const handleInputChange = (e) => {
    setCertificateNumber(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);
    setOpenDialog(false);

    try {
      const response = await axios.post(
        ApiConfig.verifyCertificateCode,
        {
          certificateId: certificateNumber,
        }
      );
      if (response.data) {
        setUserData(response.data?.certificate);
      } else {
        setError("Certificate number not valid or not found.");
      }
      setOpenDialog(true);
    } catch (err) {
      setError("Error fetching certificate details. Please try again.");
      setOpenDialog(true);
    } finally {
      setLoading(false);
    }
  };

  // Handle dialog close
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <h4>Validate Your Internship Certificate</h4>

        <p
          style={{
            marginTop: "10px",
          }}
        >
          Enter your certificate number to verify the authenticity of your
          internship. Upon entering a valid certificate number, you will be able
          to view details such as the intern's name, email, and internship type.
        </p>

        <Box
          component="form"
          onSubmit={handleSubmit}
          mt={2}
          sx={{ mb: { xs: 2, md: 4 } }}
        >
          <TextField
            label="Enter Certificate Number"
            variant="outlined"
            fullWidth
            value={certificateNumber}
            onChange={handleInputChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            {loading ? <CircularProgress size={24} /> : "Validate"}
          </Button>
        </Box>

        {/* Dialog box */}
        <Dialog open={openDialog} onClose={handleClose}>
          <DialogTitle>
            {userData ? (
              <Box 
                sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  animation: `${successAnimation} 0.5s ease-in-out` 
                }}
              >
                <CheckCircleOutline sx={{ color: "green", fontSize: 50 }} />
                <Typography sx={{ ml: 2 }} variant="h6">Certificate Valid</Typography>
              </Box>
            ) : (
              <Box 
                sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  animation: `${errorAnimation} 0.5s ease-in-out` 
                }}
              >
                <CancelOutlined sx={{ color: "red", fontSize: 50 }} />
                <Typography sx={{ ml: 2 }} variant="h6">Certificate Invalid</Typography>
              </Box>
            )}
          </DialogTitle>

          <DialogContent>
            {userData ? (
              <Box>
                <Typography variant="h6">User Details</Typography>
                <Typography>Name: {userData?.user?.name}</Typography>
                <Typography>Internship: {userData?.internship?.jobTitle}</Typography>
              </Box>
            ) : (
              <Typography color="error">
                Sorry, we could not find a valid certificate for the number you
                entered. Please check the certificate number and try again.
              </Typography>
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Layout>
  );
};

export default CertificateValidator;
