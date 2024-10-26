import Footer3 from "@/components/layout/footer/Footer3";
import Layout from "@/components/layout/Layout";
import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Layout headerStyle={1}>
        <div style={{ paddingBottom: "30px" }}>
          <h2
            className="text-center wow fadeInUp terms-text"
            style={{ backgroundColor: "#384bff ", color: "white" }}
            data-wow-delay=".3s"
          >
            Refund Policy
          </h2>
        </div>
        <div className="container">
          {/* <h6
            className="wow fadeInUp"
            style={{
              paddingLeft: "47px",
              paddingRight: "47px",
              paddingTop: "0px",
              paddingBottom: "10px",
            }}
          >
            Refund Eligibility:
          </h6>

          <p
            className="wow fadeInUp"
            style={{
              paddingLeft: "47px",
              paddingRight: "47px",
              paddingBottom: "47px",
            }}
          >
            To be eligible for a refund, you must submit a refund request within
            7 days of the program start date. Requests submitted after this
            period will not be considered.
          </p>

          <h6
            className="wow fadeInUp"
            style={{
              paddingLeft: "47px",
              paddingRight: "47px",
              paddingTop: "0px",
              paddingBottom: "10px",
            }}
          >
            Refund Process:
          </h6>
          <p
            className="wow fadeInUp"
            style={{
              paddingLeft: "47px",
              paddingRight: "47px",
              paddingBottom: "47px",
            }}
          >
            Submit a Refund Request: To initiate a refund, please contact our
            customer support team within the 7-day window.
          </p>

          <h6
            className="wow fadeInUp"
            style={{
              paddingLeft: "47px",
              paddingRight: "47px",
              paddingTop: "0px",
              paddingBottom: "10px",
            }}
          >
            Verification::
          </h6>
          <p
            className="wow fadeInUp"
            style={{
              paddingLeft: "47px",
              paddingRight: "47px",
              paddingBottom: "47px",
            }}
          >
            Our team will verify your request and the date of program
            commencement. Our team will verify your request and the date of
            program commencement.
          </p>

          <h6
            className="wow fadeInUp"
            style={{
              paddingLeft: "47px",
              paddingRight: "47px",
              paddingTop: "0px",
              paddingBottom: "10px",
            }}
          >
            Refund Issuance::
          </h6>
          <p
            className="wow fadeInUp"
            style={{
              paddingLeft: "47px",
              paddingRight: "47px",
              paddingBottom: "47px",
            }}
          >
            Upon verification, the refund will be processed to your original
            payment method within [number] business days.
          </p>

          <h6
            className="wow fadeInUp"
            style={{
              paddingLeft: "47px",
              paddingRight: "47px",
              paddingTop: "0px",
              paddingBottom: "10px",
            }}
          >
            Important Notes:
          </h6>
          <p
            className="wow fadeInUp"
            style={{
              paddingLeft: "47px",
              paddingRight: "47px",
              paddingBottom: "47px",
            }}
          >
            Refunds will be issued for the full amount paid for the internship
            program. Once you have accessed any program materials or started the
            internship, you will not be eligible for a refund.
          </p>
          <h6
            className="wow fadeInUp"
            style={{
              paddingLeft: "47px",
              paddingRight: "47px",
              paddingTop: "0px",
              paddingBottom: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            We reserve the right to modify this refund policy at any time.
          </h6> */}

          <p className="mb-2">
            Thank you for using Codestrup internship program. We strive to
            provide the best online learning experience for our users. However,
            we understand that there may be instances where you may need to
            request a refund. Please read our refund policy carefully to
            understand how refunds are processed.
          </p>

          <Box
            className="pb-4"
            sx={{
              "& li": {
                fontWeight: "400 !important",
              },

              "& ul": {
                listStyle: "disc !important",
                paddingLeft: "30px",
              },

              "& span":{
                color:"#384bff"
              }
            }}
          >
            <h6 className="wow fadeInUp mb-2">1.Refund Eligibility:</h6>

            <p>
              <strong>1.1 internship Enrollment Fees:</strong> Refunds for
              internship enrollment fees are subject to the following
              conditions:
            </p>

            <ul className="mb-2">
              <li>
                <strong>Within 7 Days:</strong>
                If you request a refund within 7 days of enrolling in a
                internship and have not completed more than 10% of the course
                content and certificate of course not generated, you are
                eligible for a full refund.
              </li>

              <li>
                <strong>Technical Issues:</strong>
                If you encounter technical issues that prevent you from
                accessing the course content, you may request a refund within 15
                days of enrollment. We will investigate the issue before
                processing the refund.
              </li>
            </ul>

            <p>
              <strong>1.2 Subscription Plans:</strong>
               Refunds for subscription plans are subject to the following
              conditions:
            </p>

            <ul className="mb-2">
              <li>
                <strong>Within 5 Days: </strong>
                If you request a refund within 5 days of subscribing and have
                not utilized any premium features during this period, you are
                eligible for a full refund.
              </li>

              <li>
                <strong>Technical Issues:</strong>
                If you experience technical problems that hinder your access to
                premium features, you may request a refund within 15 days of
                subscribing. Our team will assess the issue before processing
                the refund.
              </li>
            </ul>

            <h6 className="mt-2 mb-2">2.Refund Process:</h6>
            <p>
              2.1 To initiate a refund request, please contact our support team
              at <span>info@codestrup.in</span> within the applicable refund
              period specified above. Include your full name, email address,
              course or subscription details, and reason for the refund request.
            </p>

            <p>
              2.2 Our support team will review your request and may require
              additional information to process the refund.
            </p>

            <p>
              2.3 If your refund request is approved, the refund will be
              processed using the original payment method. Please allow up to 10
              working days for the refund to be reflected in your account.
            </p>

            <h6 className="mt-2 mb-2">3.Non-Refundable Items:</h6>
            <p>3.1 Certain items are non-refundable, including:</p>

            <ul>
              <li>
                Courses where more than 10% of the content has been accessed or
                completed.
              </li>

              <li>Courses when Certificate generated</li>

              <li>
                Subscription plans where premium features have been used during
                the applicable refund period.
              </li>
            </ul>

            <h6 className="mt-2 mb-2">4.Contact Us:</h6>

            <p>
              If you have any questions or concerns regarding our refund policy,
              please contact our support team at <span>info@codestrup.in</span>.
              Please note that our refund policy is subject to change without
              prior notice. It is your responsibility to review the policy
              periodically.
            </p>

            <p className="mt-4">
              By enrolling in a course or subscribing to our services, you
              acknowledge that you have read,understood, and agreed to our
              refund policy
            </p>
          </Box>
        </div>
        <Footer3 />
      </Layout>
    </div>
  );
};

export default page;
