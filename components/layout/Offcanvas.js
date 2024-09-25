"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Offcanvas({ isOffCanvas, handleOffCanvas }) {
  return (
    <>
      <div className="fix-area d-md-block d-lg-none">
        <div className={`offcanvas__info ${isOffCanvas ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
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
                    <p>
                      {" "}
                      Login | SignUp
                      <i className="fa-solid fa-arrow-right-long" />
                    </p>
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


              <div className="offcanvas__contact">
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
                  <Link href="https://www.facebook.com/people/Codestrup-Infotech/61559222888433/?mibextid=ZbWKwL">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link href="https://www.instagram.com/codestrup_infotech/">
                    <i className="fab fa-instagram" />
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
