import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Achievement1 from "@/components/sections/Achievement1"
import Brand1 from "@/components/sections/Brand1"
import Cta1 from "@/components/sections/Cta1"
import Faq1 from "@/components/sections/Faq1"
import Hero1 from "@/components/sections/Hero1"
import Marque1 from "@/components/sections/Marque1"
import Marque2 from "@/components/sections/Marque2"
import News1 from "@/components/sections/News1"
import Pricing1 from "@/components/sections/Pricing1"
import Project1 from "@/components/sections/Project1"
import Service1 from "@/components/sections/Service1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import  Service3 from "@/components/sections/Service3" 
// import Achievement3 from "@/components/sections/Achievement3"
import Achievement3  from "@/components/sections/Achievement3"
import Project3 from "@/components/sections/Project3"
import Marque3 from "@/components/sections/Marque3"
import Testimonial3 from "@/components/sections/Testimonial3"
import Team3 from "@/components/sections/Team3"
import News3 from "@/components/sections/News3"
import WorkProcess1 from "@/components/sections/WorkProcess1"
import Marque4 from "@/components/sections/Marque4"
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <Hero1 />
                <Marque1 />
                <About1 />
                <Brand1 />
                <Service1 />
                <WorkProcess1/>
                {/* <Service3 /> */}
                <Achievement3 />
                <Project3 />
                <Marque4 />

                <Team3 />
                <Testimonial3 />
                {/* <Pricing1 /> */}
                <Faq1 />
                <News3 />
                {/* <Cta1 /> */}
            </Layout>
        </>
    )
}