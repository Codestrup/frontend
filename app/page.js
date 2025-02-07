"use client";
import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/About1";
import Brand1 from "@/components/sections/Brand1";
import Faq1 from "@/components/sections/Faq1";
import Hero1 from "@/components/sections/Hero1";
import Service1 from "@/components/sections/Service1";
import Certified from "@/components/sections/Certified";
import Achievement3 from "@/components/sections/Achievement3";
import Testimonial3 from "@/components/sections/Testimonial3";
import WorkProcess1 from "@/components/sections/WorkProcess1";
import useScreenWidth from "@/components/hooks/useScreenWidth";
import { IconButton } from "@mui/material";

export default function Home() {
  const width = useScreenWidth();

  return (
    <div style={{ position: "relative" }}>
      <Layout headerStyle={1} footerStyle={1}>
        <Hero1 />
        {/* <Marque1 /> */}
        <About1 />
        <Brand1 />
        <Service1 />
        <WorkProcess1 />
        <Achievement3 />
        {/* <Marque4 /> */}
        <Testimonial3 />
        {/* <Brand2 /> */}
        <Certified />
        <Faq1 />
      </Layout>
      <IconButton
        href="https://wa.me/919699997689"
        target="_blank"
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 99,
          background: "transparent",
        }}
      >
        <img
          src="/assets/img/WhatsApp.png"
          alt="icon"
          style={{
            width: "50px",
            height: "50px",
            // boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
            filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))",
          }}
        />
        {/* <WhatsApp sx={{ width: "50px", height: "50px", color: "#25D366" }} /> */}
      </IconButton>
    </div>
  );
}
