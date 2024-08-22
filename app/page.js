'use client';
import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/About1";
import Brand1 from "@/components/sections/Brand1";
import Faq1 from "@/components/sections/Faq1";
import Hero1 from "@/components/sections/Hero1";
import Marque1 from "@/components/sections/Marque1";
import Service1 from "@/components/sections/Service1";
import Certified from "@/components/sections/Certified";
import Achievement3 from "@/components/sections/Achievement3";
import Testimonial3 from "@/components/sections/Testimonial3";
<<<<<<< HEAD
=======
import WorkProcess1 from "@/components/sections/WorkProcess1";
>>>>>>> e9d2564b36ab291059cddc276756a50a3ed038af
import Marque4 from "@/components/sections/Marque4";
import Brand2 from "@/components/sections/Brand2";
import WorkProcess2 from "@/components/sections/WorkProcess2";
import useScreenWidth from "@/components/hooks/useScreenWidth";
import dynamic from 'next/dynamic';


const WorkProcess1 = dynamic(() => import('@/components/sections/WorkProcess1'), {
  ssr: false 
});

export default function Home() {
<<<<<<< HEAD
  const width = useScreenWidth();

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <Hero1 />
      <Marque1 />
      <About1 />
      <Brand1 />
      <Service1 />
      {/* Conditionally render WorkProcess1 or WorkProcess2 based on screen width */}
      {width >= 768 ? <WorkProcess1 /> : <WorkProcess2 />}
      <Achievement3 />
      <Marque4 />
      <Testimonial3 />
      <Brand2 />
      <Certified />
      <Faq1 />
    </Layout>
=======
  return (
    <>
 
        <Layout headerStyle={1} footerStyle={1}>
          <Hero1 />
          <Marque1 />
          <About1 />
          <Brand1 />
          <Service1 />
          <WorkProcess1 />
          <Achievement3 />
          <Marque4 />
          <Testimonial3 />
          <Brand2 />
          <Certified />
          <Faq1 />
        </Layout>
      
    </>
>>>>>>> e9d2564b36ab291059cddc276756a50a3ed038af
  );
}
