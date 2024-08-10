"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Offcanvas({ isOffCanvas, handleOffCanvas }) {
  return (
    <>
      <div className="fix-area">
        <div className={`offcanvas__info ${isOffCanvas ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img src="/assets/img/logo/Codestrup.png" alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close" onClick={handleOffCanvas}>
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>

              <div className=" d-md-block d-lg-none">
                <MobileMenu />
              </div>
              <p className="text ">
                Gain hands-on experience with real-world projects, master technical skills, enhance problem-solving, and improve soft skills
              </p>

              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link target="_blank" href="#">
                        Office No.301 3rd floor, Umed building, Nanded City rd,
                        Pune , Maharastra 411041
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link href="mailto:info@codestrup.com">
                        <span className="mailto:info@codestrup.com">
                          info@codestrup.com
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link target="_blank" href="#">
                        Mon-Fri, 10am - 6pm
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link href="/tel:9699997689">+91 9699997689</Link>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link
                    href="/contact"
                    className="theme-btn text-center d-none d-lg-block"
                  >
                    <span>
                      Contact
                      <i className="fa-solid fa-arrow-right-long" />
                    </span>
                  </Link>

                  <Link
                    href="https://user.codestrup.in/auth/login"
                    className="theme-btn wow fadeInUp d-lg-none "
                    data-wow-delay=".8s"
                    style={{
                      padding: "16px 24px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <span>
                      {" "}
                      Login | SignUp
                      <i className="fa-solid fa-arrow-right-long" />
                    </span>
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <Link href="https://in.linkedin.com/company/codestrup-infotech-pvt-ltd">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link href="https://wa.me/919699997689">
                        <i className="fab fa-whatsapp" />
                      </Link>
                  <Link href="https://t.me/+6HxZOtDBk6w0N2Vl">
                    <i className="fab fa-telegram" />
                  </Link>
                  {/* <Link href="#"><i className="fab fa-youtube" /></Link> */}
                  <Link href="https://www.instagram.com/codestrup_infotech/">
                    <i className="fab fa-instagram" />
                  </Link>

                  <Link href="https://www.facebook.com/people/Codestrup-Infotech/61559222888433/?mibextid=ZbWKwL">
                    <i className="fab fa-facebook-f" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${isOffCanvas ? "overlay-open" : ""}`}
        onClick={handleOffCanvas}
      />
    </>
  );
}
