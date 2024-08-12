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
import WorkProcess1 from "@/components/sections/WorkProcess1";
import Marque4 from "@/components/sections/Marque4";
import Brand2 from "@/components/sections/Brand2";


export default function Home() {
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
  );
}
