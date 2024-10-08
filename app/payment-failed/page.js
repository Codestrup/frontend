"use client";

import Layout from "@/components/layout/Layout";
import React, { useEffect } from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  useEffect(() => {
    router.push("/payment-failed")
  }, []);

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
              <Button
                variant="contained"
                color="primary"
                onClick={() => router.push("/internship")}
              >
                OK
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Layout>
  );
}
