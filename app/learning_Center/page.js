import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Project() {

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Learning Center">
        <section style={{ padding: '60px 0' }}>
          <h2
            className="wow fadeInUp"
            data-wow-delay=".3s"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Coming Soon...
          </h2>
          <section className="project-section mt-5 fix">
            <div className="container">
              <div className="row g-4">


               



            

                <div className="col-lg-3 col-md-6 mb-4  wow fadeInUp">
                  <div className="card h-100 shadow" style={{ borderRadius: '10px',position:'relative',overflow:'hidden' }}>
                  <span className="ribbonStyleCourse"></span>
                    <img
                      src="/assets/img/Learning/01.jpg"
                      className="card-img-top"
                      alt="Card 2"
                      style={{ width: '100%', height: '200px', objectFit: 'cover',padding:'15px' }}
                    />
                  
                    <div className="project-items">
                      <div className="project-image">
                        <div className="project-content">
                          <h4>
                            <Link href="/project-details">
                              Text Courses 
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4  wow fadeInUp">
                  <div className="card h-100 shadow" style={{ borderRadius: '10px',position:'relative',overflow:'hidden' }}>
                  <span className="ribbonStyleCourse"></span>
                    <img
                      src="/assets/img/Learning/02.jpg"
                      className="card-img-top"
                      alt="Card 2"
                      style={{ width: '100%', height: '200px', objectFit: 'cover',padding:'15px' }}
                    />
                  
                    <div className="project-items">
                      <div className="project-image">
                        <div className="project-content">
                          <h4>
                            <Link href="/project-details">
                            Video Courses 
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4  wow fadeInUp">
                  <div className="card h-100 shadow" style={{ borderRadius: '10px',position:'relative',overflow:'hidden' }}>
                  <span className="ribbonStyleCourse"></span>
                    <img
                      src="/assets/img/Learning/03.jpg"
                      className="card-img-top"
                      alt="Card 2"
                      style={{ width: '100%', height: '200px', objectFit: 'cover',padding:'15px', }}
                    />
                  
                    <div className="project-items">
                      <div className="project-image">
                        <div className="project-content">
                          <h4>
                            <Link href="/project-details">
                            Aptitude 
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4  wow fadeInUp">
                  <div className="card h-100 shadow" style={{ borderRadius: '10px',position:'relative',overflow:'hidden' }}>
                  <span className="ribbonStyleCourse"></span>
                    <img
                      src="/assets/img/Learning/04.jpg"
                      className="card-img-top"
                      alt="Card 2"
                      style={{ width: '100%', height: '200px', objectFit: 'cover',padding:'15px' }}
                    />
                  
                    <div className="project-items">
                      <div className="project-image">
                        <div className="project-content">
                          <h4>
                            <Link href="/project-details">
                            Interview 
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>

              
               




              </div>
            </div>
          </section>
        </section>

      </Layout>
    </>
  );
}
