"use client";

import Footer3 from "@/components/layout/footer/Footer3";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";
import { styled } from "@mui/material/styles";

const termsList = [
  "To access and use the Services, you agree to provide true, accurate and complete information to us during and after registration, and you shall be responsible for all acts done through the use of your registered account.",
  "Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials offered on this website or through the Services, for any specific purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.",
  "Your use of our Services and the website is solely at your own risk and discretion. You are required to independently assess and ensure that the Services meet your requirements.",
  "The contents of the Website and the Services are proprietary to Us and you will not have any authority to claim any intellectual property rights, title, or interest in its contents.",
  "You acknowledge that unauthorized use of the Website or the Services may lead to action against you as per these Terms or applicable laws.",
  "You agree to pay us the charges associated with availing the Services.",
  "You agree not to use the website and/ or Services for any purpose that is unlawful, illegal or forbidden by these Terms, or Indian or local laws that might apply to you.",
  "You agree and acknowledge that website and the Services may contain links to other third party websites. On accessing these links, you will be governed by the terms of use, privacy policy and such other policies of such third party websites.",
  "You understand that upon initiating a transaction for availing the Services you are entering into a legally binding and enforceable contract with us for the Services.",
  "You shall be entitled to claim a refund of the payment made by you in case we are not able to provide the Service. The timelines for such return and refund will be according to the specific Service you have availed or within the time period provided in our policies (as applicable). In case you do not raise a refund claim within the stipulated time, then this would make you ineligible for a refund.",
  "Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to perform an obligation under these Terms if performance is prevented or delayed by a force majeure event.",
  "These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and construed in accordance with the laws of India.",
  "All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.",
  "All concerns or communications relating to these Terms must be communicated to us using the contact information provided on this website.",
];

const TermsContainer = styled("div")({
  "& ul": {
    listStyle: "disc",
    paddingLeft: "20px",
  },

  "& li": {
    fontWeight: 400,
    margin: "10px 0",
  },
});

const page = () => {
  return (
    <TermsContainer>
      <Layout headerStyle={1}>
        <div style={{ paddingBottom: "30px" }}>
          <h2
            className="text-center wow fadeInUp terms-text"
            style={{ backgroundColor: "#384bff ", color: "white" }}
            data-wow-delay=".3s"
          >
            Terms & Condition
          </h2>
        </div>

        <div className="container">
          <p className="wow fadeInUp">
            These Terms and Conditions, along with privacy policy or other terms
            (“Terms”) constitute a binding agreement by and between CODESTRUP
            INFOTECH PVT LTD, ( “Website Owner” or “we” or “us” or “our”) and
            you (“you” or “your”) and relate to your use of our website, goods
            (as applicable) or services (as applicable) (collectively,
            “Services”).
          </p>

          <br />

          <p className="wow fadeInUp">
            By using our website and availing the Services, you agree that you
            have read and accepted these Terms (including the Privacy Policy).
            We reserve the right to modify these Terms at any time and without
            assigning any reason. It is your responsibility to periodically
            review these Terms to stay informed of updates.
          </p>

          <br />

          <p className="wow fadeInUp">
            The use of this website or availing of our Services is subject to
            the following terms of use:
          </p>

          <br />

          <ul>
            {termsList.map((term, i) => {
              return (
                <li key={i} className="wow fadeInUp">
                  {term}
                </li>
              );
            })}
          </ul>
        </div>
        <Footer3 />
      </Layout>
    </TermsContainer>
  );
};

export default page;
