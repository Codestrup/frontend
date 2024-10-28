"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Project() {
  const router = useRouter();
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Learning Center">
        <section style={{ padding: "60px 0" }}>
          <section className="project-section mt-5 fix">
            <div className="container">
              <div className="row g-4">
                <div className="col-lg-3 col-md-6 mb-4  wow fadeInUp">
                  <Link href="/theory-courses">
                    <div
                      className="card h-100 shadow"
                      style={{
                        borderRadius: "10px",
                        position: "relative",
                        overflow: "hidden",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src="/assets/img/Learning/text.jfif"
                        className="card-img-top"
                        alt="Card 2"
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                          padding: "15px",
                        }}
                      />

                      <div className="project-items">
                        <div className="project-image">
                          <div className="project-content">
                            <h4>
                              Text Courses
                              {/* <Link href="#">Text Courses</Link> */}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-lg-3 col-md-6 mb-4  wow fadeInUp">
                  <div
                    className="card h-100 shadow"
                    style={{
                      borderRadius: "10px",
                      position: "relative",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                    onClick={() => router.push("/internship")}
                  >
                    <img
                      src="/assets/img/Learning/video.jfif"
                      className="card-img-top"
                      alt="Card 2"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        padding: "15px",
                      }}
                    />

                    <div className="project-items">
                      <div className="project-image">
                        <div className="project-content">
                          <h4>
                            <Link href="#">Video Courses</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4  wow fadeInUp">
                  <Link href="/aptitude-preparation">
                    <div
                      className="card h-100 shadow"
                      style={{
                        borderRadius: "10px",
                        position: "relative",
                        overflow: "hidden",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src="/assets/img/Learning/images (2).jfif"
                        className="card-img-top"
                        alt="Card 2"
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                          padding: "15px",
                        }}
                      />

                      <div className="project-items">
                        <div className="project-image">
                          <div className="project-content">
                            <h4>
                              Aptitude Preparation
                              {/* <Link href="#">Aptitude Preparation</Link> */}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-lg-3 col-md-6 mb-4  wow fadeInUp">
                  <Link href="/interview-preparation">
                    <div
                      className="card h-100 shadow"
                      style={{
                        borderRadius: "10px",
                        position: "relative",
                        overflow: "hidden",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src="/assets/img/Learning/interview.webp"
                        className="card-img-top"
                        alt="Card 2"
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                          padding: "15px",
                        }}
                      />

                      <div className="project-items">
                        <div className="project-image">
                          <div className="project-content">
                            <h4>
                              Interview Preparation
                              {/* <Link href="#">Interview Preparation</Link> */}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </section>
      </Layout>
    </>
  );
}
