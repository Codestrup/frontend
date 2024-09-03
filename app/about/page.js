import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import Footer3 from "@/components/layout/footer/Footer3";
import Marque4 from "@/components/sections/Marque4";
import BrandSlider1 from "@/components/slider/BrandSlider1";
import ProjectSlider2 from "@/components/slider/ProjectSlider2";
import Link from "next/link";
export default function About() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
        <div>
          <section
            className="about-section  fix bg-cover"
            style={{
              backgroundImage: 'url("assets/img/service/service-bg-2.jpg")',
              paddingTop: "120px",
              paddingBottom: "50px",
            }}
          >
            <div className="container">
              <div className="about-wrapper style-2">
                <div className="about-content ">
                  <div className="section-title">
                    <h2
                      className="wow fadeInUp"
                      data-wow-delay=".3s"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      About Codestrup Infotech Pvt. Ltd.
                    </h2>
                  </div>

                  <div className="about-icon-items">
                    <div
                      className="icon-items wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <p>
                        Codestrup Infotech is a leading software development
                        company dedicated to delivering innovative solutions
                        that drive business growth. Our commitment to quality,
                        innovation, and value creation sets us apart. Through
                        ongoing training and development, we ensure our team
                        stays at the forefront of technology, enabling us to
                        provide exceptional services to our clients.
                      </p>
                    </div>


                    <div
                      className="icon-items wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <p>
                        Codestrup Infotech Pvt. Ltd. is a pioneer in providing
                        industry-aligned online internship programs. Our mission
                        is to bridge the gap between academia and the
                        professional world by offering practical, hands-on
                        training in cutting-edge technologies.
                      </p>
                    </div>

                    <div
                      className="icon-items wow fadeInUp"
                      data-wow-delay=".9s"
                    >
                      <p>
                        We specialize in offering comprehensive online
                        internships in programming languages such as React JS,
                        Node JS, Python, Java, WordPress, Android, Flutter, iOS,
                        and PHP. Our programs are meticulously designed by
                        seasoned IT industry experts to ensure that interns gain
                        real-world experience and develop the skills demanded by
                        top companies.
                      </p>
                    </div>
                    <div
                      className="icon-items wow fadeInUp"
                      data-wow-delay=".9s"
                    >
                      <p>
                        At Codestrup Infotech, we believe in learning by doing.
                        Our internship programs are project-oriented, allowing
                        students to apply their knowledge to real-world
                        challenges. Upon successful completion, interns receive
                        a certificate validating their skills and
                        accomplishments.
                      </p>
                    </div>
                    <div
                      className="icon-items wow fadeInUp"
                      data-wow-delay=".9s"
                    >
                      <p>
                        Join us and embark on a transformative learning journey
                        that will equip you with the expertise to excel in your
                        chosen tech career.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Marque4 />
        </div>
      </Layout>
    </>
  );
}
