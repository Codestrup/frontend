"use client";

import Layout from "@/components/layout/Layout";
import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Button } from "@mui/material";
import Link from "next/link";
import axios from "axios";
import { ApiConfig } from "../Apiconfig";

export default function page() {
  const [internshipList , setInternshipList] = useState([]);

useEffect(() => {
  console.log("page called")
  const getInternshipList = async () => {
    try {
      const res = await axios({
        method:'GET',
        url:ApiConfig.getFeaturedJobData,
      });
      if(res.status === 200){
        setInternshipList(res?.data?.data)
      }
    } catch (error) {
      console.log(error)
    }
  };
  getInternshipList()

},[]);


  return (
    <Layout headerStyle={1} footerStyle={1}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Card sx={{ maxWidth: 500, padding: 3, boxShadow: 3, margin: 3 }}>
          <CardContent>
            <h4
              style={{
                fontSize: "24px",
                color: "red",
                marginBottom: "15px",
              }}
            >
              Payment Failed
            </h4>
            <p>
              We're sorry, but something went wrong with your payment. Your
              transaction could not be completed at this time.
            </p>
            <Box display="flex" justifyContent="center" mt={2}>
              <Link href="/internship" variant="contained" color="primary">
                <Button variant="contained">OK</Button>
              </Link>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Layout>
  );
}
