import Link from "next/link";
import VideoPopup from "../elements/VideoPopup";
import CounterUp from "../elements/CounterUp";

export default function About1() {
  return (
    <>
      <section className="about-section section-padding fix" id="about">
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <div className="counter-shape float-bob-y">
                    <div className="icon flex justify-center items-center">
                      <img
                        src="/assets/img/about/icon-1 - Copy.svg"
                        alt="icon-img"
                        style={{ color: "blue" }}
                      />
                    </div>
                    <div className="content">
                      <h3>
                        <CounterUp count={6561} />+
                      </h3>
                    </div>
                  </div>

                  <div
                    className="about-image-1 bg-cover wow fadeInLeft"
                    data-wow-delay=".3s"
                    style={{
                      backgroundImage: 'url("assets/img/about/1.jpg")',
                    }}
                  >
                    <div
                      className="about-image-2 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <img
                        src="/assets/img/about/certificate6.jpg"
                        alt="about-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-25 mt-lg-0">
                <div className="about-content">
                  <div className="section-title">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Why Codestrup Infotech?
                    </h2>
                  </div>
                  <p className="mt-1 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Get Both Internship & Course certification & Get Job Ready !
                  </p>
                  <div className="about-icon-items">
                    <div
                      className="icon-items wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <div className="icon flex justify-center items-center">
                        <img
                          src="/assets/img/about/icon-2.svg"
                          alt="icon-img"
                        />
                      </div>
                      <div className="content">
                        <h4>Get Your First Job</h4>
                        <p>
                         Become Zero To Hero With Our Training Program and get your first job
                        </p>
                      </div>
                    </div>
                    <div
                      className="icon-items wow fadeInUp"
                      data-wow-delay=".9s"
                    >
                      <div className="icon flex justify-center items-center">
                        <img
                          src="/assets/img/about/icon-3.svg"
                          alt="icon-img"
                        />
                      </div>
                      <div className="content">
                        <h4>Career Growth and Development</h4>
                        <p>
                         Learn from the basic to advance programming skills and grow your career
                        </p>
                      </div>
                    </div>
                    <div
                      className="icon-items wow fadeInUp"
                      data-wow-delay=".9s"
                    >
                      <div className="icon flex justify-center items-center">
                        <img
                          src="/assets/img/achievement-icon/03.svg"
                          alt="icon-img"
                          style={{
                            width: "48px",
                          }}
                        />
                      </div>
                      <div className="content">
                        <h4>Flexibility and Convenience</h4>
                        <p>
                          Work and Learn remotely, enjoy a flexible schedule, and access
                          online resources for learning and development.
                        </p>
                      </div>
                    </div>
                    {/* <div className="icon-items wow fadeInUp" data-wow-delay=".9s">
                                            <div className="icon flex justify-center items-center">
                                                <img src="/assets/img/about/icon-1.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>Benefits</h4>
                                                <p>
                                                Verify your accomplishments and abilities with a certificate of completion. Get certificate to open up new opportunities.
                                                </p>
                                            </div>
                                        </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
