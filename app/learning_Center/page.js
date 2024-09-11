import Layout from "@/components/layout/Layout";
import Footer3 from "@/components/layout/footer/Footer3";
import Link from "next/link";
export default function Project() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Learning Center">
        <section style={{padding:'60px 0'}}>
        <h2
                className="wow fadeInUp"
                data-wow-delay=".3s"
                style={{ display: "flex", justifyContent: "center" }}
              >
               Coming Soon...
              </h2>
        </section>
        <section className="project-section section-padding fix">
          <div className="container">
            <div className="row g-4">
              <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="project-items">
                  <div className="project-image">
                    <img src="/assets/img/project/01.jpg" alt="project-img" />
                    <div className="project-content">
                      <h4>
                        <Link href="/project-details">
                         Text Learning
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="project-items">
                  <div className="project-image">
                    <img src="/assets/img/project/02.jpg" alt="project-img" />
                    <div className="project-content">
                      <h4>
                        <Link href="/project-details">Video Learning</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="project-items">
                  <div className="project-image">
                    <img src="/assets/img/project/03.jpg" alt="project-img" />
                    <div className="project-content">
                      <h4>
                        <Link href="/project-details">Aptitude Preparation</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="project-items">
                  <div className="project-image">
                    <img src="/assets/img/project/04.jpg" alt="project-img" />
                    <div className="project-content">
                      <h4>
                        <Link href="/project-details">Interview Preparation</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </section>
        
      </Layout>
    </>
  );
}
